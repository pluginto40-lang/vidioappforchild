// 영상 목록은 이 파일 하나에서 관리합니다.
// 해당 분류의 [ ] 안에 한 줄씩 추가하세요.
// { title: "영상 제목", url: "유튜브 주소", language: "ko", source: "제목과 주소를 확인한 출처" },
// 영어는 language: "en" 으로 쓰고 '영어 노출, 영어 동요' 분류에만 넣습니다.
// ages: ["12~24개월"] 을 추가하면 나이를 제한합니다. 생략하면 모든 나이에 표시됩니다.
// 분류별 서로 다른 직접 영상 6편 이상 + 연관 영상 최대 4편으로 최소 10편을 구성합니다.
// source는 제목·주소의 확인 출처입니다. 실제 재생 가능 여부는 유튜브 설정에 따라 바뀔 수 있습니다.

const VIDEOS = {
  "한국어 단어·말하기": [
    {
      "title": "곰 세 마리",
      "url": "https://www.youtube.com/watch?v=L6_y2KvGNts",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L6_y2KvGNts"
    },
    {
      "title": "머리 어깨 무릎 발 · 한글 단어 놀이",
      "url": "https://www.youtube.com/watch?v=i_xeXXEd5R4",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=i_xeXXEd5R4"
    },
    {
      "title": "머리 어깨 무릎 발! · 호기와 노래해요",
      "url": "https://www.youtube.com/watch?v=5fP1lCU_mwY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=5fP1lCU_mwY"
    },
    {
      "title": "나 | 나처럼 해 봐요",
      "url": "https://www.youtube.com/watch?v=q-jHQIUB69s",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=758"
    },
    {
      "title": "라 | 라라라 고릴라",
      "url": "https://www.youtube.com/watch?v=sBedYhm1Dgo",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=758"
    },
    {
      "title": "마 | 마법사가 마수리",
      "url": "https://www.youtube.com/watch?v=OBDHIB4gmdE",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=758"
    },
    {
      "title": "바 | 바다의 왕자 바다사자",
      "url": "https://www.youtube.com/watch?v=wrccK17KE7o",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=758"
    },
    {
      "title": "가나다 말놀이 | 핑크퐁 한글송",
      "url": "https://www.youtube.com/watch?v=SEup-OklVTo",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=758"
    }
  ],
  "영어 노출, 영어 동요": [
    {
      "title": "Hello Hello! (Super Simple Puppets)",
      "url": "https://www.youtube.com/watch?v=dNBC8jQFgHo",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=dNBC8jQFgHo"
    },
    {
      "title": "Hello! (Super Simple Puppets)",
      "url": "https://www.youtube.com/watch?v=32ysrBC6B6k",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=32ysrBC6B6k"
    },
    {
      "title": "Open Shut Them (Noodle & Pals)",
      "url": "https://www.youtube.com/watch?v=hXxHonmYz6c",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=hXxHonmYz6c"
    },
    {
      "title": "Open Shut Them (& Other Opposites)",
      "url": "https://www.youtube.com/watch?v=M55R32lQvLg",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=M55R32lQvLg"
    },
    {
      "title": "Five Little Ducks",
      "url": "https://www.youtube.com/watch?v=pZw9veQ76fo",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=pZw9veQ76fo"
    },
    {
      "title": "Twinkle Twinkle Little Star",
      "url": "https://www.youtube.com/watch?v=yCjJyiqpAuU",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=yCjJyiqpAuU"
    },
    {
      "title": "Do You Like Broccoli Ice Cream?",
      "url": "https://www.youtube.com/watch?v=frN3nvhIHUk",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=frN3nvhIHUk"
    },
    {
      "title": "Head Shoulders Knees & Toes (Sing It)",
      "url": "https://www.youtube.com/watch?v=ZanHgPprl-0",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=ZanHgPprl-0"
    },
    {
      "title": "Head Shoulders Knees & Toes (Learn It)",
      "url": "https://www.youtube.com/watch?v=lMQcwNZVUO8",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=lMQcwNZVUO8"
    },
    {
      "title": "Walking In The Jungle (Noodle & Pals)",
      "url": "https://www.youtube.com/watch?v=HRWduGnuH-4",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=HRWduGnuH-4"
    },
    {
      "title": "Walking In The Jungle",
      "url": "https://www.youtube.com/watch?v=GoSq-yZcJ-4",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=GoSq-yZcJ-4"
    },
    {
      "title": "If You're Happy",
      "url": "https://www.youtube.com/watch?v=l4WNrvVjiTw",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=l4WNrvVjiTw"
    },
    {
      "title": "I See Something Blue",
      "url": "https://www.youtube.com/watch?v=jYAWf8Y91hA",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=jYAWf8Y91hA"
    },
    {
      "title": "One Little Finger",
      "url": "https://www.youtube.com/watch?v=eBVqcTEC3zQ",
      "language": "en",
      "source": "https://www.youtube.com/watch?v=eBVqcTEC3zQ"
    }
  ],
  "숫자·색깔·모양 같은 기초 개념": [
    {
      "title": "아기상어와 숫자송 모음",
      "url": "https://www.youtube.com/watch?v=pT6fKuzTrXY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=pT6fKuzTrXY"
    },
    {
      "title": "공룡과 숫자 놀이 해요",
      "url": "https://www.youtube.com/watch?v=byjdsnsOfHs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=byjdsnsOfHs"
    },
    {
      "title": "호기와 친구들의 색깔놀이",
      "url": "https://www.youtube.com/watch?v=Gp48J8epmpI",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Gp48J8epmpI"
    },
    {
      "title": "핑크퐁 꼬리가 어디갔지? 동물 꼬리 찾기",
      "url": "https://www.youtube.com/watch?v=WEzFNy-MD3Q",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WEzFNy-MD3Q"
    },
    {
      "title": "상어가족 색깔이 어디갔지? | 아기상어 토이송 모음집",
      "url": "https://www.youtube.com/watch?v=5Knn21yvw8M",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=5Knn21yvw8M"
    },
    {
      "title": "따라 그리면서 배워요 | 공룡, 모양, 숫자",
      "url": "https://www.youtube.com/watch?v=lo6AHBdLuPY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=lo6AHBdLuPY"
    },
    {
      "title": "동글동글 동물 그리기 | 다양한 모양으로 동물을 그려요",
      "url": "https://www.youtube.com/watch?v=lhvfTZ7rtl0",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=lhvfTZ7rtl0"
    },
    {
      "title": "모양 탐험 | 모양을 배워요",
      "url": "https://www.youtube.com/watch?v=G5X0J64o-rc",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=G5X0J64o-rc"
    },
    {
      "title": "네모 로봇 | 모양을 배워요",
      "url": "https://www.youtube.com/watch?v=FXiwnF2IuMo",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=FXiwnF2IuMo"
    },
    {
      "title": "모양 서커스 | 모양을 배워요",
      "url": "https://www.youtube.com/watch?v=W5CevChG5uc",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=W5CevChG5uc"
    }
  ],
  "식사 습관 (앉아서 먹기, 골고루 먹기)": [
    {
      "title": "#냠냠친구 | 바르게 식사해요🍽️ | 식사 예절을 배워요! | 생활습관 동요 | 유아 교육 | 유치원 동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=McmFhxZAZqM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=McmFhxZAZqM&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "#냠냠친구 편식하지 말고 골고루 먹어요 | 골고루송 | 올바른 식습관 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=vp_uluK4_cM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=vp_uluK4_cM&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpTSBwkJRwwBhyohjO8%3D"
    },
    {
      "title": "#냠냠친구 | 핑크퐁 아기상어와 냠냠 골고루 먹어요! | +모음집 | 밥 먹을 때 보기 좋은 동요 모음🥄 | 골고루송, 밥이 좋아, 할아버지 상어의 조개빵 외 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=OeA16WxP9to",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=OeA16WxP9to&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "식습관 동요 ♬ 알록달록냠냠냠",
      "url": "https://www.youtube.com/watch?v=J5ZMY3ejZsk",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=J5ZMY3ejZsk&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpTSBwkJRwwBhyohjO8%3D"
    },
    {
      "title": "#냠냠친구 | 핑크퐁 아기상어 먹방 동요 특집 | 핑크퐁 맛있는 식사송! | 엄마 아빠 밥 먹을 때 보기 좋은 동요 | 골고루송, 공룡 요리사 외 | +모음집 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=RhSl7ch63HU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=RhSl7ch63HU&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "식사예절을 배워요 | 생활습관 편 | 40분 동요모음 | 메너송 | 누리과정 | 정리정돈 | 스스로 응가해요 | 손 씻기송 | 베이비버스 인기동요 | BabyBus",
      "url": "https://www.youtube.com/watch?v=xT2pgbRgbdM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=xT2pgbRgbdM&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "🥕 골고루송 | 냠냠 식사송 | 편식하지 말고 골고루 먹어요 | 올바른 식습관 | 생활습관동요",
      "url": "https://www.youtube.com/watch?v=6v6D7Fewe68",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=6v6D7Fewe68&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpTSBwkJRwwBhyohjO8%3D"
    },
    {
      "title": "20분⭐음식 동요 모음집🥣| 음식송 | 인기동요 | 어린이동요 | 로티프렌즈",
      "url": "https://www.youtube.com/watch?v=9usmoN5Pl_s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=9usmoN5Pl_s&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "냠냠! 바른 식사 예절을 배워요🥄 | 식사 예절송🍚 | 맛있게 바르게 먹어요! | 누리과정 | 생활습관 | 어린이 교육 동요 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=7IPlzOBDxSc",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=7IPlzOBDxSc&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "음식을 골고루 먹어요! | 예스 네오! | 식습관 | 동요모음 | 어린이 노래 | 베이비버스 인기동요 | BabyBus",
      "url": "https://www.youtube.com/watch?v=BXYPd5LekTk",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=BXYPd5LekTk&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "#냠냠친구🥒 | 베베핀과 좋은 식습관을 배워봐요! | 🥕맛있는 음식 동요 | 건강한 식사 예절, 골고루 먹어요 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=nvoyYsRnpLI",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=nvoyYsRnpLI&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpTSBwkJRwwBhyohjO8%3D"
    },
    {
      "title": "냠냠! 호이와 맛있는 과일 채소 먹어요 🍊 | +모음집 | 호이의 놀이교실 | 식습관 동요 | 생활습관동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=jBgSYk3Oeqg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=jBgSYk3Oeqg&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    },
    {
      "title": "뽀로로 놀이동요 | 뽀로로 아침 식사송 | 냠냠, 밥 먹을 시간이야 ! | 골고루 식사 예절 송 | 뽀로로와노래해요",
      "url": "https://www.youtube.com/watch?v=6okMhJSC9dc",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=6okMhJSC9dc&pp=ygUU7Iud7IKsIOyKteq0gCDrj5nsmpQ%3D"
    }
  ],
  "양치·손 씻기·목욕": [
    {
      "title": "치카치카 양치해요🦷| 양치송 | 핑크퐁! 생활습관동요 | 생활습관송 | 어린이 충치 예방 | 치카송 | 이닦기송 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=jaEt8qwrahY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=jaEt8qwrahY&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "핑크퐁과 함께 치카치카 양치하자! | 치카송 | 양치 습관 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=JyeqhJqHQlA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=JyeqhJqHQlA&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "31화 | 치카송 | 🦷베베핀과 올바르게 양치하기! | 음식을 먹고 나서 깨끗이 이를 닦아요 | 생활습관동요 | 어린이 양치 교육 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=HDeXjsqkNPY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=HDeXjsqkNPY&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "#등원친구 치카치카 재미있는 이 닦기🦷 | 충치 벌레 🪥물리치자! | 어린이 생활 습관 동요 | 유치원 동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=o0FybGWRY5A",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=o0FybGWRY5A&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "139화 | 🪥치카치카 이 닦자!🦷 | 싫어, 싫어! 이 닦기 싫어요! | 양치송 | 베베핀 생활습관 배우기 | 베베핀 Bebefinn - 키즈 인기 동요・동화",
      "url": "https://www.youtube.com/watch?v=Q8DjuGVVdvQ",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Q8DjuGVVdvQ&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "콩순이 Kongsuni - NEW 치카치카 송 Brush Brush Song (KOR Version) Official M/V",
      "url": "https://www.youtube.com/watch?v=qRykmMNNwWA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=qRykmMNNwWA&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "동물들과 함께 이를 닦아요 | 이 닦기송 | 치카송 | 양치 습관 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=T_d5-8O2fCM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=T_d5-8O2fCM&pp=ygUN7JaR7LmYIOuPmeyalNIHCQlHDAGHKiGM7w%3D%3D"
    },
    {
      "title": "양치송🦷✨치카치카! 세균을 물리쳐요 | 어린이 생활 습관 동요 | Kids Song | 꼬마공룡 코코비",
      "url": "https://www.youtube.com/watch?v=5uM3E6uux9s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=5uM3E6uux9s&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "뽀로로노래 | 치카 치카 동물 유치원 | 뽀로로 치카송 | 뽀로로와 양치해요 | 뽀로로동요놀이",
      "url": "https://www.youtube.com/watch?v=qeWVQAostlQ",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=qeWVQAostlQ&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "뽀로로 치카송 | 뽀로로와 함께 치카치카 양치해요!😬 | 어린이 생활습관 동요",
      "url": "https://www.youtube.com/watch?v=oN14Cq9cOWI",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=oN14Cq9cOWI&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "[NEW✨] 치카치카~ 튼튼쌤과 세균을 물리쳐요 | 안전 히어로 튼튼쌤 💪 | 양치질 교육 | 치카송 양치송 | 핑크퐁!인기동요",
      "url": "https://www.youtube.com/watch?v=CGIHBh35beg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=CGIHBh35beg&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "핑크퐁 손씻기송 | 세균맨 안녕, 깨끗하게 손을 씻어요 | 구석구석 사이사이 깨끗하게 손 씻기송 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=pyoVHOl2rrU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=pyoVHOl2rrU&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "손을 씻어요🧼ㅣ유치원동요ㅣ필수동요ㅣ똑똑키즈! 와 함께 신나게 불러보아요!",
      "url": "https://www.youtube.com/watch?v=-D6zRZyeZ70",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=-D6zRZyeZ70&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "우글우글 세균맨 저리가! | 손씻기송 | 생활습관 동요 | 유아 교육 | 유치원 동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=zSXH6ZwJrVs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=zSXH6ZwJrVs&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "보글보글 손씻기 | 사이사이로 구석구석 손을 씻어요 | 핑크퐁 체조 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=gy_-69B5L_c",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=gy_-69B5L_c&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "뽀로로 손씻기 캠페인 | 손씻기 동요 | #집에서뽀로로와함께해요 | 뽀로로와노래해요",
      "url": "https://www.youtube.com/watch?v=KDZQUcogLb8",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=KDZQUcogLb8&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "아기상어와 6단계 손 씻기 | 올바른 손 씻기! #BabySharkHandWashChallenge 아기상어손씻기챌린지 | 코로나 예방 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=JvfyAtvZRvk",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=JvfyAtvZRvk&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "신나는 목욕 동요 모음 | 뽀드득 핑크퐁 아기상어와 노래 들으며 재미있게 목욕해요 | 목욕송, 뽀드득 씻기 체조 외 15곡 | +모음집 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=p1_wMJZ1hxE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=p1_wMJZ1hxE&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "시원하게 씻어요! 목욕 동요🛁 | +모음집 | 무더운 여름! 깨끗이 씻을 때 듣는 동요💙 | 목욕송, 샴푸송, 세차송 | 어린이 생활습관동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=S9u-yiv4qXE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=S9u-yiv4qXE&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "53화 | #목욕친구 | 목욕할 시간이야! 베베핀 목욕 동요 | 뽀드득 목욕송 | 거품 놀이 | 생활습관동요 | 어린이 목욕 교육 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=Nasw8uMvZUY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Nasw8uMvZUY&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "똘똘이 시즌4 노래 | 목욕을 해요 | ToriTori | Kids Songs | Nursery Rhymes | Baby Song",
      "url": "https://www.youtube.com/watch?v=NKIK-rD6jvQ",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=NKIK-rD6jvQ&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "구석구석 깨끗하게 목욕해요 | 목욕송 | 목욕 습관 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=BRvfUQQL4co",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=BRvfUQQL4co&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "목욕송 | 생활송 | 어린이동요 | 버블버블 버블버블 | 깨비키즈 KEBIKIDS",
      "url": "https://www.youtube.com/watch?v=aymWnDlJhro",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=aymWnDlJhro&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    }
  ],
  "양치 습관": [
    {
      "title": "치카치카 양치해요🦷| 양치송 | 핑크퐁! 생활습관동요 | 생활습관송 | 어린이 충치 예방 | 치카송 | 이닦기송 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=jaEt8qwrahY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=jaEt8qwrahY&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "핑크퐁과 함께 치카치카 양치하자! | 치카송 | 양치 습관 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=JyeqhJqHQlA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=JyeqhJqHQlA&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "31화 | 치카송 | 🦷베베핀과 올바르게 양치하기! | 음식을 먹고 나서 깨끗이 이를 닦아요 | 생활습관동요 | 어린이 양치 교육 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=HDeXjsqkNPY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=HDeXjsqkNPY&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "#등원친구 치카치카 재미있는 이 닦기🦷 | 충치 벌레 🪥물리치자! | 어린이 생활 습관 동요 | 유치원 동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=o0FybGWRY5A",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=o0FybGWRY5A&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "139화 | 🪥치카치카 이 닦자!🦷 | 싫어, 싫어! 이 닦기 싫어요! | 양치송 | 베베핀 생활습관 배우기 | 베베핀 Bebefinn - 키즈 인기 동요・동화",
      "url": "https://www.youtube.com/watch?v=Q8DjuGVVdvQ",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Q8DjuGVVdvQ&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "콩순이 Kongsuni - NEW 치카치카 송 Brush Brush Song (KOR Version) Official M/V",
      "url": "https://www.youtube.com/watch?v=qRykmMNNwWA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=qRykmMNNwWA&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "동물들과 함께 이를 닦아요 | 이 닦기송 | 치카송 | 양치 습관 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=T_d5-8O2fCM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=T_d5-8O2fCM&pp=ygUN7JaR7LmYIOuPmeyalNIHCQlHDAGHKiGM7w%3D%3D"
    },
    {
      "title": "양치송🦷✨치카치카! 세균을 물리쳐요 | 어린이 생활 습관 동요 | Kids Song | 꼬마공룡 코코비",
      "url": "https://www.youtube.com/watch?v=5uM3E6uux9s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=5uM3E6uux9s&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "뽀로로노래 | 치카 치카 동물 유치원 | 뽀로로 치카송 | 뽀로로와 양치해요 | 뽀로로동요놀이",
      "url": "https://www.youtube.com/watch?v=qeWVQAostlQ",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=qeWVQAostlQ&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "뽀로로 치카송 | 뽀로로와 함께 치카치카 양치해요!😬 | 어린이 생활습관 동요",
      "url": "https://www.youtube.com/watch?v=oN14Cq9cOWI",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=oN14Cq9cOWI&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    },
    {
      "title": "[NEW✨] 치카치카~ 튼튼쌤과 세균을 물리쳐요 | 안전 히어로 튼튼쌤 💪 | 양치질 교육 | 치카송 양치송 | 핑크퐁!인기동요",
      "url": "https://www.youtube.com/watch?v=CGIHBh35beg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=CGIHBh35beg&pp=ygUN7JaR7LmYIOuPmeyalA%3D%3D"
    }
  ],
  "손 씻기 습관": [
    {
      "title": "핑크퐁 손씻기송 | 세균맨 안녕, 깨끗하게 손을 씻어요 | 구석구석 사이사이 깨끗하게 손 씻기송 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=pyoVHOl2rrU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=pyoVHOl2rrU&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "손을 씻어요🧼ㅣ유치원동요ㅣ필수동요ㅣ똑똑키즈! 와 함께 신나게 불러보아요!",
      "url": "https://www.youtube.com/watch?v=-D6zRZyeZ70",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=-D6zRZyeZ70&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "우글우글 세균맨 저리가! | 손씻기송 | 생활습관 동요 | 유아 교육 | 유치원 동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=zSXH6ZwJrVs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=zSXH6ZwJrVs&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "보글보글 손씻기 | 사이사이로 구석구석 손을 씻어요 | 핑크퐁 체조 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=gy_-69B5L_c",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=gy_-69B5L_c&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "뽀로로 손씻기 캠페인 | 손씻기 동요 | #집에서뽀로로와함께해요 | 뽀로로와노래해요",
      "url": "https://www.youtube.com/watch?v=KDZQUcogLb8",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=KDZQUcogLb8&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    },
    {
      "title": "아기상어와 6단계 손 씻기 | 올바른 손 씻기! #BabySharkHandWashChallenge 아기상어손씻기챌린지 | 코로나 예방 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=JvfyAtvZRvk",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=JvfyAtvZRvk&pp=ygUQ7IaQ7JS76riwIOuPmeyalA%3D%3D"
    }
  ],
  "목욕 습관": [
    {
      "title": "신나는 목욕 동요 모음 | 뽀드득 핑크퐁 아기상어와 노래 들으며 재미있게 목욕해요 | 목욕송, 뽀드득 씻기 체조 외 15곡 | +모음집 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=p1_wMJZ1hxE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=p1_wMJZ1hxE&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "시원하게 씻어요! 목욕 동요🛁 | +모음집 | 무더운 여름! 깨끗이 씻을 때 듣는 동요💙 | 목욕송, 샴푸송, 세차송 | 어린이 생활습관동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=S9u-yiv4qXE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=S9u-yiv4qXE&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "53화 | #목욕친구 | 목욕할 시간이야! 베베핀 목욕 동요 | 뽀드득 목욕송 | 거품 놀이 | 생활습관동요 | 어린이 목욕 교육 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=Nasw8uMvZUY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Nasw8uMvZUY&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "똘똘이 시즌4 노래 | 목욕을 해요 | ToriTori | Kids Songs | Nursery Rhymes | Baby Song",
      "url": "https://www.youtube.com/watch?v=NKIK-rD6jvQ",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=NKIK-rD6jvQ&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "구석구석 깨끗하게 목욕해요 | 목욕송 | 목욕 습관 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=BRvfUQQL4co",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=BRvfUQQL4co&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    },
    {
      "title": "목욕송 | 생활송 | 어린이동요 | 버블버블 버블버블 | 깨비키즈 KEBIKIDS",
      "url": "https://www.youtube.com/watch?v=aymWnDlJhro",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=aymWnDlJhro&pp=ygUN66qp7JqVIOuPmeyalA%3D%3D"
    }
  ],
  "잠자리 습관": [
    {
      "title": "잘 시간이야 | 핑크퐁 자장가",
      "url": "https://www.youtube.com/watch?v=Q_W3rew989o",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=757"
    },
    {
      "title": "작은 별 | 핑크퐁과 호기의 율동 동요",
      "url": "https://www.youtube.com/watch?v=h6a4RS_jIZY",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=757"
    },
    {
      "title": "아기 상어 자장가",
      "url": "https://www.youtube.com/watch?v=keHUJ6_a5mY",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=757"
    },
    {
      "title": "반짝반짝 작은별 | 뽀로로 인기동요",
      "url": "https://www.youtube.com/watch?v=i8ZtPmnEq7o",
      "language": "ko",
      "source": "https://ceri.knue.ac.kr/pds/늘봄교육프로그램.pdf"
    },
    {
      "title": "뽀로로 자장가 | 1시간 이어듣기",
      "url": "https://www.youtube.com/watch?v=875Gl5vFEek",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=875Gl5vFEek"
    },
    {
      "title": "아빠의 자장가 | 핑크퐁",
      "url": "https://www.youtube.com/watch?v=cy4wc31KFrs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=cy4wc31KFrs"
    }
  ],
  "배변 훈련": [
    {
      "title": "새 학기 특집 | 스스로 척척! 올바른 생활습관 동요 모음 | 주니토니",
      "url": "https://www.youtube.com/watch?v=uKskHCOK0Hs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=uKskHCOK0Hs"
    },
    {
      "title": "뽀로로 응가송 | 참지 말고 응가해요",
      "url": "https://www.youtube.com/watch?v=TQpqNH4TvzI",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=TQpqNH4TvzI"
    },
    {
      "title": "변기통에 응가해요 | 변기송 | 핑크퐁! 생활습관동요",
      "url": "https://www.youtube.com/watch?v=TshkCMmEgFo",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=TshkCMmEgFo&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpQ%3D"
    },
    {
      "title": "화장실 가는 법을 배우자! | 💩응가 마려울 땐 어떻게 해요? | 베베핀 배변 학습 동요 | 생활습관송 | +모음집 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=2eKX0kpIiM0",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=2eKX0kpIiM0&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpQ%3D"
    },
    {
      "title": "베베핀과 배변 교육해요!💩🚽 | 생활습관 TOP5 동요 모음 | 참지 말고 응가해요!, 치카치카 이 닦자! 외 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=slYArlTFw6s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=slYArlTFw6s&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpQ%3D"
    },
    {
      "title": "쉬야가 급할땐🚽 | 어서 화장실에 가요| 스스로 화장실 가요 | 생활습관 | 응가송 | 어린이 노래 | 베이비버스 인기동요",
      "url": "https://www.youtube.com/watch?v=cLtV105tDFg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=cLtV105tDFg&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpQ%3D"
    },
    {
      "title": "변기에 응가해요 | 기저귀 이제 안녕~ | 생활습관 | 리아차차 LiaChaCha - 키즈 인기동요",
      "url": "https://www.youtube.com/watch?v=Se6Dqez6n_k",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Se6Dqez6n_k&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpQ%3D"
    },
    {
      "title": "🆕콩순이의 율동교실💛 뿌웅~ 응가송💩 #응가동요ㅣ화장실 배변훈련도 즐겁게!",
      "url": "https://www.youtube.com/watch?v=nunJ2hbY9Hk",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=nunJ2hbY9Hk&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpQ%3D"
    },
    {
      "title": "배변 체조송 | 생활습관동요 | 배변습관 | 창작동요 | 키즈퐁당",
      "url": "https://www.youtube.com/watch?v=wBZy3mXSfzw",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=wBZy3mXSfzw&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpTSBwkJRwwBhyohjO8%3D"
    },
    {
      "title": "123화 | 배가 꾸루룩! 참지 말고 응가해요💩 | 최신 동요 | 응가 마려울 땐 어떻게 해요? | 어린이 배변 습관 동요 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=JrH0OdvheoY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=JrH0OdvheoY&pp=ygUU67Cw67OAIO2biOugqCDrj5nsmpQ%3D"
    }
  ],
  "장난감 정리하기": [
    {
      "title": "그냥 두고 나갔더니 | 인기동요 | 생활습관동요 | 정리송 | 톰토미 (TOMTOMI)",
      "url": "https://www.youtube.com/watch?v=ZwmJ_At-Ypk",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=ZwmJ_At-Ypk&pp=ygUX7J6l64Kc6rCQIOygleumrCDrj5nsmpTSBwkJRwwBhyohjO8%3D"
    },
    {
      "title": "정리시간이 재밌어지는 동요 | 정리정돈송 (10분 연속재생)",
      "url": "https://www.youtube.com/watch?v=HfZN3Cdmbms",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=HfZN3Cdmbms&pp=ygUX7J6l64Kc6rCQIOygleumrCDrj5nsmpQ%3D"
    },
    {
      "title": "제자리에 정리해요ㅣ차곡차곡 정리 대장은 바로 나!ㅣ핑크퐁 유치원 동요ㅣ정리정돈ㅣ생활 습관 동요ㅣ누리 과정ㅣ핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=Vo_u13uNlUU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Vo_u13uNlUU&pp=ygUX7J6l64Kc6rCQIOygleumrCDrj5nsmpQ%3D"
    },
    {
      "title": "정리 동요 15분 연속재생｜정리정돈송🎵｜유치원·어린이집 필수! 정리노래｜유치원 동요｜생활 습관 동요｜모두 모두 제자리｜우리 모두 다같이 정리해",
      "url": "https://www.youtube.com/watch?v=WeYNJVnDeJc",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WeYNJVnDeJc&pp=ygUX7J6l64Kc6rCQIOygleumrCDrj5nsmpQ%3D"
    },
    {
      "title": "기분이 좋아지는 상쾌한 정리송 ㅣ 정리노래  ㅣ 7분 정리송",
      "url": "https://www.youtube.com/watch?v=VWzoJzb_r18",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=VWzoJzb_r18&pp=ygUX7J6l64Kc6rCQIOygleumrCDrj5nsmpQ%3D"
    },
    {
      "title": "윙크 생활습관송｜정리왕이 될 사람 모여라!｜윙크 정리송",
      "url": "https://www.youtube.com/watch?v=NOF42kxzExQ",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=NOF42kxzExQ&pp=ygUX7J6l64Kc6rCQIOygleumrCDrj5nsmpTSBwkJRwwBhyohjO8%3D"
    }
  ],
  "옷 입기·벗기": [
    {
      "title": "80화 | 옷 입을 시간이야!👚 | 옷 입기송 | 어린이 생활습관 동요 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=8fReldiTbYs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=8fReldiTbYs&pp=ygUR7Ji3IOyeheq4sCDrj5nsmpQ%3D"
    },
    {
      "title": "스스로 옷을 입어요 | 옷 입기송 | 생활습관 | 리아차차 LiaChaCha - 키즈 인기동요",
      "url": "https://www.youtube.com/watch?v=dBI9G9IsiOs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=dBI9G9IsiOs&pp=ygUR7Ji3IOyeheq4sCDrj5nsmpQ%3D"
    },
    {
      "title": "옷입기송 | 팔을 쏘옥! 다리를 쭈욱! 혼자서 옷입기! 어렵지 않아요~ | 생활습관동요 | 톰토미 (TOMTOMI)",
      "url": "https://www.youtube.com/watch?v=X-Bt04yFSwA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=X-Bt04yFSwA&pp=ygUR7Ji3IOyeheq4sCDrj5nsmpQ%3D"
    },
    {
      "title": "혼자서 옷을 입어요! 👗👖 뽀로로 등원송 | 어린이 생활습관 | 바른생활 | 혼자 서도 잘해요 | 뽀로로와노래해요",
      "url": "https://www.youtube.com/watch?v=o-UO51lbQrA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=o-UO51lbQrA&pp=ygUR7Ji3IOyeheq4sCDrj5nsmpQ%3D"
    },
    {
      "title": "날씨 따라 옷 입기 | 오늘은 어떤 옷을 입을까? | 생활습관동요 | 주니토니 | JunyTony",
      "url": "https://www.youtube.com/watch?v=cxHbQ407aaI",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=cxHbQ407aaI&pp=ygUR7Ji3IOyeheq4sCDrj5nsmpQ%3D"
    },
    {
      "title": "#등원친구 내가 입을래요 | 생활습관송 | 인성동요 | 핑크퐁! 생활습관동요 | 핑크퐁! 인기동요",
      "url": "https://www.youtube.com/watch?v=WznnJ8uLVLk",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WznnJ8uLVLk&pp=ygUR7Ji3IOyeheq4sCDrj5nsmpQ%3D"
    },
    {
      "title": "👚어떤 옷 입고 싶니? | 옷 입기송 외 생활습관 동요 | 옷입기, 밥먹기, 아플 때 | 베베핀 Bebefinn - 키즈 인기 동요",
      "url": "https://www.youtube.com/watch?v=MPLCJg1slQ8",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=MPLCJg1slQ8&pp=ygUR7Ji3IOyeheq4sCDrj5nsmpQ%3D"
    }
  ],
  "칭얼거림·떼쓰기 줄이기": [
    {
      "title": "떼쓰지 않아요 | 로보카폴리 동요",
      "url": "https://www.youtube.com/watch?v=n53oOUaRrsU",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "울지말고 말해요 | 로보카폴리 동요",
      "url": "https://www.youtube.com/watch?v=wC0iuvF-xQE",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "화난다고 말해요 | 로보카폴리 동요",
      "url": "https://www.youtube.com/watch?v=Hu2KM9-IXuI",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "화가 날 땐 셋까지 세어 봐",
      "url": "https://www.youtube.com/watch?v=UHexfDqfWBw",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=UHexfDqfWBw"
    },
    {
      "title": "친구와 싸우지 않아요! | 핑크퐁 생활습관·인성 동요 모음",
      "url": "https://www.youtube.com/watch?v=P0Mh9pSXZAs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=P0Mh9pSXZAs"
    },
    {
      "title": "화가 날 땐 셋까지 세어 봐 외 생활습관 동요 모음",
      "url": "https://www.youtube.com/watch?v=l3mSo_hRMXE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=l3mSo_hRMXE"
    },
    {
      "title": "새 학기 특집 | 스스로 척척! 올바른 생활습관 동요 모음 | 주니토니",
      "url": "https://www.youtube.com/watch?v=uKskHCOK0Hs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=uKskHCOK0Hs"
    }
  ],
  "감정 표현하기 (화나요, 슬퍼요 말하기)": [
    {
      "title": "힘들 땐 도움을 요청해!",
      "url": "https://www.youtube.com/watch?v=K-uX5uqFT8I",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "거절하는 용기",
      "url": "https://www.youtube.com/watch?v=wBr52cbIpt0",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "긍정적인 마음을 잊지 말아요!",
      "url": "https://www.youtube.com/watch?v=sDmXFEJAj_8",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "솔직하게 말해요!",
      "url": "https://www.youtube.com/watch?v=fIB6LyVIlEw",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "떼쓰지 않아요 | 로보카폴리 동요",
      "url": "https://www.youtube.com/watch?v=n53oOUaRrsU",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "울지말고 말해요 | 로보카폴리 동요",
      "url": "https://www.youtube.com/watch?v=wC0iuvF-xQE",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "화난다고 말해요 | 로보카폴리 동요",
      "url": "https://www.youtube.com/watch?v=Hu2KM9-IXuI",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "화가 날 땐 셋까지 세어 봐",
      "url": "https://www.youtube.com/watch?v=UHexfDqfWBw",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=UHexfDqfWBw"
    },
    {
      "title": "친구와 싸우지 않아요! | 핑크퐁 생활습관·인성 동요 모음",
      "url": "https://www.youtube.com/watch?v=P0Mh9pSXZAs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=P0Mh9pSXZAs"
    },
    {
      "title": "화가 날 땐 셋까지 세어 봐 외 생활습관 동요 모음",
      "url": "https://www.youtube.com/watch?v=l3mSo_hRMXE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=l3mSo_hRMXE"
    }
  ],
  "기다리기, 차례 지키기": [
    {
      "title": "약속은 꼭 지켜야 해!",
      "url": "https://www.youtube.com/watch?v=JJ3YjbR6MrA",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "키키묘묘와 같이 버스예절을 지켜요 | 차례 차례 줄서요",
      "url": "https://www.youtube.com/watch?v=mRQlysrPpGk",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "재미있는 놀이터 | 사이좋게 놀아요",
      "url": "https://www.youtube.com/watch?v=_q1_44FlkIA",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "장난감 빌리고 싶을 때는 예의바르게 물어봐요",
      "url": "https://www.youtube.com/watch?v=w9_wg9PrcRQ",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "키키묘묘와 줄을 서서 사이좋게 놀아요",
      "url": "https://www.youtube.com/watch?v=poZ0ri9O16w",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "사이좋게 차례차례 | 핑크퐁",
      "url": "https://www.youtube.com/watch?v=wjVAuVVsZ8o",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=wjVAuVVsZ8o"
    }
  ],
  "나누기, 친구와 사이좋게 지내기": [
    {
      "title": "친구들의 마음도 생각해줘야 해!",
      "url": "https://www.youtube.com/watch?v=fEqh0ocXv54",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "허락없이 남의 물건에 그림을 그리면 안돼!",
      "url": "https://www.youtube.com/watch?v=mYLjyKyKyBo",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "친구의 생일을 축하해줘요!",
      "url": "https://www.youtube.com/watch?v=C9IBUWz3YeE",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "약속은 꼭 지켜야 해!",
      "url": "https://www.youtube.com/watch?v=JJ3YjbR6MrA",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "힘들 땐 도움을 요청해!",
      "url": "https://www.youtube.com/watch?v=K-uX5uqFT8I",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "거절하는 용기",
      "url": "https://www.youtube.com/watch?v=wBr52cbIpt0",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "솔직하게 말해요!",
      "url": "https://www.youtube.com/watch?v=fIB6LyVIlEw",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=838"
    },
    {
      "title": "재미있는 놀이터 | 사이좋게 놀아요",
      "url": "https://www.youtube.com/watch?v=_q1_44FlkIA",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "웃으면서 안녕! | 유치원에서 친구들과 인사해요",
      "url": "https://www.youtube.com/watch?v=vRMVJ_JcIGU",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "장난감 빌리고 싶을 때는 예의바르게 물어봐요",
      "url": "https://www.youtube.com/watch?v=w9_wg9PrcRQ",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "친구와 나누면 즐거워요!",
      "url": "https://www.youtube.com/watch?v=rSC3wDyErUI",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "키키묘묘 사이좋게 사탕을 나눠먹어요",
      "url": "https://www.youtube.com/watch?v=KKLkTft7D_8",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "키키묘묘와 줄을 서서 사이좋게 놀아요",
      "url": "https://www.youtube.com/watch?v=poZ0ri9O16w",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "사이좋게 차례차례 | 핑크퐁",
      "url": "https://www.youtube.com/watch?v=wjVAuVVsZ8o",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=wjVAuVVsZ8o"
    }
  ],
  "부모와 잠시 떨어지기": [
    {
      "title": "엄마랑 떨어지기 싫어요 | 주니토니",
      "url": "https://www.youtube.com/watch?v=pSz4JzQeuFc",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=pSz4JzQeuFc"
    },
    {
      "title": "엄마랑 떨어지기 싫어요! | 베베핀 (짧은 영상)",
      "url": "https://www.youtube.com/watch?v=UZELUzO4O6I",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=UZELUzO4O6I"
    },
    {
      "title": "엄마와 떨어지고, 친구를 만나고 | 토리의 첫 유치원",
      "url": "https://www.youtube.com/watch?v=Bd7dzjTuKZE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Bd7dzjTuKZE"
    },
    {
      "title": "엄마랑 계속 있고 싶어 | 파파쏭 키즈",
      "url": "https://www.youtube.com/watch?v=aVVoRDyHZBs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=aVVoRDyHZBs"
    },
    {
      "title": "안녕! 우리 악어 인사해 | 엄마 아빠 조금 있다가 만나요 | 핑크퐁",
      "url": "https://www.youtube.com/watch?v=jfh3kFUpVmY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=jfh3kFUpVmY"
    },
    {
      "title": "새 학기 특집 | 스스로 척척! 올바른 생활습관 동요 모음 | 주니토니",
      "url": "https://www.youtube.com/watch?v=uKskHCOK0Hs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=uKskHCOK0Hs"
    }
  ],
  "어린이집·유치원 적응": [
    {
      "title": "웃으면서 안녕! | 유치원에서 친구들과 인사해요",
      "url": "https://www.youtube.com/watch?v=vRMVJ_JcIGU",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "엄마와 떨어지고, 친구를 만나고 | 토리의 첫 유치원",
      "url": "https://www.youtube.com/watch?v=Bd7dzjTuKZE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Bd7dzjTuKZE"
    },
    {
      "title": "새 학기 특집 | 스스로 척척! 올바른 생활습관 동요 모음 | 주니토니",
      "url": "https://www.youtube.com/watch?v=uKskHCOK0Hs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=uKskHCOK0Hs"
    },
    {
      "title": "유치원에 갑니다 | 지니키즈",
      "url": "https://www.youtube.com/watch?v=FnAdvK51bB8",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=FnAdvK51bB8"
    },
    {
      "title": "유치원 가는 길 | 김성균동요세상",
      "url": "https://www.youtube.com/watch?v=wXK_h-fuhOs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=wXK_h-fuhOs"
    },
    {
      "title": "유치원가자송 | 똘똘이 자신감 동요",
      "url": "https://www.youtube.com/watch?v=2Wpf-Ub7SXI",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=2Wpf-Ub7SXI"
    },
    {
      "title": "몬스터 유치원 6 | 유치원 가기 싫어요 1 | 지니키즈",
      "url": "https://www.youtube.com/watch?v=DoJ9jOEOgqw",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=DoJ9jOEOgqw"
    },
    {
      "title": "유치원에 갑니다 | 하늘이와 바다의 율동 동요",
      "url": "https://www.youtube.com/watch?v=1l42fcWlZP4",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=1l42fcWlZP4"
    },
    {
      "title": "친구들 보러 유치원에 갈래요! | 핑크퐁",
      "url": "https://www.youtube.com/watch?v=GLXyFZTl5j8",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=GLXyFZTl5j8"
    }
  ],
  "동물·자연·탈것 등 세상 알기": [
    {
      "title": "펭귄 댄스",
      "url": "https://www.youtube.com/watch?v=L1nHZNMN9gU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L1nHZNMN9gU"
    },
    {
      "title": "랄랄라 동물요가",
      "url": "https://www.youtube.com/watch?v=Bb23vL6nOPE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Bb23vL6nOPE"
    },
    {
      "title": "핑크퐁 율동 체조 교실 11곡 모음",
      "url": "https://www.youtube.com/watch?v=2SS2flwrLag",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=2SS2flwrLag"
    },
    {
      "title": "티라노사우루스 율동 동요",
      "url": "https://www.youtube.com/watch?v=WGddHP9wTgs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WGddHP9wTgs"
    },
    {
      "title": "공룡과 숫자 놀이 해요",
      "url": "https://www.youtube.com/watch?v=byjdsnsOfHs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=byjdsnsOfHs"
    },
    {
      "title": "요이요이 경찰차 체조",
      "url": "https://www.youtube.com/watch?v=VfCCDfQKYyg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=VfCCDfQKYyg"
    },
    {
      "title": "경찰차 · 요이요이 경찰차 출동",
      "url": "https://www.youtube.com/watch?v=pOiX3U0Vp-s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=pOiX3U0Vp-s"
    },
    {
      "title": "핑크퐁 꼬리가 어디갔지? 동물 꼬리 찾기",
      "url": "https://www.youtube.com/watch?v=WEzFNy-MD3Q",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WEzFNy-MD3Q"
    },
    {
      "title": "꿀꿀 돼지의 꼬리 찾기 · 종이접기",
      "url": "https://www.youtube.com/watch?v=ZBAtZgSw5gM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=ZBAtZgSw5gM"
    },
    {
      "title": "꼬리 찾기",
      "url": "https://www.youtube.com/watch?v=U_DXjawVb4U",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=U_DXjawVb4U"
    },
    {
      "title": "곰 세 마리",
      "url": "https://www.youtube.com/watch?v=L6_y2KvGNts",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L6_y2KvGNts"
    },
    {
      "title": "동물의 왕 사자",
      "url": "https://www.youtube.com/watch?v=M2cgndHuG04",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=M2cgndHuG04"
    },
    {
      "title": "동물의 왕 사자 · 핑크퐁 체조 교실",
      "url": "https://www.youtube.com/watch?v=4TSwX7J3zko",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=4TSwX7J3zko"
    },
    {
      "title": "소방차 인기 동요·게임·동화 모음",
      "url": "https://www.youtube.com/watch?v=VtOTs3rBYxU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=VtOTs3rBYxU"
    },
    {
      "title": "슈퍼 구조대 · 그림자 극장",
      "url": "https://www.youtube.com/watch?v=hIkrMfLR_ys",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=hIkrMfLR_ys"
    },
    {
      "title": "트럭 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=SaEYSBF5axM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=SaEYSBF5axM"
    },
    {
      "title": "운전송 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=WZfyoqLdZXA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WZfyoqLdZXA"
    },
    {
      "title": "불도저 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=RxafXAKeJVg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=RxafXAKeJVg"
    },
    {
      "title": "소방차 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=JnxwbY07jmY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=JnxwbY07jmY"
    },
    {
      "title": "기차 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=ya_B_G4QKAY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=ya_B_G4QKAY"
    }
  ],
  "동물·자연 알아보기": [
    {
      "title": "펭귄 댄스",
      "url": "https://www.youtube.com/watch?v=L1nHZNMN9gU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L1nHZNMN9gU"
    },
    {
      "title": "랄랄라 동물요가",
      "url": "https://www.youtube.com/watch?v=Bb23vL6nOPE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Bb23vL6nOPE"
    },
    {
      "title": "핑크퐁 율동 체조 교실 11곡 모음",
      "url": "https://www.youtube.com/watch?v=2SS2flwrLag",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=2SS2flwrLag"
    },
    {
      "title": "티라노사우루스 율동 동요",
      "url": "https://www.youtube.com/watch?v=WGddHP9wTgs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WGddHP9wTgs"
    },
    {
      "title": "공룡과 숫자 놀이 해요",
      "url": "https://www.youtube.com/watch?v=byjdsnsOfHs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=byjdsnsOfHs"
    },
    {
      "title": "핑크퐁 꼬리가 어디갔지? 동물 꼬리 찾기",
      "url": "https://www.youtube.com/watch?v=WEzFNy-MD3Q",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WEzFNy-MD3Q"
    },
    {
      "title": "꿀꿀 돼지의 꼬리 찾기 · 종이접기",
      "url": "https://www.youtube.com/watch?v=ZBAtZgSw5gM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=ZBAtZgSw5gM"
    },
    {
      "title": "꼬리 찾기",
      "url": "https://www.youtube.com/watch?v=U_DXjawVb4U",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=U_DXjawVb4U"
    },
    {
      "title": "곰 세 마리",
      "url": "https://www.youtube.com/watch?v=L6_y2KvGNts",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L6_y2KvGNts"
    },
    {
      "title": "동물의 왕 사자",
      "url": "https://www.youtube.com/watch?v=M2cgndHuG04",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=M2cgndHuG04"
    },
    {
      "title": "동물의 왕 사자 · 핑크퐁 체조 교실",
      "url": "https://www.youtube.com/watch?v=4TSwX7J3zko",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=4TSwX7J3zko"
    }
  ],
  "자동차·기차·탈것 알아보기": [
    {
      "title": "요이요이 경찰차 체조",
      "url": "https://www.youtube.com/watch?v=VfCCDfQKYyg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=VfCCDfQKYyg"
    },
    {
      "title": "경찰차 · 요이요이 경찰차 출동",
      "url": "https://www.youtube.com/watch?v=pOiX3U0Vp-s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=pOiX3U0Vp-s"
    },
    {
      "title": "소방차 인기 동요·게임·동화 모음",
      "url": "https://www.youtube.com/watch?v=VtOTs3rBYxU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=VtOTs3rBYxU"
    },
    {
      "title": "슈퍼 구조대 · 그림자 극장",
      "url": "https://www.youtube.com/watch?v=hIkrMfLR_ys",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=hIkrMfLR_ys"
    },
    {
      "title": "트럭 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=SaEYSBF5axM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=SaEYSBF5axM"
    },
    {
      "title": "운전송 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=WZfyoqLdZXA",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WZfyoqLdZXA"
    },
    {
      "title": "불도저 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=RxafXAKeJVg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=RxafXAKeJVg"
    },
    {
      "title": "소방차 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=JnxwbY07jmY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=JnxwbY07jmY"
    },
    {
      "title": "기차 | 핑크퐁 자동차 동요",
      "url": "https://www.youtube.com/watch?v=ya_B_G4QKAY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=ya_B_G4QKAY"
    }
  ],
  "음악·리듬·율동": [
    {
      "title": "펭귄 댄스",
      "url": "https://www.youtube.com/watch?v=L1nHZNMN9gU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L1nHZNMN9gU"
    },
    {
      "title": "랄랄라 동물요가",
      "url": "https://www.youtube.com/watch?v=Bb23vL6nOPE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Bb23vL6nOPE"
    },
    {
      "title": "핑크퐁 율동 체조 교실 11곡 모음",
      "url": "https://www.youtube.com/watch?v=2SS2flwrLag",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=2SS2flwrLag"
    },
    {
      "title": "티라노사우루스 율동 동요",
      "url": "https://www.youtube.com/watch?v=WGddHP9wTgs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WGddHP9wTgs"
    },
    {
      "title": "요이요이 경찰차 체조",
      "url": "https://www.youtube.com/watch?v=VfCCDfQKYyg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=VfCCDfQKYyg"
    },
    {
      "title": "곰 세 마리",
      "url": "https://www.youtube.com/watch?v=L6_y2KvGNts",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L6_y2KvGNts"
    },
    {
      "title": "머리 어깨 무릎 발 · 한글 단어 놀이",
      "url": "https://www.youtube.com/watch?v=i_xeXXEd5R4",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=i_xeXXEd5R4"
    },
    {
      "title": "머리 어깨 무릎 발! · 호기와 노래해요",
      "url": "https://www.youtube.com/watch?v=5fP1lCU_mwY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=5fP1lCU_mwY"
    },
    {
      "title": "동물의 왕 사자 · 핑크퐁 체조 교실",
      "url": "https://www.youtube.com/watch?v=4TSwX7J3zko",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=4TSwX7J3zko"
    },
    {
      "title": "주먹 쥐고 · 율동동요",
      "url": "https://www.youtube.com/watch?v=WIkZRmn2e5s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WIkZRmn2e5s"
    },
    {
      "title": "하쿠나 마타타 율동 | 핑크퐁 체조 교실",
      "url": "https://www.youtube.com/watch?v=wwIkwVQPxLg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=wwIkwVQPxLg"
    },
    {
      "title": "태권 파워 체조",
      "url": "https://www.youtube.com/watch?v=y291Inw4U6Q",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    },
    {
      "title": "붐칙붐칙 댄싱 로봇",
      "url": "https://www.youtube.com/watch?v=XpOZAybC3EY",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    },
    {
      "title": "방글방글 얼굴체조",
      "url": "https://www.youtube.com/watch?v=izQXHjVavLo",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    },
    {
      "title": "바리밥밥 바디송",
      "url": "https://www.youtube.com/watch?v=w6bUAkHOzb4",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    }
  ],
  "소근육·대근육 놀이 따라하기": [
    {
      "title": "펭귄 댄스",
      "url": "https://www.youtube.com/watch?v=L1nHZNMN9gU",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=L1nHZNMN9gU"
    },
    {
      "title": "랄랄라 동물요가",
      "url": "https://www.youtube.com/watch?v=Bb23vL6nOPE",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=Bb23vL6nOPE"
    },
    {
      "title": "핑크퐁 율동 체조 교실 11곡 모음",
      "url": "https://www.youtube.com/watch?v=2SS2flwrLag",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=2SS2flwrLag"
    },
    {
      "title": "티라노사우루스 율동 동요",
      "url": "https://www.youtube.com/watch?v=WGddHP9wTgs",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WGddHP9wTgs"
    },
    {
      "title": "요이요이 경찰차 체조",
      "url": "https://www.youtube.com/watch?v=VfCCDfQKYyg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=VfCCDfQKYyg"
    },
    {
      "title": "꿀꿀 돼지의 꼬리 찾기 · 종이접기",
      "url": "https://www.youtube.com/watch?v=ZBAtZgSw5gM",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=ZBAtZgSw5gM"
    },
    {
      "title": "머리 어깨 무릎 발 · 한글 단어 놀이",
      "url": "https://www.youtube.com/watch?v=i_xeXXEd5R4",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=i_xeXXEd5R4"
    },
    {
      "title": "머리 어깨 무릎 발! · 호기와 노래해요",
      "url": "https://www.youtube.com/watch?v=5fP1lCU_mwY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=5fP1lCU_mwY"
    },
    {
      "title": "동물의 왕 사자 · 핑크퐁 체조 교실",
      "url": "https://www.youtube.com/watch?v=4TSwX7J3zko",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=4TSwX7J3zko"
    },
    {
      "title": "주먹 쥐고 · 율동동요",
      "url": "https://www.youtube.com/watch?v=WIkZRmn2e5s",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=WIkZRmn2e5s"
    },
    {
      "title": "따라 그리면서 배워요 | 공룡, 모양, 숫자",
      "url": "https://www.youtube.com/watch?v=lo6AHBdLuPY",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=lo6AHBdLuPY"
    },
    {
      "title": "하쿠나 마타타 율동 | 핑크퐁 체조 교실",
      "url": "https://www.youtube.com/watch?v=wwIkwVQPxLg",
      "language": "ko",
      "source": "https://www.youtube.com/watch?v=wwIkwVQPxLg"
    },
    {
      "title": "태권 파워 체조",
      "url": "https://www.youtube.com/watch?v=y291Inw4U6Q",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    },
    {
      "title": "붐칙붐칙 댄싱 로봇",
      "url": "https://www.youtube.com/watch?v=XpOZAybC3EY",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    },
    {
      "title": "방글방글 얼굴체조",
      "url": "https://www.youtube.com/watch?v=izQXHjVavLo",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    },
    {
      "title": "바리밥밥 바디송",
      "url": "https://www.youtube.com/watch?v=w6bUAkHOzb4",
      "language": "ko",
      "source": "https://g-iedu.jge.go.kr/home/board/91?act=read&page=21&write_id=6736"
    }
  ],
  "생활 속 안전": [
    {
      "title": "키키묘묘와 같이 버스예절을 지켜요 | 차례 차례 줄서요",
      "url": "https://www.youtube.com/watch?v=mRQlysrPpGk",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=835"
    },
    {
      "title": "장난전화 송",
      "url": "https://www.youtube.com/watch?v=yPY9_6nolu8",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=836"
    },
    {
      "title": "불장난 송",
      "url": "https://www.youtube.com/watch?v=3Dz98b7y768",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=836"
    },
    {
      "title": "화재 시 행동요령 송",
      "url": "https://www.youtube.com/watch?v=giOh4nnPGCg",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=836"
    },
    {
      "title": "지진대피 송",
      "url": "https://www.youtube.com/watch?v=agYdSC86bq4",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=836"
    },
    {
      "title": "고마워요 소방관 송",
      "url": "https://www.youtube.com/watch?v=2ogjz21Fiho",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=836"
    },
    {
      "title": "화재신고 송",
      "url": "https://www.youtube.com/watch?v=-0OH2K1u9lE",
      "language": "ko",
      "source": "https://www.dolearn.ai/sub/lecture/lecture_detail?idx=836"
    }
  ]
};
