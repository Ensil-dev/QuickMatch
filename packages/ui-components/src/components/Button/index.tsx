'use client';

import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import styled from 'styled-components';

// MUI 버튼을 styled-components로 확장
const StyledButton = styled(MuiButton)`
  &.MuiButton-contained {
    &.MuiButton-containedPrimary {
      /* 필요한 경우 여기에 추가 스타일링 */
    }
  }

  /* 반응형 스타일링 예시 */
  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 6px 16px;
  }
`;

export interface ButtonProps extends MuiButtonProps {
  // 추가 프롭이 필요한 경우 여기에 정의
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

// 기본 버튼 외에 용도별 변형 버튼도 추가할 수 있습니다
export const PrimaryButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})``;

export const SecondaryButton = styled(Button).attrs({
  variant: 'outlined',
  color: 'primary',
})``;

export const TextButton = styled(Button).attrs({
  variant: 'text',
  color: 'primary',
})``;
