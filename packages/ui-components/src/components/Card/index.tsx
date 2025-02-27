'use client';

import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps, CardContent } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(MuiCard)`
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export interface CardProps extends MuiCardProps {
  padding?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ padding = 'medium', children, ...props }) => {
  // padding 값에 따른 스타일링
  const paddingMap = {
    small: '8px',
    medium: '16px',
    large: '24px',
  };

  return (
    <StyledCard {...props}>
      <CardContent style={{ padding: paddingMap[padding] }}>{children}</CardContent>
    </StyledCard>
  );
};

// 용도별 카드 변형
export const ElevatedCard = styled(Card)`
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;
