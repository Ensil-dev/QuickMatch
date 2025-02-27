'use client';

import { createTheme } from '@mui/material/styles';

// 니더 브랜드 색상에 맞게 조정
export const theme = createTheme({
  palette: {
    primary: {
      main: '#4361ee', // 기본 색상, 니더 브랜드 색상에 맞게 변경 가능
      light: '#6c8cff',
      dark: '#0039bb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3a0ca3', // 보조 색상
      light: '#6e38d5',
      dark: '#000074',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f72585',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Pretendard", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none', // 버튼 텍스트 대문자 변환 비활성화
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
      defaultProps: {
        disableElevation: true, // 기본적으로 버튼 그림자 효과 비활성화
      },
    },
    // 다른 컴포넌트 스타일 오버라이드도 여기에 추가
  },
});

export type Theme = typeof theme;
