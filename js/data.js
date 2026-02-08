// Past Life Job Test - Content Data

const TYPES = [
    {
        id: 'knight',
        name: '기사단장',
        emoji: '🗡️',
        era: '중세 유럽 (12세기)',
        region: '프랑스 노르망디',
        color: '#C41E3A',
        bgGradient: ['#1a0a0e', '#2d1520'],
        description: '당신의 전생은 중세 유럽의 기사단장! 전장에서 누구보다 앞장서며, 약한 자를 지키는 것을 사명으로 여겼습니다. 충성심과 명예를 무엇보다 소중히 했고, 동료들에게는 목숨을 맡길 수 있는 든든한 존재였습니다.',
        strengths: ['용기', '충성심', '리더십', '결단력'],
        weaknesses: ['완고함', '때로 무모한 돌격'],
        quote: '"칼은 녹슬어도, 명예는 영원하다"',
        modernLife: '현생에서도 당신은 정의감이 강하고 약자를 돕는 성향이 있습니다. 리더 역할을 맡으면 빛나는 타입이며, 불의를 보면 참지 못합니다.',
        premiumStory: '1187년 가을, 노르망디의 한 성에서 태어난 당신은 어린 시절부터 검술에 남다른 재능을 보였습니다. 15세에 기사 서임을 받고, 22세에 기사단장이 된 당신은 수많은 전투에서 동료들을 이끌었습니다. 특히 1209년 대전투에서 300명의 기사를 이끌고 2,000명의 적군을 물리친 전설적인 승리는 당신의 이름을 역사에 새겼습니다. 전장에서의 용맹함 못지않게, 영지의 농민들을 보살피는 따뜻한 영주이기도 했습니다.',
        compatible: ['scholar', 'healer'],
        incompatible: ['pirate', 'explorer']
    },
    {
        id: 'scholar',
        name: '왕궁 학자',
        emoji: '📜',
        era: '고대 이집트 (기원전 15세기)',
        region: '이집트 테베',
        color: '#DAA520',
        bgGradient: ['#1a1508', '#2d2510'],
        description: '당신의 전생은 고대 이집트의 왕궁 학자! 파라오의 곁에서 역사를 기록하고, 별을 관측하며 지혜를 축적했습니다. 파피루스에 담긴 당신의 기록은 수천 년이 지난 지금도 후대에 전해지고 있습니다.',
        strengths: ['지혜', '관찰력', '인내심', '분석력'],
        weaknesses: ['우유부단함', '지나친 신중함'],
        quote: '"아는 것이 진정한 힘이다"',
        modernLife: '현생에서도 당신은 배우는 것을 좋아하고, 깊이 있는 사고를 즐깁니다. 계획을 세우고 체계적으로 실행하는 능력이 뛰어나며, 조용한 환경에서 최고의 성과를 냅니다.',
        premiumStory: '기원전 1450년, 나일강 유역의 작은 마을에서 서기관의 아들로 태어난 당신은 5세에 이미 상형문자를 읽을 수 있었습니다. 12세에 왕궁 학교에 입학하여 천문학, 수학, 의학을 공부했고, 20세에 파라오 투트모세 3세의 수석 서기관이 되었습니다. 당신이 기록한 "별의 서(書)"는 이집트 천문학의 기초가 되었으며, 카르나크 신전의 벽화에 당신의 이름이 새겨져 있습니다.',
        compatible: ['knight', 'oracle'],
        incompatible: ['pirate', 'painter']
    },
    {
        id: 'painter',
        name: '르네상스 화가',
        emoji: '🎨',
        era: '르네상스 (15세기)',
        region: '이탈리아 피렌체',
        color: '#E07C5F',
        bgGradient: ['#1a0f0a', '#2d1a14'],
        description: '당신의 전생은 르네상스 시대의 천재 화가! 캔버스 위에 세상의 아름다움을 담아냈고, 빛과 그림자를 자유자재로 다루었습니다. 예술을 통해 사람들에게 감동을 주었고, 당신의 작품은 시대를 초월한 걸작으로 남았습니다.',
        strengths: ['창의력', '미적 감각', '감수성', '집중력'],
        weaknesses: ['현실감각 부족', '변덕스러움'],
        quote: '"세상은 내 붓끝에서 다시 태어난다"',
        modernLife: '현생에서도 당신은 감성이 풍부하고 아름다운 것에 끌립니다. 예술적 취미가 있거나, 일상에서도 미적 기준이 높습니다. 감정 표현이 솔직하며 독창적인 아이디어가 넘칩니다.',
        premiumStory: '1462년 피렌체의 한 직물 상인 가정에서 태어난 당신은 어릴 때부터 벽에 그림을 그리며 놀았습니다. 14세에 거장의 공방에 들어가 도제 생활을 시작했고, 20세에 독립하여 메디치 가문의 후원을 받게 됩니다. 당신이 그린 "봄의 정원"이라는 프레스코화는 유럽 전역에 명성을 떨쳤으며, 다빈치와 라파엘에게도 영감을 주었다고 전해집니다.',
        compatible: ['explorer', 'oracle'],
        incompatible: ['knight', 'scholar']
    },
    {
        id: 'royal',
        name: '현명한 군주',
        emoji: '👑',
        era: '비잔틴 제국 (6세기)',
        region: '콘스탄티노플',
        color: '#9B59B6',
        bgGradient: ['#120a1a', '#1f142d'],
        description: '당신의 전생은 비잔틴 제국의 현명한 군주! 거대한 제국을 다스리며, 외교와 내정 모두에서 탁월한 능력을 발휘했습니다. 카리스마로 사람들을 이끌었고, 법과 문화를 꽃피운 명군으로 기록되었습니다.',
        strengths: ['카리스마', '외교력', '통솔력', '판단력'],
        weaknesses: ['고독감', '의심이 많음'],
        quote: '"왕관의 무게를 감당할 자만이 진정한 왕이다"',
        modernLife: '현생에서도 당신은 자연스러운 리더십과 존재감을 가지고 있습니다. 사람들이 자연스럽게 당신을 따르며, 중요한 결정을 내리는 위치에 있을 때 가장 빛납니다.',
        premiumStory: '527년 콘스탄티노플에서 태어난 당신은 전임 황제의 양자로 입양되어 제왕학을 배웠습니다. 25세에 황위에 오른 당신은 유스티니아누스 법전에 버금가는 새로운 법률 체계를 정비하고, 하기아 소피아에 필적하는 대성당을 건축했습니다. 동서 무역로를 장악하여 제국을 번영시켰으며, 예술과 과학을 후원한 문화 군주로 역사에 남았습니다.',
        compatible: ['knight', 'scholar'],
        incompatible: ['healer', 'pirate']
    },
    {
        id: 'explorer',
        name: '대항해 탐험가',
        emoji: '🧭',
        era: '대항해 시대 (16세기)',
        region: '포르투갈 리스본',
        color: '#2E86C1',
        bgGradient: ['#0a1420', '#14202d'],
        description: '당신의 전생은 대항해 시대의 탐험가! 미지의 바다를 향해 돛을 올리고, 누구도 가보지 못한 땅을 발견했습니다. 두려움보다 호기심이 컸고, 새로운 세계를 꿈꾸며 끊임없이 항해했습니다.',
        strengths: ['모험심', '적응력', '낙천성', '용기'],
        weaknesses: ['안주하지 못함', '무계획적'],
        quote: '"수평선 너머에 새로운 세계가 있다"',
        modernLife: '현생에서도 당신은 새로운 경험과 도전을 좋아합니다. 여행, 새로운 음식, 낯선 문화에 끌리며, 일상의 틀을 벗어나려는 욕구가 강합니다. 자유로운 영혼의 소유자입니다.',
        premiumStory: '1498년 리스본의 항구 마을에서 어부의 아들로 태어난 당신은 바다가 곧 놀이터였습니다. 16세에 첫 항해를 시작으로, 아프리카 해안을 따라 인도양까지 항해했습니다. 32세에 자신의 캐러벨 선박 3척을 이끌고 대서양을 횡단하여 새로운 대륙의 해안선을 최초로 지도에 기록한 위업을 달성했습니다. 당신이 그린 해도(海圖)는 이후 100년간 항해사들의 필수품이 되었습니다.',
        compatible: ['pirate', 'painter'],
        incompatible: ['scholar', 'knight']
    },
    {
        id: 'healer',
        name: '숲의 치유사',
        emoji: '🌿',
        era: '켈트 시대 (5세기)',
        region: '아일랜드 / 스코틀랜드',
        color: '#27AE60',
        bgGradient: ['#0a1a0f', '#142d1a'],
        description: '당신의 전생은 켈트의 치유사! 깊은 숲에서 약초를 채집하고, 아픈 이들을 돌보았습니다. 자연의 언어를 이해하고, 달의 주기에 맞춰 치유 의식을 행했습니다. 마을 사람들에게는 생명의 은인이자 영혼의 안내자였습니다.',
        strengths: ['공감력', '인내심', '직관력', '치유 능력'],
        weaknesses: ['자기 희생적', '감정 소모가 큼'],
        quote: '"모든 상처에는 그에 맞는 약초가 있다"',
        modernLife: '현생에서도 당신은 공감 능력이 뛰어나고, 주변 사람들의 감정을 잘 읽습니다. 상담, 의료, 교육 분야에 적성이 있으며, 자연과 가까이할 때 에너지가 충전됩니다.',
        premiumStory: '423년 아일랜드의 초록빛 숲 근처 작은 마을에서 태어난 당신은 드루이드 할머니에게 약초의 비밀을 전수받았습니다. 13세에 첫 치유를 성공한 후, 소문을 듣고 먼 지역에서도 환자들이 찾아왔습니다. 당신은 200가지 이상의 약초 조합법을 기록한 "초록 치유서"를 남겼으며, 전염병이 돌 때 수백 명의 생명을 구했습니다. 숲의 수호자로 불리며, 당신이 돌본 숲은 "치유의 숲"이라 불려 지금도 전설로 남아 있습니다.',
        compatible: ['knight', 'oracle'],
        incompatible: ['royal', 'pirate']
    },
    {
        id: 'oracle',
        name: '신전 사제',
        emoji: '🔮',
        era: '고대 그리스 (기원전 5세기)',
        region: '그리스 델포이',
        color: '#8E44AD',
        bgGradient: ['#140a1a', '#22142d'],
        description: '당신의 전생은 고대 그리스의 신전 사제! 델포이 신전에서 신탁을 전하고, 별의 움직임으로 운명을 읽었습니다. 깊은 명상과 의식을 통해 보이지 않는 세계와 소통하며, 왕들조차 당신의 조언을 구했습니다.',
        strengths: ['직관력', '통찰력', '명상', '신비로운 카리스마'],
        weaknesses: ['세속과의 거리감', '지나친 고독'],
        quote: '"눈을 감아야 진정한 것이 보인다"',
        modernLife: '현생에서도 당신은 직관이 강하고, 사람의 본질을 잘 꿰뚫어봅니다. 심리학, 철학, 영성에 관심이 많으며, 혼자만의 시간이 반드시 필요한 타입입니다.',
        premiumStory: '기원전 480년 델포이 근처의 산간 마을에서 태어난 당신은 어릴 때부터 예지몽을 꾸는 특이한 아이였습니다. 10세에 신전에 입문하여 수련을 시작했고, 18세에 정식 사제가 되었습니다. 당신의 예언은 놀라운 적중률을 보였으며, 페르시아 전쟁 때 "나무 성벽"이라는 신탁으로 그리스 해군의 승리를 이끌었다고 전해집니다. 50년간 수천 건의 신탁을 전했으며, "별의 기록자"라는 칭호로 불렸습니다.',
        compatible: ['scholar', 'healer'],
        incompatible: ['pirate', 'explorer']
    },
    {
        id: 'pirate',
        name: '해적 선장',
        emoji: '🏴‍☠️',
        era: '대해적 시대 (17세기)',
        region: '카리브해',
        color: '#E74C3C',
        bgGradient: ['#1a0a0a', '#2d1414'],
        description: '당신의 전생은 카리브해의 해적 선장! 자유를 향한 불꽃 같은 열정으로 바다를 누비며, 누구의 명령도 받지 않는 삶을 살았습니다. 대담하고 카리스마 넘치는 리더로, 선원들의 절대적인 신뢰를 받았습니다.',
        strengths: ['대담함', '자유로운 영혼', '순발력', '카리스마'],
        weaknesses: ['충동적', '규칙을 싫어함'],
        quote: '"바다 위에서 나는 왕이다"',
        modernLife: '현생에서도 당신은 틀에 박힌 삶을 거부하고, 자신만의 길을 걷는 자유로운 영혼입니다. 규칙보다 직감을 믿으며, 모험적인 도전을 즐깁니다. 약간의 반항심은 당신의 매력입니다.',
        premiumStory: '1655년 잉글랜드의 가난한 항구 마을에서 태어난 당신은 12세에 상선의 선원이 되었지만, 선장의 횡포에 반기를 들고 해적이 되었습니다. 25세에 자신의 함선 "붉은 폭풍호"를 손에 넣고, 카리브해에서 가장 두려운 해적 선장이 되었습니다. 하지만 당신은 단순한 약탈자가 아니었습니다. 노예선을 습격하여 포로를 해방시켰고, 약탈품을 가난한 항구 마을에 나누어 주었습니다. "의적 해적"이라는 별명으로 민중 사이에서 전설이 되었습니다.',
        compatible: ['explorer', 'painter'],
        incompatible: ['knight', 'royal']
    }
];

