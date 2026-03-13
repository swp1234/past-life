// Past Life - Time Portal Journey
(function() {
    'use strict';

    // 8 past-life types with full data
    var TYPES = {
        knight: {
            id: 'knight', emoji: '\u{1F5E1}\uFE0F',
            color: '#C41E3A',
            bgGradient: ['#1a0a0e', '#2d1520'],
            compatible: ['scholar', 'healer']
        },
        scholar: {
            id: 'scholar', emoji: '\u{1F4DC}',
            color: '#DAA520',
            bgGradient: ['#1a1508', '#2d2510'],
            compatible: ['knight', 'oracle']
        },
        painter: {
            id: 'painter', emoji: '\u{1F3A8}',
            color: '#E07C5F',
            bgGradient: ['#1a0f0a', '#2d1a14'],
            compatible: ['explorer', 'oracle']
        },
        royal: {
            id: 'royal', emoji: '\u{1F451}',
            color: '#9B59B6',
            bgGradient: ['#120a1a', '#1f142d'],
            compatible: ['knight', 'scholar']
        },
        explorer: {
            id: 'explorer', emoji: '\u{1F9ED}',
            color: '#2E86C1',
            bgGradient: ['#0a1420', '#14202d'],
            compatible: ['pirate', 'painter']
        },
        healer: {
            id: 'healer', emoji: '\u{1F33F}',
            color: '#27AE60',
            bgGradient: ['#0a1a0f', '#142d1a'],
            compatible: ['knight', 'oracle']
        },
        oracle: {
            id: 'oracle', emoji: '\u{1F52E}',
            color: '#8E44AD',
            bgGradient: ['#140a1a', '#22142d'],
            compatible: ['scholar', 'healer']
        },
        pirate: {
            id: 'pirate', emoji: '\u{1F3F4}\u200D\u2620\uFE0F',
            color: '#E74C3C',
            bgGradient: ['#1a0a0a', '#2d1414'],
            compatible: ['explorer', 'painter']
        }
    };

    // Compatibility matrix
    var COMPATIBILITY = {
        knight:   { knight: 65, scholar: 90, painter: 45, royal: 80, explorer: 40, healer: 92, oracle: 70, pirate: 30 },
        scholar:  { knight: 90, scholar: 60, painter: 40, royal: 85, explorer: 35, healer: 75, oracle: 95, pirate: 25 },
        painter:  { knight: 45, scholar: 40, painter: 55, royal: 50, explorer: 88, healer: 78, oracle: 85, pirate: 90 },
        royal:    { knight: 80, scholar: 85, painter: 50, royal: 45, explorer: 55, healer: 35, oracle: 72, pirate: 20 },
        explorer: { knight: 40, scholar: 35, painter: 88, royal: 55, explorer: 50, healer: 65, oracle: 60, pirate: 95 },
        healer:   { knight: 92, scholar: 75, painter: 78, royal: 35, explorer: 65, healer: 60, oracle: 90, pirate: 30 },
        oracle:   { knight: 70, scholar: 95, painter: 85, royal: 72, explorer: 60, healer: 90, oracle: 50, pirate: 25 },
        pirate:   { knight: 30, scholar: 25, painter: 90, royal: 20, explorer: 95, healer: 30, oracle: 25, pirate: 55 }
    };

    // 6 Eras - each with binary choice mapping to type scores
    var ERAS = [
        {
            id: 'egypt',
            cssClass: 'era-egypt',
            yearKey: 'eras.egypt.year',
            titleKey: 'eras.egypt.title',
            sceneKey: 'eras.egypt.scene',
            choiceA: {
                iconKey: 'eras.egypt.choiceAIcon',
                textKey: 'eras.egypt.choiceA',
                scores: { oracle: 3, royal: 2, knight: 1 }
            },
            choiceB: {
                iconKey: 'eras.egypt.choiceBIcon',
                textKey: 'eras.egypt.choiceB',
                scores: { scholar: 3, healer: 2, painter: 1 }
            }
        },
        {
            id: 'medieval',
            cssClass: 'era-medieval',
            yearKey: 'eras.medieval.year',
            titleKey: 'eras.medieval.title',
            sceneKey: 'eras.medieval.scene',
            choiceA: {
                iconKey: 'eras.medieval.choiceAIcon',
                textKey: 'eras.medieval.choiceA',
                scores: { knight: 3, pirate: 2, royal: 1 }
            },
            choiceB: {
                iconKey: 'eras.medieval.choiceBIcon',
                textKey: 'eras.medieval.choiceB',
                scores: { healer: 3, painter: 1, scholar: 1 }
            }
        },
        {
            id: 'renaissance',
            cssClass: 'era-renaissance',
            yearKey: 'eras.renaissance.year',
            titleKey: 'eras.renaissance.title',
            sceneKey: 'eras.renaissance.scene',
            choiceA: {
                iconKey: 'eras.renaissance.choiceAIcon',
                textKey: 'eras.renaissance.choiceA',
                scores: { painter: 3, oracle: 1, healer: 1 }
            },
            choiceB: {
                iconKey: 'eras.renaissance.choiceBIcon',
                textKey: 'eras.renaissance.choiceB',
                scores: { explorer: 3, royal: 2, pirate: 1 }
            }
        },
        {
            id: 'exploration',
            cssClass: 'era-exploration',
            yearKey: 'eras.exploration.year',
            titleKey: 'eras.exploration.title',
            sceneKey: 'eras.exploration.scene',
            choiceA: {
                iconKey: 'eras.exploration.choiceAIcon',
                textKey: 'eras.exploration.choiceA',
                scores: { explorer: 3, pirate: 2, knight: 1 }
            },
            choiceB: {
                iconKey: 'eras.exploration.choiceBIcon',
                textKey: 'eras.exploration.choiceB',
                scores: { scholar: 3, oracle: 2, painter: 1 }
            }
        },
        {
            id: 'industrial',
            cssClass: 'era-industrial',
            yearKey: 'eras.industrial.year',
            titleKey: 'eras.industrial.title',
            sceneKey: 'eras.industrial.scene',
            choiceA: {
                iconKey: 'eras.industrial.choiceAIcon',
                textKey: 'eras.industrial.choiceA',
                scores: { royal: 3, pirate: 1, explorer: 1 }
            },
            choiceB: {
                iconKey: 'eras.industrial.choiceBIcon',
                textKey: 'eras.industrial.choiceB',
                scores: { healer: 3, oracle: 2, painter: 1 }
            }
        },
        {
            id: 'modern',
            cssClass: 'era-modern',
            yearKey: 'eras.modern.year',
            titleKey: 'eras.modern.title',
            sceneKey: 'eras.modern.scene',
            choiceA: {
                iconKey: 'eras.modern.choiceAIcon',
                textKey: 'eras.modern.choiceA',
                scores: { pirate: 3, painter: 2, explorer: 1 }
            },
            choiceB: {
                iconKey: 'eras.modern.choiceBIcon',
                textKey: 'eras.modern.choiceB',
                scores: { scholar: 2, oracle: 3, healer: 1 }
            }
        }
    ];

    var state = {
        currentEra: 0,
        scores: {},
        resultType: null
    };

    var $ = function(id) { return document.getElementById(id); };

    var screens = {};

    function init() {
        screens = {
            intro: $('screen-intro'),
            era: $('screen-era'),
            transition: $('screen-transition'),
            reveal: $('screen-reveal'),
            result: $('screen-result')
        };

        resetScores();

        $('btn-start').addEventListener('click', startJourney);
        $('btn-retry').addEventListener('click', retry);
        $('btn-share').addEventListener('click', shareResult);
        $('btn-save').addEventListener('click', saveImage);
        $('choice-a').addEventListener('click', function() { selectChoice('a'); });
        $('choice-b').addEventListener('click', function() { selectChoice('b'); });

        // Participant count
        try {
            var count = parseInt(localStorage.getItem('pastlife_count') || '0');
            count++;
            localStorage.setItem('pastlife_count', String(count));
            var display = 50820 + count;
            var numEl = $('participant-count-num');
            if (numEl) numEl.textContent = display.toLocaleString();
        } catch (e) {
            // private browsing
        }

        // Build timeline dots
        buildTimeline();
    }

    function resetScores() {
        state.scores = {};
        Object.keys(TYPES).forEach(function(k) { state.scores[k] = 0; });
        state.currentEra = 0;
        state.resultType = null;
    }

    function buildTimeline() {
        var dotsWrap = $('timeline-dots');
        if (!dotsWrap) return;
        dotsWrap.innerHTML = '';
        for (var i = 0; i < ERAS.length; i++) {
            var dot = document.createElement('div');
            dot.className = 'timeline-dot';
            dot.setAttribute('data-era', i);
            dotsWrap.appendChild(dot);
        }
    }

    function updateTimeline() {
        var dots = document.querySelectorAll('.timeline-dot');
        dots.forEach(function(dot, i) {
            dot.classList.remove('active', 'completed');
            if (i < state.currentEra) dot.classList.add('completed');
            if (i === state.currentEra) dot.classList.add('active');
        });
        var fill = $('timeline-fill');
        if (fill) {
            var pct = (state.currentEra / ERAS.length) * 100;
            fill.style.width = pct + '%';
        }
    }

    function showScreen(name) {
        Object.values(screens).forEach(function(s) {
            if (s) s.classList.remove('active');
        });
        if (screens[name]) {
            screens[name].classList.add('active');
        }
        window.scrollTo(0, 0);
    }

    function t(key) {
        if (typeof i18n !== 'undefined' && i18n.t) return i18n.t(key);
        return key;
    }

    function startJourney() {
        resetScores();
        buildTimeline();

        if (typeof gtag === 'function') {
            gtag('event', 'test_start', { app_name: 'past-life', content_type: 'time_portal' });
        }

        showEra(0);
    }

    function showEra(index) {
        state.currentEra = index;
        updateTimeline();

        var era = ERAS[index];

        // Remove old era class and set new one
        var eraScreen = $('screen-era');
        ERAS.forEach(function(e) { eraScreen.classList.remove(e.cssClass); });
        eraScreen.classList.add(era.cssClass);

        // Update content
        $('era-year').textContent = t(era.yearKey);
        $('era-title').textContent = t(era.titleKey);
        $('era-scene').textContent = t(era.sceneKey);

        $('choice-a-icon').textContent = t(era.choiceA.iconKey);
        $('choice-a-text').textContent = t(era.choiceA.textKey);
        $('choice-b-icon').textContent = t(era.choiceB.iconKey);
        $('choice-b-text').textContent = t(era.choiceB.textKey);

        // Reset button states
        $('choice-a').classList.remove('selected');
        $('choice-b').classList.remove('selected');
        $('choice-a').style.pointerEvents = '';
        $('choice-b').style.pointerEvents = '';

        // Animate in
        var container = $('era-container');
        container.style.animation = 'none';
        container.offsetHeight; // reflow
        container.style.animation = 'fadeInUp 0.6s ease';

        showScreen('era');
    }

    function selectChoice(choice) {
        var era = ERAS[state.currentEra];
        var data = choice === 'a' ? era.choiceA : era.choiceB;

        // Apply scores
        Object.keys(data.scores).forEach(function(type) {
            state.scores[type] = (state.scores[type] || 0) + data.scores[type];
        });

        // Visual feedback
        var btnA = $('choice-a');
        var btnB = $('choice-b');
        btnA.style.pointerEvents = 'none';
        btnB.style.pointerEvents = 'none';

        if (choice === 'a') {
            btnA.classList.add('selected');
        } else {
            btnB.classList.add('selected');
        }

        // Advance after brief delay
        setTimeout(function() {
            if (state.currentEra < ERAS.length - 1) {
                showTransition(function() {
                    showEra(state.currentEra + 1);
                });
            } else {
                // All eras done
                showReveal();
            }
        }, 400);
    }

    function showTransition(callback) {
        showScreen('transition');
        setTimeout(function() {
            if (callback) callback();
        }, 1200);
    }

    function showReveal() {
        calcResult();
        showScreen('reveal');
        setTimeout(function() {
            showScreen('result');
            renderResult();
        }, 2500);
    }

    function calcResult() {
        var maxScore = -1;
        var maxType = null;
        Object.keys(state.scores).forEach(function(type) {
            if (state.scores[type] > maxScore) {
                maxScore = state.scores[type];
                maxType = type;
            }
        });
        state.resultType = maxType;

        if (typeof gtag === 'function' && maxType) {
            gtag('event', 'test_complete', {
                app_name: 'past-life',
                result_type: maxType,
                result_name: t('types.' + maxType + '.name')
            });
        }
    }

    function renderResult() {
        var typeId = state.resultType;
        if (!typeId) return;
        var typeData = TYPES[typeId];

        $('result-emoji').textContent = typeData.emoji;
        var nameEl = $('result-type');
        nameEl.textContent = t('types.' + typeId + '.name');
        nameEl.style.color = typeData.color;

        $('result-era').textContent = t('types.' + typeId + '.era');
        $('result-desc').textContent = t('types.' + typeId + '.description');
        $('result-quote').textContent = t('types.' + typeId + '.quote');

        // Echoes in present
        var echoesList = $('echoes-list');
        echoesList.innerHTML = '';
        for (var i = 1; i <= 4; i++) {
            var echoText = t('types.' + typeId + '.echo' + i);
            if (echoText && echoText !== 'types.' + typeId + '.echo' + i) {
                var item = document.createElement('div');
                item.className = 'echo-item';
                var iconSpan = document.createElement('span');
                iconSpan.className = 'echo-icon';
                iconSpan.textContent = t('types.' + typeId + '.echoIcon' + i);
                var textSpan = document.createElement('span');
                textSpan.textContent = echoText;
                item.appendChild(iconSpan);
                item.appendChild(textSpan);
                echoesList.appendChild(item);
            }
        }

        // Strengths
        var strengths = [];
        for (var s = 1; s <= 4; s++) {
            var sv = t('types.' + typeId + '.strength' + s);
            if (sv && sv !== 'types.' + typeId + '.strength' + s) strengths.push(sv);
        }
        $('result-strengths').innerHTML = strengths.map(function(s) {
            return '<span class="stat-tag">' + s + '</span>';
        }).join('');

        // Weaknesses
        var weaknesses = [];
        for (var w = 1; w <= 2; w++) {
            var wv = t('types.' + typeId + '.weakness' + w);
            if (wv && wv !== 'types.' + typeId + '.weakness' + w) weaknesses.push(wv);
        }
        $('result-weaknesses').innerHTML = weaknesses.map(function(w) {
            return '<span class="stat-tag weak">' + w + '</span>';
        }).join('');

        // Compatibility
        var compatList = $('compat-list');
        compatList.innerHTML = '';
        var myCompat = COMPATIBILITY[typeId];
        var sorted = Object.keys(myCompat)
            .filter(function(id) { return id !== typeId; })
            .map(function(id) { return { id: id, score: myCompat[id] }; })
            .sort(function(a, b) { return b.score - a.score; });

        sorted.slice(0, 3).forEach(function(entry) {
            var other = TYPES[entry.id];
            if (!other) return;
            var color = entry.score >= 80 ? '#27AE60' : entry.score >= 60 ? '#F39C12' : '#E74C3C';
            var pctLabel = t('result.compatPercent');
            var div = document.createElement('div');
            div.className = 'compat-item';
            div.innerHTML =
                '<span class="compat-emoji">' + other.emoji + '</span>' +
                '<div class="compat-info">' +
                    '<div class="compat-name">' + t('types.' + entry.id + '.name') + '</div>' +
                    '<div class="compat-score" style="color:' + color + '">' + entry.score + pctLabel + '</div>' +
                '</div>' +
                '<div class="compat-bar-bg">' +
                    '<div class="compat-bar" style="width:' + entry.score + '%;background:' + color + '"></div>' +
                '</div>';
            compatList.appendChild(div);
        });

        // Percentile stat
        var percentile = Math.floor(Math.random() * 15) + 3;
        var percentileEl = $('percentile-stat');
        if (percentileEl) {
            var pText = t('result.percentileStat');
            if (pText && pText !== 'result.percentileStat') {
                percentileEl.innerHTML = pText.replace('{percent}', percentile);
            } else {
                percentileEl.innerHTML = 'Only <strong>' + percentile + '%</strong> of travelers got the same past life';
            }
        }

        drawResultCard(typeId);
    }

    function drawResultCard(typeId) {
        var typeData = TYPES[typeId];
        var canvas = $('resultCanvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var W = 600, H = 800;
        canvas.width = W;
        canvas.height = H;

        // Background
        var bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0, typeData.bgGradient[0]);
        bgGrad.addColorStop(0.5, typeData.bgGradient[1]);
        bgGrad.addColorStop(1, typeData.bgGradient[0]);
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // Portal glow
        var glow = ctx.createRadialGradient(W/2, 200, 30, W/2, 200, 200);
        glow.addColorStop(0, typeData.color + '30');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);

        // Ornate border
        ctx.strokeStyle = 'rgba(201,169,110,0.25)';
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 20, W-40, H-40);
        ctx.strokeRect(30, 30, W-60, H-60);

        // Corner dots
        [[30,30],[W-30,30],[30,H-30],[W-30,H-30]].forEach(function(c) {
            ctx.beginPath();
            ctx.arc(c[0], c[1], 5, 0, Math.PI*2);
            ctx.fillStyle = 'rgba(201,169,110,0.3)';
            ctx.fill();
        });

        ctx.textAlign = 'center';

        // Label
        ctx.fillStyle = 'rgba(201,169,110,0.5)';
        ctx.font = '14px Georgia, serif';
        ctx.fillText(t('result.label'), W/2, 80);

        // Emoji
        ctx.font = '72px serif';
        ctx.fillText(typeData.emoji, W/2, 180);

        // Name
        ctx.fillStyle = typeData.color;
        ctx.font = 'bold 34px Georgia, serif';
        ctx.fillText(t('types.' + typeId + '.name'), W/2, 250);

        // Era
        ctx.fillStyle = 'rgba(201,169,110,0.6)';
        ctx.font = '14px Georgia, serif';
        ctx.fillText(t('types.' + typeId + '.era'), W/2, 285);

        // Divider
        ctx.beginPath();
        ctx.moveTo(100, 310);
        ctx.lineTo(W-100, 310);
        ctx.strokeStyle = 'rgba(201,169,110,0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Description
        ctx.fillStyle = '#f0e6d3';
        ctx.font = '14px Georgia, serif';
        wrapText(ctx, t('types.' + typeId + '.description'), W/2, 345, W-100, 22);

        // Quote
        ctx.fillStyle = '#FFD700';
        ctx.font = 'italic 15px Georgia, serif';
        ctx.fillText(t('types.' + typeId + '.quote'), W/2, 550);

        // Strengths
        ctx.fillStyle = 'rgba(201,169,110,0.5)';
        ctx.font = '12px sans-serif';
        var strs = [];
        for (var i = 1; i <= 4; i++) {
            var sv = t('types.' + typeId + '.strength' + i);
            if (sv && sv.indexOf('types.') !== 0) strs.push(sv);
        }
        ctx.fillText(t('result.strengthLabel') + ': ' + strs.join(' \u00B7 '), W/2, 600);

        // Divider
        ctx.beginPath();
        ctx.moveTo(100, 640);
        ctx.lineTo(W-100, 640);
        ctx.strokeStyle = 'rgba(201,169,110,0.2)';
        ctx.stroke();

        // Watermark
        ctx.fillStyle = 'rgba(201,169,110,0.3)';
        ctx.font = '12px sans-serif';
        ctx.fillText(t('app.title').split(' - ')[0], W/2, 680);
        ctx.fillText('dopabrain.com/past-life', W/2, 700);

        // Best compat
        var myCompat = COMPATIBILITY[typeId];
        var best = Object.keys(myCompat)
            .filter(function(id) { return id !== typeId; })
            .sort(function(a, b) { return myCompat[b] - myCompat[a]; })[0];
        if (best) {
            ctx.fillStyle = 'rgba(201,169,110,0.4)';
            ctx.font = '13px sans-serif';
            ctx.fillText(TYPES[best].emoji + ' ' + t('types.' + best + '.name') + ' (' + myCompat[best] + '%)', W/2, 745);
        }
    }

    function wrapText(ctx, text, x, y, maxW, lineH) {
        if (!text) return;
        var chars = text.split('');
        var line = '';
        var curY = y;
        for (var i = 0; i < chars.length; i++) {
            var testLine = line + chars[i];
            if (ctx.measureText(testLine).width > maxW && line.length > 0) {
                ctx.fillText(line, x, curY);
                line = chars[i];
                curY += lineH;
            } else {
                line = testLine;
            }
        }
        if (line) ctx.fillText(line, x, curY);
    }

    function shareResult() {
        var typeId = state.resultType;
        if (!typeId) return;

        var name = t('types.' + typeId + '.name');
        var era = t('types.' + typeId + '.era');
        var emoji = TYPES[typeId].emoji;
        var shareText = t('share.template')
            .replace('{type}', name)
            .replace('{era}', era)
            .replace('{emoji}', emoji);

        var url = 'https://dopabrain.com/past-life/';
        var shareTitle = t('share.title');
        var copiedMsg = t('share.copied');
        var copyPromptMsg = t('share.copyPrompt');

        if (navigator.share) {
            navigator.share({ title: shareTitle, text: shareText, url: url }).catch(function(){});
        } else {
            var full = shareText + '\n' + url;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(full).then(function() {
                    alert(copiedMsg);
                }).catch(function() {
                    prompt(copyPromptMsg, full);
                });
            } else {
                prompt(copyPromptMsg, full);
            }
        }

        if (typeof gtag === 'function') {
            gtag('event', 'share', { event_category: 'engagement', event_label: typeId });
        }
    }

    function saveImage() {
        var canvas = $('resultCanvas');
        if (!canvas) return;
        var link = document.createElement('a');
        link.download = 'past-life-result.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        if (typeof gtag === 'function') {
            gtag('event', 'save_image', { event_category: 'engagement', event_label: state.resultType });
        }
    }

    function retry() {
        resetScores();
        buildTimeline();
        showScreen('intro');
    }

    // Expose for language change callback
    window.PastLifeApp = {
        onLanguageChange: function() {
            // If on result screen, re-render
            if (state.resultType && screens.result && screens.result.classList.contains('active')) {
                renderResult();
            }
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        init();

        var loader = document.getElementById('app-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(function() { loader.remove(); }, 300);
        }
    });
})();
