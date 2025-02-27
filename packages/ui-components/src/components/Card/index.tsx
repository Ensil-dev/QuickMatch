'use client';

import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps, CardContent } from '@mui/material';
import styled from 'styled-components';

export interface CardProps extends MuiCardProps {
  padding?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

// 일반적인 함수형 컴포넌트로 변경
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ padding = 'medium', children, ...props }, ref) => {
    // padding 값에 따른 스타일링
    const paddingMap = {
      small: '8px',
      medium: '16px',
      large: '24px',
    };

    return (
      <MuiCard ref={ref} {...props}>
        <CardContent style={{ padding: paddingMap[padding] }}>{children}</CardContent>
      </MuiCard>
    );
  }
);
Card.displayName = 'Card';

// ElevatedCard도 함수형 컴포넌트로 변경
export const ElevatedCard = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    <Card
      ref={ref}
      {...props}
      sx={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        ...(props.sx || {}),
      }}
    />
  );
});
ElevatedCard.displayName = 'ElevatedCard';