const QUESTIONS = [
    {
        question: '꿈에서 자주 보는 장소는?',
        answers: [
            { text: '거대한 성과 깃발이 펄럭이는 전장', scores: { knight: 3, royal: 2 } },
            { text: '별이 빛나는 고대 신전', scores: { oracle: 3, scholar: 2 } },
            { text: '끝없이 펼쳐진 바다와 미지의 섬', scores: { explorer: 3, pirate: 2 } },
            { text: '약초 향이 나는 깊은 숲', scores: { healer: 3, painter: 1 } }
        ]
    },
    {
        question: '위기 상황에서 당신의 첫 반응은?',
        answers: [
            { text: '앞장서서 직접 해결한다', scores: { knight: 3, pirate: 1 } },
            { text: '상황을 분석하고 전략을 세운다', scores: { scholar: 3, royal: 2 } },
            { text: '직감을 믿고 즉시 행동한다', scores: { pirate: 3, explorer: 2 } },
            { text: '동료를 모아 함께 대응한다', scores: { healer: 2, painter: 2, oracle: 1 } }
        ]
    },
    {
        question: '가장 끌리는 보물은?',
        answers: [
            { text: '전설의 명검 "엑스칼리버"', scores: { knight: 3, pirate: 1 } },
            { text: '고대 비밀이 담긴 두루마리', scores: { scholar: 3, oracle: 2 } },
            { text: '아무도 모르는 보물섬 지도', scores: { explorer: 3, pirate: 2 } },
            { text: '모든 색을 표현하는 마법의 물감', scores: { painter: 3, healer: 1 } }
        ]
    },
    {
        question: '이상적인 하루를 보낸다면?',
        answers: [
            { text: '새벽 훈련 후 명예로운 임무 수행', scores: { knight: 3, royal: 1 } },
            { text: '조용한 서재에서 끝없는 독서', scores: { scholar: 3, oracle: 1 } },
            { text: '새로운 곳을 탐험하며 일지 작성', scores: { explorer: 3, painter: 1 } },
            { text: '숲을 거닐며 풍경을 스케치', scores: { healer: 2, painter: 2 } }
        ]
    },
    {
        question: '가장 두려운 것은?',
        answers: [
            { text: '명예를 잃는 것', scores: { knight: 3, royal: 2 } },
            { text: '진실을 알 수 없는 것', scores: { scholar: 3, oracle: 2 } },
            { text: '자유를 빼앗기는 것', scores: { pirate: 3, explorer: 2 } },
            { text: '사랑하는 것을 지키지 못하는 것', scores: { healer: 3, painter: 2 } }
        ]
    },
    {
        question: '왕이 당신에게 특별한 임무를 맡긴다면?',
        answers: [
            { text: '적과의 전투에서 선봉을 맡겠다', scores: { knight: 3, pirate: 1 } },
            { text: '외국과의 무역 협상을 진행하겠다', scores: { royal: 3, scholar: 2 } },
            { text: '미지의 대륙을 탐사하겠다', scores: { explorer: 3, pirate: 1 } },
            { text: '왕국의 역사를 벽화로 기록하겠다', scores: { painter: 3, oracle: 2 } }
        ]
    },
    {
        question: '동료들에게 당신은 어떤 존재?',
        answers: [
            { text: '언제나 든든한 보호자', scores: { knight: 2, healer: 2, royal: 1 } },
            { text: '지혜로운 조언자', scores: { scholar: 2, oracle: 2, royal: 1 } },
            { text: '함께하면 즐거운 사람', scores: { pirate: 2, explorer: 2, painter: 1 } },
            { text: '깊이 있는 대화 상대', scores: { painter: 2, oracle: 2, healer: 1 } }
        ]
    },
    {
        question: '마법의 능력을 하나 갖는다면?',
        answers: [
            { text: '무적의 방어막', scores: { knight: 3, royal: 1 } },
            { text: '미래를 보는 눈', scores: { oracle: 3, scholar: 2 } },
            { text: '순간이동', scores: { explorer: 3, pirate: 2 } },
            { text: '치유의 손길', scores: { healer: 3, painter: 1 } }
        ]
    },
    {
        question: '당신의 삶의 신조는?',
        answers: [
            { text: '"명예와 충성이 곧 나의 삶이다"', scores: { knight: 3, royal: 2 } },
            { text: '"지식만이 영원한 보물이다"', scores: { scholar: 3, oracle: 1 } },
            { text: '"바람이 부는 곳에 길이 있다"', scores: { explorer: 2, pirate: 3 } },
            { text: '"아름다움은 영혼을 구원한다"', scores: { painter: 3, healer: 2 } }
        ]
    },
    {
        question: '전생에서 당신이 남긴 유산은?',
        answers: [
            { text: '전설적인 전투 이야기', scores: { knight: 3, pirate: 2 } },
            { text: '수천 년간 전해질 귀중한 기록', scores: { scholar: 3, royal: 2 } },
            { text: '아직 아무도 가보지 못한 길의 지도', scores: { explorer: 3, oracle: 1 } },
            { text: '사람들의 마음에 남은 따뜻한 기억', scores: { healer: 3, painter: 2 } }
        ]
    }
];

