// ============================================================
//  영상 목록 파일 — 이 파일만 고치시면 돼요.
// ============================================================
//
//  영상 하나를 추가하는 방법:
//    원하는 카테고리의 [ ] 안에 아래 한 줄을 복사해 붙여 넣고 내용을 바꾸세요.
//
//    { title: "영상 제목", url: "유튜브 링크", ages: ["12~24개월", "24~36개월"] },
//
//  - title : 앱에 보일 제목 (자유롭게)
//  - url   : 유튜브 주소 (유튜브 앱의 '공유 → 링크 복사' 주소도 돼요)
//  - ages  : 보여줄 나이대. 아래 4개 중에서 골라 적어요. 이 칸을 빼면 모든 나이에 보여요.
//            "0~12개월"  "12~24개월"  "24~36개월"  "3~5세"
//
//  주의: 따옴표(" "), 쉼표(,), 괄호는 지우지 마세요.
//        카테고리 이름(왼쪽 "..." 부분)은 바꾸지 마세요.
// ============================================================

const VIDEOS = {

  // ---------- 언어 ----------
  "한국어 단어·말하기": [
    // 아직 비어 있어요. 영상을 추가해 주세요.
  ],
  "영어 노출, 영어 동요": [
    { title: "Hello! 인사 노래 (Super Simple Songs)", url: "https://www.youtube.com/watch?v=tVlcKp3bWH8", ages: ["12~24개월", "24~36개월", "3~5세"] },
    { title: "Learn Colors 색깔 영어 동요 (핑크퐁 호기)", url: "https://www.youtube.com/watch?v=FiC3ClDnsG0", ages: ["24~36개월", "3~5세"] },
  ],
  "숫자·색깔·모양 같은 기초 개념": [
    { title: "1-10 숫자송 (핑크퐁)", url: "https://www.youtube.com/watch?v=Qxi-dPmsl-Q", ages: ["24~36개월", "3~5세"] },
    { title: "Learn Colors 색깔 놀이 (핑크퐁 호기)", url: "https://www.youtube.com/watch?v=FiC3ClDnsG0", ages: ["24~36개월", "3~5세"] },
  ],

  // ---------- 생활 습관 ----------
  "식사 습관 (앉아서 먹기, 골고루 먹기)": [
    { title: "바르게 식사해요 (핑크퐁)", url: "https://www.youtube.com/watch?v=McmFhxZAZqM", ages: ["12~24개월", "24~36개월", "3~5세"] },
    { title: "맛있는 식사송 모음 (핑크퐁)", url: "https://www.youtube.com/watch?v=RhSl7ch63HU", ages: ["12~24개월", "24~36개월", "3~5세"] },
  ],
  "양치·손 씻기·목욕": [
    { title: "치카치카 양치해요 (핑크퐁)", url: "https://www.youtube.com/watch?v=jaEt8qwrahY", ages: ["12~24개월", "24~36개월", "3~5세"] },
  ],
  "잠자리 습관": [
    { title: "잘 자요 자장가 (핑크퐁)", url: "https://www.youtube.com/watch?v=AX-TwFpAuz4" },
    { title: "새근새근 자장가 모음 (핑크퐁)", url: "https://www.youtube.com/watch?v=Qo90D8PllCQ" },
  ],
  "배변 훈련": [
    { title: "무지개 똥송 (핑크퐁)", url: "https://www.youtube.com/watch?v=kxOA8Fpmcu0", ages: ["24~36개월", "3~5세"] },
    { title: "배변훈련송 모음 (핑크퐁 호기)", url: "https://www.youtube.com/watch?v=ZfSWN6FHI0I", ages: ["24~36개월", "3~5세"] },
  ],

  // ---------- 정서·행동 ----------
  "칭얼거림·떼쓰기 줄이기": [
    { title: "예절을 배워요 생활습관 동요 모음 (핑크퐁)", url: "https://www.youtube.com/watch?v=iXDAqjJRC2c", ages: ["24~36개월", "3~5세"] },
  ],
  "감정 표현하기 (화나요, 슬퍼요 말하기)": [
    { title: "감정송 (핑크퐁)", url: "https://www.youtube.com/watch?v=KQW4hoM95v4", ages: ["24~36개월", "3~5세"] },
    { title: "꿍따리 꿍꿍 감정 체조 (핑크퐁)", url: "https://www.youtube.com/watch?v=Lye6aOyh7Xs", ages: ["24~36개월", "3~5세"] },
  ],
  "기다리기, 차례 지키기": [
    { title: "사이좋게 차례차례 (핑크퐁)", url: "https://www.youtube.com/watch?v=wjVAuVVsZ8o", ages: ["24~36개월", "3~5세"] },
  ],
  "나누기, 친구와 사이좋게 지내기": [
    { title: "사이좋게 차례차례 (핑크퐁)", url: "https://www.youtube.com/watch?v=wjVAuVVsZ8o", ages: ["24~36개월", "3~5세"] },
  ],

  // ---------- 발달·호기심 ----------
  "동물·자연·탈것 등 세상 알기": [
    { title: "BEST 동물 동요 모음 (핑크퐁)", url: "https://www.youtube.com/watch?v=AOngWAA8q_g", ages: ["12~24개월", "24~36개월", "3~5세"] },
    { title: "자동차 동요 모음 (핑크퐁)", url: "https://www.youtube.com/watch?v=kw_zTVuatk4", ages: ["12~24개월", "24~36개월", "3~5세"] },
  ],
  "음악·리듬·율동": [
    { title: "튼튼쌤 율동체조 인기동요 (핑크퐁)", url: "https://www.youtube.com/watch?v=_k9nLmIel-8", ages: ["12~24개월", "24~36개월", "3~5세"] },
  ],
  "소근육·대근육 놀이 따라하기": [
    { title: "튼튼쌤과 율동 체조해요 (핑크퐁)", url: "https://www.youtube.com/watch?v=EYHoB5XUVbc", ages: ["24~36개월", "3~5세"] },
  ],
};
