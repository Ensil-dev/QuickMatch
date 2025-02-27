// 사용자 타입 정의
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'employer' | 'worker';
  }
  
  // 일자리 타입 정의
  export interface Job {
    id: string;
    title: string;
    description: string;
    location: string;
    hourlyRate: number;
    category: string;
    startDate: string;
    endDate: string;
    employerId: string;
  }
  
  // 필터 타입 정의
  export interface JobFilters {
    location?: string;
    category?: string;
    payRange?: [number, number];
    dateRange?: [Date, Date];
  }