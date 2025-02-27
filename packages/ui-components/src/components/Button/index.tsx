'use client';

import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import styled from 'styled-components';

// 타입 선언 개선
export interface ButtonProps extends MuiButtonProps {
  // 추가 프롭이 필요한 경우 여기에 정의
}

// 일반적인 함수형 컴포넌트로 변경
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <MuiButton ref={ref} {...props} />;
});
Button.displayName = 'Button';

// styled-components 대신 함수형 컴포넌트로 변경
export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button ref={ref} variant="contained" color="primary" {...props} />;
});
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button ref={ref} variant="outlined" color="primary" {...props} />;
});
SecondaryButton.displayName = 'SecondaryButton';

export const TextButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button ref={ref} variant="text" color="primary" {...props} />;
});
TextButton.displayName = 'TextButton';
