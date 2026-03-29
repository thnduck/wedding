/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "서은덕",
    nameEn: "서은덕",
    father: "서동현",
    mother: "김혜숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "정세은",
    nameEn: "정세은",
    father: "정재복",
    mother: "김지영",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-04",
    time: "13:00",
    venue: "라비에벨웨딩홀",
    hall: "2층",
    address: "대전 서구 계백로 1108",
    tel: "0507-1479-6868",
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 5. 오시는 길 ──
    mapLinks: {
      kakao: "https://place.map.kakao.com/1121045343",
      naver: "https://map.naver.com/p/search/%EB%9D%BC%EB%B9%84%EC%97%90%EB%B2%A8%EC%9B%A8%EB%94%A9%ED%99%80%20%EB%8C%80%EC%A0%84/place/1192910552?c=15.00,0,0,0,dh&placePath=/home?bk_query=%EB%9D%BC%EB%B9%84%EC%97%90%EB%B2%A8%EC%9B%A8%EB%94%A9%ED%99%80%20%EB%8C%80%EC%A0%84&entry=pll&from=map&fromPanelNum=2&timestamp=202603292123&locale=ko&svcName=map_pcv5&searchText=%EB%9D%BC%EB%B9%84%EC%97%90%EB%B2%A8%EC%9B%A8%EB%94%A9%ED%99%80%20%EB%8C%80%EC%A0%84"
    },
  transport: {
    title: "교통 안내",
    sections: [
      {
        heading: "대중교통 이용",
        items: [
          "대전역: 201번, 202번 탑승 후 동방고등학교 하차 (건너편)",
          "대전역 / 역전시장: 급행1, 급행2002, 20번 탑승 후 가수원육교, 가수원시장 하차 (도보 600m)",
          "대전복합터미널: 201번 탑승 후 동방고등학교 하차 (건너편)",
          "유성고속터미널: 114번 탑승 후 동방고등학교 하차 (건너편)",
          "동방고등학교 경유 노선: 114번, 212번, 216번, 43번, 46번, 2002번, 47-1번"
        ]
      },
      {
        heading: "고속도로 이용",
        items: [
          "하행선: 서울 출발 > 경부고속도로 > 유성분기점 > 호남고속도로 > 서대전분기점 > 남부순환고속도로 서대전IC > 라비에벨웨딩홀",
          "상행선: 부산 출발 > 경부고속도로 > 비룡분기점 > 산내분기점 > 남부순환고속도로 > 서대전IC > 라비에벨웨딩홀"
        ]
      }
    ]
  },
  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍길동", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김영희", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "서은덕 ♥ 정세은 결혼합니다",
    description: "2026년 7월 4일, 소중한 분들을 초대합니다."
  }
};
