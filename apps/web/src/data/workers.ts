export interface Worker {
  id: string;
  name: string;
  profileImage: string;
  age: number;
  gender: '남성' | '여성';
  location: string;
  preferredJobs: string[];
  experiences: string[];
  availableDays: string[];
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  intro: string;
  skills: string[];
  education?: string;
  languages?: string[];
  certifications?: string[];
  contactAvailable: boolean;
}

export const workers: Worker[] = [
  {
    id: '1',
    name: '김민준',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    age: 24,
    gender: '남성',
    location: '서울 강남구',
    preferredJobs: ['카페/음료', '편의점', '물류/창고'],
    experiences: ['스타벅스 바리스타 1년', 'GS25 편의점 6개월'],
    availableDays: ['월', '화', '수', '목', '금'],
    hourlyRate: 12000,
    rating: 4.8,
    reviewCount: 15,
    intro:
      '성실하고 책임감 있는 태도로 일하겠습니다. 카페와 편의점 경험이 있어 빠르게 적응할 수 있습니다.',
    skills: ['POS시스템', '재고관리', '고객응대'],
    education: '중앙대학교 경영학과 재학',
    contactAvailable: true,
  },
  {
    id: '2',
    name: '이지원',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    age: 28,
    gender: '여성',
    location: '서울 마포구',
    preferredJobs: ['사무/문서작성', '행사/전시', '교육/강사'],
    experiences: ['마케팅 어시스턴트 1년', '전시회 스태프 다수'],
    availableDays: ['화', '수', '목', '금', '토'],
    hourlyRate: 14000,
    rating: 4.9,
    reviewCount: 23,
    intro:
      '꼼꼼하고 성실한 성격으로 사무직과 행사 진행 업무에 강점이 있습니다. 문서 작성 및 정리 능력이 뛰어납니다.',
    skills: ['MS Office', '문서작성', '행사진행', '데이터정리'],
    education: '홍익대학교 영어영문학과 졸업',
    languages: ['한국어(원어민)', '영어(비즈니스 레벨)', '중국어(기초)'],
    contactAvailable: true,
  },
  {
    id: '3',
    name: '박준호',
    profileImage: 'https://randomuser.me/api/portraits/men/55.jpg',
    age: 32,
    gender: '남성',
    location: '서울 송파구',
    preferredJobs: ['배달/운전', '물류/창고', '건설/공사'],
    experiences: ['배달 라이더 2년', '택배 상하차 1년', '건설현장 보조 6개월'],
    availableDays: ['월', '화', '목', '금', '토', '일'],
    hourlyRate: 15000,
    rating: 4.7,
    reviewCount: 31,
    intro:
      '체력이 좋고 성실하게 일합니다. 오토바이 면허 보유, 차량 보유로 배달 및 운전 업무 가능합니다.',
    skills: ['운전', '중량물 운반', '현장실무'],
    certifications: ['2종 보통 운전면허', '오토바이 면허'],
    contactAvailable: true,
  },
  {
    id: '4',
    name: '최서연',
    profileImage: 'https://randomuser.me/api/portraits/women/22.jpg',
    age: 21,
    gender: '여성',
    location: '서울 서대문구',
    preferredJobs: ['카페/음료', '식당/서빙', '판매/매장관리'],
    experiences: ['카페 아르바이트 8개월', '의류매장 판매직 3개월'],
    availableDays: ['월', '수', '금', '토', '일'],
    hourlyRate: 11000,
    rating: 4.5,
    reviewCount: 8,
    intro:
      '밝고 활발한 성격으로 서비스업에 적합합니다. 고객 응대에 자신 있으며, 책임감 있게 일합니다.',
    skills: ['고객응대', '음료제조', '판매관리'],
    education: '동국대학교 호텔경영학과 재학',
    contactAvailable: true,
  },
  {
    id: '5',
    name: '정현우',
    profileImage: 'https://randomuser.me/api/portraits/men/78.jpg',
    age: 35,
    gender: '남성',
    location: '서울 광진구',
    preferredJobs: ['IT/개발', '디자인', '사무/문서작성'],
    experiences: ['웹 개발자 5년', '프리랜서 디자이너 3년'],
    availableDays: ['월', '화', '수', '목', '금'],
    hourlyRate: 25000,
    rating: 5.0,
    reviewCount: 42,
    intro:
      'IT 개발과 디자인 경력을 바탕으로 전문적인 서비스를 제공합니다. 단기 프로젝트 또는 부분 업무도 가능합니다.',
    skills: ['웹개발', '그래픽디자인', 'UI/UX', 'JavaScript', 'Adobe Suite'],
    education: '서울대학교 컴퓨터공학과 졸업',
    certifications: ['정보처리기사', 'OCJP'],
    languages: ['한국어(원어민)', '영어(비즈니스 레벨)'],
    contactAvailable: true,
  },
  {
    id: '6',
    name: '김유진',
    profileImage: 'https://randomuser.me/api/portraits/women/35.jpg',
    age: 26,
    gender: '여성',
    location: '서울 영등포구',
    preferredJobs: ['교육/강사', '번역/통역', '행사/전시'],
    experiences: ['영어 과외 2년', '통역 봉사 1년', '행사 스태프 다수'],
    availableDays: ['화', '수', '목', '금', '토'],
    hourlyRate: 18000,
    rating: 4.9,
    reviewCount: 19,
    intro:
      '영어 교육과 통역에 전문성이 있습니다. 아이들을 가르치는 것을 좋아하며, 행사 진행 경험도 풍부합니다.',
    skills: ['영어교육', '통역', '행사진행', '문서작성'],
    education: '연세대학교 영어교육과 졸업',
    languages: ['한국어(원어민)', '영어(원어민 수준)', '스페인어(중급)'],
    certifications: ['TESOL', 'TOEIC 990점'],
    contactAvailable: true,
  },
];
