// Past Life Job Test - Main App
(function() {
    'use strict';

    const state = {
        currentQ: 0,
        scores: {},
        resultType: null,
        premiumUnlocked: false,
        adTimer: null
    };

    // DOM refs
    const $ = id => document.getElementById(id);
    const screens = {
        intro: $('screen-intro'),
        quiz: $('screen-quiz'),
        loading: $('screen-loading'),
        result: $('screen-result')
    };

    function init() {
        resetScores();
        $('btn-start').addEventListener('click', startQuiz);
        $('btn-retry').addEventListener('click', retry);
        $('btn-share').addEventListener('click', shareResult);
        $('btn-save').addEventListener('click', saveImage);
        $('btn-premium').addEventListener('click', showPremium);

        // Update participant count
        try {
            let count = parseInt(localStorage.getItem('pastlife_count') || '0');
            count++;
            localStorage.setItem('pastlife_count', String(count));
            const display = 45820 + count;
            $('participant-count').textContent = display.toLocaleString() + '명 참여';
        } catch (e) {
            $('participant-count').textContent = '45,820명 참여';
        }
    }

    function resetScores() {
        state.scores = {};
        TYPES.forEach(t => state.scores[t.id] = 0);
        state.currentQ = 0;
        state.resultType = null;
        state.premiumUnlocked = false;
    }

    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[name].classList.add('active');
        window.scrollTo(0, 0);
    }

    function startQuiz() {
        resetScores();
        showScreen('quiz');
        renderQuestion();
    }

    function renderQuestion() {
        const q = QUESTIONS[state.currentQ];
        const total = QUESTIONS.length;

        $('progress-bar').style.width = ((state.currentQ / total) * 100) + '%';
        $('question-counter').textContent = (state.currentQ + 1) + ' / ' + total;
        $('question-text').textContent = q.question;

        const wrap = $('answers');
        wrap.innerHTML = '';

        q.answers.forEach((ans, i) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = ans.text;
            btn.addEventListener('click', () => selectAnswer(i));
            wrap.appendChild(btn);
        });
    }

    function selectAnswer(idx) {
        const q = QUESTIONS[state.currentQ];
        const ans = q.answers[idx];

        // Apply scores
        Object.entries(ans.scores).forEach(([type, score]) => {
            state.scores[type] = (state.scores[type] || 0) + score;
        });

        // Visual feedback
        const btns = document.querySelectorAll('.answer-btn');
        btns.forEach(b => b.style.pointerEvents = 'none');
        btns[idx].classList.add('selected');

        setTimeout(() => {
            state.currentQ++;
            if (state.currentQ < QUESTIONS.length) {
                renderQuestion();
            } else {
                showLoading();
            }
        }, 400);
    }

    function showLoading() {
        showScreen('loading');
        setTimeout(() => {
            calcResult();
            showScreen('result');
            renderResult();
        }, 3200);
    }

    function calcResult() {
        let maxScore = -1;
        let maxType = null;
        Object.entries(state.scores).forEach(([type, score]) => {
            if (score > maxScore) {
                maxScore = score;
                maxType = type;
            }
        });
        state.resultType = TYPES.find(t => t.id === maxType);
    }

    function renderResult() {
        const t = state.resultType;
        if (!t) return;

        $('result-emoji').textContent = t.emoji;
        $('result-type').textContent = t.name;
        $('result-type').style.color = t.color;
        $('result-era').textContent = t.era + ' · ' + t.region;
        $('result-desc').textContent = t.description;
        $('result-quote').textContent = t.quote;

        // Strengths
        $('result-strengths').innerHTML = t.strengths.map(s =>
            '<span class="stat-tag">' + s + '</span>'
        ).join('');

        // Weaknesses
        $('result-weaknesses').innerHTML = t.weaknesses.map(w =>
            '<span class="stat-tag weak">' + w + '</span>'
        ).join('');

        // Compatibility - best 2
        const compatList = $('compat-list');
        compatList.innerHTML = '';
        const myCompat = COMPATIBILITY[t.id];
        const sorted = Object.entries(myCompat)
            .filter(([id]) => id !== t.id)
            .sort((a, b) => b[1] - a[1]);

        sorted.slice(0, 3).forEach(([id, score]) => {
            const other = TYPES.find(x => x.id === id);
            if (!other) return;
            const color = score >= 80 ? '#27AE60' : score >= 60 ? '#F39C12' : '#E74C3C';
            compatList.innerHTML += `
                <div class="compat-item">
                    <span class="compat-emoji">${other.emoji}</span>
                    <div class="compat-info">
                        <div class="compat-name">${other.name}</div>
                        <div class="compat-score" style="color:${color}">${score}% 궁합</div>
                    </div>
                    <div class="compat-bar-bg">
                        <div class="compat-bar" style="width:${score}%;background:${color}"></div>
                    </div>
                </div>`;
        });

        // Premium content (hidden)
        $('premium-story').textContent = t.premiumStory;
        $('premium-modern').textContent = t.modernLife;
        $('premium-content').classList.remove('visible');
        $('btn-premium').style.display = '';
        state.premiumUnlocked = false;

        // Draw canvas
        drawResultCard(t);

        // Recommend other tests
        renderRecommend();
    }

    function drawResultCard(t) {
        const canvas = $('resultCanvas');
        const ctx = canvas.getContext('2d');
        const W = 600, H = 800;
        canvas.width = W;
        canvas.height = H;

        // Background - parchment effect
        const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0, t.bgGradient[0]);
        bgGrad.addColorStop(0.5, t.bgGradient[1]);
        bgGrad.addColorStop(1, t.bgGradient[0]);
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // Ornate border
        ctx.strokeStyle = 'rgba(201, 169, 110, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 20, W - 40, H - 40);
        ctx.strokeRect(30, 30, W - 60, H - 60);

        // Corner decorations
        const corners = [[30, 30], [W - 30, 30], [30, H - 30], [W - 30, H - 30]];
        corners.forEach(([cx, cy]) => {
            ctx.beginPath();
            ctx.arc(cx, cy, 6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(201, 169, 110, 0.4)';
            ctx.fill();
        });

        // Radial glow
        const glow = ctx.createRadialGradient(W / 2, 240, 50, W / 2, 240, 250);
        glow.addColorStop(0, t.color + '20');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);

        // Title label
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(201, 169, 110, 0.6)';
        ctx.font = '14px Georgia, serif';
        ctx.fillText('당신의 전생은...', W / 2, 80);

        // Emoji
        ctx.font = '80px serif';
        ctx.fillText(t.emoji, W / 2, 190);

        // Type name
        ctx.fillStyle = t.color;
        ctx.font = 'bold 36px Georgia, serif';
        ctx.fillText(t.name, W / 2, 260);

        // Era
        ctx.fillStyle = 'rgba(201, 169, 110, 0.7)';
        ctx.font = '15px Georgia, serif';
        ctx.fillText(t.era + ' · ' + t.region, W / 2, 295);

        // Divider
        ctx.beginPath();
        ctx.moveTo(100, 320);
        ctx.lineTo(W - 100, 320);
        ctx.strokeStyle = 'rgba(201, 169, 110, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Description (word wrap)
        ctx.fillStyle = '#f0e6d3';
        ctx.font = '15px Georgia, serif';
        wrapText(ctx, t.description, W / 2, 355, W - 100, 24);

        // Quote
        ctx.fillStyle = '#FFD700';
        ctx.font = 'italic 16px Georgia, serif';
        ctx.fillText(t.quote, W / 2, 560);

        // Strengths
        ctx.fillStyle = 'rgba(201, 169, 110, 0.5)';
        ctx.font = '13px sans-serif';
        ctx.fillText('강점: ' + t.strengths.join(' · '), W / 2, 610);

        // Divider bottom
        ctx.beginPath();
        ctx.moveTo(100, 650);
        ctx.lineTo(W - 100, 650);
        ctx.strokeStyle = 'rgba(201, 169, 110, 0.2)';
        ctx.stroke();

        // Watermark
        ctx.fillStyle = 'rgba(201, 169, 110, 0.3)';
        ctx.font = '12px sans-serif';
        ctx.fillText('전생 직업 테스트', W / 2, 690);
        ctx.fillText('swp1234.github.io/past-life', W / 2, 710);

        // Best compatibility
        const myCompat = COMPATIBILITY[t.id];
        const best = Object.entries(myCompat)
            .filter(([id]) => id !== t.id)
            .sort((a, b) => b[1] - a[1])[0];
        if (best) {
            const bestType = TYPES.find(x => x.id === best[0]);
            if (bestType) {
                ctx.fillStyle = 'rgba(201, 169, 110, 0.4)';
                ctx.font = '13px sans-serif';
                ctx.fillText('최고 궁합: ' + bestType.emoji + ' ' + bestType.name + ' (' + best[1] + '%)', W / 2, 750);
            }
        }
    }

    function wrapText(ctx, text, x, y, maxW, lineH) {
        const chars = text.split('');
        let line = '';
        let curY = y;
        for (let i = 0; i < chars.length; i++) {
            const testLine = line + chars[i];
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxW && line.length > 0) {
                ctx.fillText(line, x, curY);
                line = chars[i];
                curY += lineH;
            } else {
                line = testLine;
            }
        }
        if (line) ctx.fillText(line, x, curY);
    }

    function showPremium() {
        // Show ad overlay
        const overlay = $('ad-overlay');
        overlay.classList.add('active');
        let sec = 5;
        $('ad-timer').textContent = sec;

        if (state.adTimer) clearInterval(state.adTimer);
        state.adTimer = setInterval(() => {
            sec--;
            $('ad-timer').textContent = sec;
            if (sec <= 0) {
                clearInterval(state.adTimer);
                overlay.classList.remove('active');
                state.premiumUnlocked = true;
                $('premium-content').classList.add('visible');
                $('btn-premium').style.display = 'none';

                // Track
                if (typeof gtag === 'function') {
                    gtag('event', 'premium_unlock', { event_category: 'monetization', event_label: state.resultType.id });
                }
            }
        }, 1000);
    }

    function shareResult() {
        const t = state.resultType;
        if (!t) return;

        const tmpl = SHARE_TEMPLATES[Math.floor(Math.random() * SHARE_TEMPLATES.length)];
        const text = tmpl
            .replace('{type}', t.name)
            .replace('{emoji}', t.emoji)
            .replace('{era}', t.era)
            .replace('{quote}', t.quote);

        const url = 'https://swp1234.github.io/past-life/';

        if (navigator.share) {
            navigator.share({ title: '전생 직업 테스트', text, url }).catch(() => {});
        } else {
            const full = text + '\n' + url;
            navigator.clipboard.writeText(full).then(() => {
                alert('결과가 클립보드에 복사되었습니다!');
            }).catch(() => {
                prompt('아래 텍스트를 복사하세요:', full);
            });
        }

        if (typeof gtag === 'function') {
            gtag('event', 'share', { event_category: 'engagement', event_label: t.id });
        }
    }

    function saveImage() {
        const canvas = $('resultCanvas');
        const link = document.createElement('a');
        link.download = 'past-life-result.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        if (typeof gtag === 'function') {
            gtag('event', 'save_image', { event_category: 'engagement', event_label: state.resultType?.id });
        }
    }

    function retry() {
        resetScores();
        showScreen('intro');
    }

    function renderRecommend() {
        const wrap = $('recommend-list');
        if (!wrap) return;
        const items = [
            { emoji: '🌡️', name: '감정 온도계 테스트', url: 'https://swp1234.github.io/emotion-temp/' },
            { emoji: '💕', name: 'MBTI 연애 궁합', url: 'https://swp1234.github.io/mbti-love/' },
            { emoji: '🧠', name: 'HSP 민감성 테스트', url: 'https://swp1234.github.io/hsp-test/' },
            { emoji: '💕', name: '사랑 주파수 테스트', url: 'https://swp1234.github.io/love-frequency/' }
        ];
        wrap.innerHTML = items.map(it =>
            `<a href="${it.url}" class="compat-item" style="text-decoration:none;color:inherit">
                <span class="compat-emoji">${it.emoji}</span>
                <div class="compat-info">
                    <div class="compat-name">${it.name}</div>
                    <div class="compat-score" style="color:var(--primary)">바로 해보기 →</div>
                </div>
            </a>`
        ).join('');
    }

    document.addEventListener('DOMContentLoaded', init);
})();
