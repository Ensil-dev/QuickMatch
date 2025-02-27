export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary: string;
  workingHours: string;
  category: string;
  publishedAt: string;
  deadline: string;
}

export const jobs: Job[] = [
  {
    id: '1',
    title: '카페 주말 아르바이트',
    company: '스타벅스 강남점',
    location: '서울 강남구',
    description: '주말 오전 근무 가능한 바리스타를 모집합니다. 경험자 우대, 교육 제공.',
    salary: '시급 11,000원',
    workingHours: '토,일 08:00-13:00',
    category: '서비스',
    publishedAt: '2025-02-20',
    deadline: '2025-03-10',
  },
  {
    id: '2',
    title: '편의점 야간 근무자',
    company: 'CU 홍대입구역점',
    location: '서울 마포구',
    description: '야간 시간대 근무 가능한 직원을 구합니다. 야간 수당 별도 지급.',
    salary: '시급: 12,000원',
    workingHours: '22:00-08:00 (주 3일)',
    category: '유통/판매',
    publishedAt: '2025-02-22',
    deadline: '2025-03-15',
  },
  {
    id: '3',
    title: '주말 행사 스태프',
    company: '이벤트플래닝',
    location: '서울 송파구',
    description: '주말 전시회 및 행사 안내 스태프를 모집합니다. 단정한 복장, 친절한 응대 필수.',
    salary: '일급 120,000원',
    workingHours: '토,일 10:00-18:00',
    category: '이벤트',
    publishedAt: '2025-02-23',
    deadline: '2025-03-05',
  },
  {
    id: '4',
    title: '배달 라이더',
    company: '배달의민족',
    location: '서울 전지역',
    description: '자차 보유자에 한해 배달 라이더를 모집합니다. 시간 자유롭게 선택 가능.',
    salary: '건당 4,000원~',
    workingHours: '자유선택',
    category: '배달',
    publishedAt: '2025-02-24',
    deadline: '2025-03-20',
  },
  {
    id: '5',
    title: '웹디자인 단기 프로젝트',
    company: '디지털크리에이티브',
    location: '원격근무',
    description: '이벤트 페이지 디자인 프로젝트입니다. 약 1주일 소요 예상, 포트폴리오 제출 필수.',
    salary: '프로젝트 150만원',
    workingHours: '자율근무',
    category: 'IT/디자인',
    publishedAt: '2025-02-25',
    deadline: '2025-03-01',
  },
  {
    id: '6',
    title: '주방 보조 주말 알바',
    company: '해운대 소문난 맛집',
    location: '부산 해운대구',
    description:
      '주말 런치/디너 타임 주방 보조 아르바이트생을 구합니다. 설거지, 음식 플레이팅 등의 업무.',
    salary: '시급 12,000원',
    workingHours: '금,토,일 11:00-15:00, 17:00-21:00',
    category: '요식업',
    publishedAt: '2025-02-26',
    deadline: '2025-03-05',
  },
];