// 8x8 Compatibility Matrix
const COMPATIBILITY = {
    knight:   { knight: 65, scholar: 90, painter: 45, royal: 80, explorer: 40, healer: 92, oracle: 70, pirate: 30 },
    scholar:  { knight: 90, scholar: 60, painter: 40, royal: 85, explorer: 35, healer: 75, oracle: 95, pirate: 25 },
    painter:  { knight: 45, scholar: 40, painter: 55, royal: 50, explorer: 88, healer: 78, oracle: 85, pirate: 90 },
    royal:    { knight: 80, scholar: 85, painter: 50, royal: 45, explorer: 55, healer: 35, oracle: 72, pirate: 20 },
    explorer: { knight: 40, scholar: 35, painter: 88, royal: 55, explorer: 50, healer: 65, oracle: 60, pirate: 95 },
    healer:   { knight: 92, scholar: 75, painter: 78, royal: 35, explorer: 65, healer: 60, oracle: 90, pirate: 30 },
    oracle:   { knight: 70, scholar: 95, painter: 85, royal: 72, explorer: 60, healer: 90, oracle: 50, pirate: 25 },
    pirate:   { knight: 30, scholar: 25, painter: 90, royal: 20, explorer: 95, healer: 30, oracle: 25, pirate: 55 }
};

const SHARE_TEMPLATES = [
    '나의 전생은 {type}이었다! {emoji} {era}에서의 나의 삶은? 결과 보기 👉',
    '{emoji} 전생 직업 테스트 결과: {type}! "{quote}" 나의 전생이 궁금하다면? 👉',
    '나는 전생에 {era}의 {type}이었대! {emoji} 당신의 전생은? 👉'
];
