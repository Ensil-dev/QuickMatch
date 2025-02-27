'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import SpeedIcon from '@mui/icons-material/Speed';

export default function Home() {
  return (
    <>
      {/* 히어로 섹션 */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography component="h1" variant="h2" fontWeight="bold" gutterBottom>
                필요한 인력을 빠르게 매칭해 드립니다
              </Typography>
              <Typography variant="h5" paragraph>
                QuickMatch는 구인구직자를 실시간으로 연결해주는 혁신적인 플랫폼입니다.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <Button variant="contained" size="large" color="secondary" href="/jobs">
                  일자리 찾기
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                  href="/workers"
                >
                  인력 구하기
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  p: 3,
                  boxShadow: 3,
                }}
              >
                <Typography variant="h6" gutterBottom color="text.primary">
                  빠른 검색
                </Typography>
                <Stack direction="row" spacing={1}>
                  <TextField
                    fullWidth
                    placeholder="지역, 업종, 키워드"
                    variant="outlined"
                    size="small"
                  />
                  <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
                    검색
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 특징 섹션 */}
      <Container sx={{ py: 8 }}>
        <Typography component="h2" variant="h3" align="center" gutterBottom fontWeight="bold">
          QuickMatch의 특징
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          빠르고 정확한 매칭으로 시간과 비용을 절약하세요
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <SpeedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  실시간 매칭
                </Typography>
                <Typography>
                  데이터 기반 알고리즘으로 적합한 인력을 실시간으로 매칭합니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <WorkIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  다양한 일자리
                </Typography>
                <Typography>
                  단기 아르바이트부터 전문 계약직까지 다양한 일자리를 제공합니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <PersonIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  검증된 인력
                </Typography>
                <Typography>
                  검증된 인력 풀을 통해 믿을 수 있는 인력을 빠르게 구할 수 있습니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
