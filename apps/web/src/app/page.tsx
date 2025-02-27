'use client'; // MUI 컴포넌트를 사용하므로 필요합니다

import { Box, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1">
          QuickMatch
        </Typography>
        <Typography variant="h5" component="h2">
          실시간 단기 인력 매칭 서비스
        </Typography>
      </Box>
    </Container>
  );
}
