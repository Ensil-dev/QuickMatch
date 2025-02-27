'use client';

import { Box, Container, Typography, Grid, Link } from '@mui/material';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              QuickMatch
            </Typography>
            <Typography variant="body2" color="text.secondary">
              실시간 단기 인력 매칭 서비스
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              서비스 안내
            </Typography>
            <Link href="/about" color="inherit" display="block">
              서비스 소개
            </Link>
            <Link href="/faq" color="inherit" display="block">
              자주 묻는 질문
            </Link>
            <Link href="/terms" color="inherit" display="block">
              이용약관
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              문의하기
            </Typography>
            <Typography variant="body2" color="text.secondary">
              이메일: contact@quickmatch.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              전화: 02-123-4567
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} QuickMatch. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
