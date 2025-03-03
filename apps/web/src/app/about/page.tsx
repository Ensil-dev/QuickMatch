'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Stack,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingUpIcon,
  DataUsage as DataUsageIcon,
  PersonSearch as PersonSearchIcon,
  Assignment as AssignmentIcon,
  AccessTime as AccessTimeIcon,
  CreditCard as CreditCardIcon,
  EmojiPeople as EmojiPeopleIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Update as UpdateIcon,
} from '@mui/icons-material';

export default function AboutPage() {
  const theme = useTheme();

  const features = [
    {
      icon: <PersonSearchIcon fontSize="large" color="primary" />,
      title: '데이터 기반 매칭',
      description:
        '빅데이터와 AI 알고리즘을 활용하여 구인자와 구직자를 정확하게 매칭합니다. 단순한 공고 게시가 아닌, 적합한 인재를 자동으로 추천해 드립니다.',
    },
    {
      icon: <AccessTimeIcon fontSize="large" color="primary" />,
      title: '실시간 매칭 시스템',
      description:
        '긴급한 인력이 필요할 때 실시간으로 매칭해 드립니다. 평균 10분 이내에 적합한 인재를 연결해 드립니다.',
    },
    {
      icon: <SecurityIcon fontSize="large" color="primary" />,
      title: '검증된 인력 풀',
      description:
        '모든 구직자는 신원 확인과 경력 검증 과정을 거칩니다. 안심하고 인력을 고용할 수 있도록 신뢰성을 보장합니다.',
    },
    {
      icon: <CreditCardIcon fontSize="large" color="primary" />,
      title: '안전한 결제 시스템',
      description:
        '에스크로 방식의 안전 결제 시스템을 제공합니다. 업무 완료 후 만족스러운 결과물을 확인한 뒤 대금을 지불하세요.',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: '회원가입 및 프로필 작성',
      description:
        '간단한 회원가입 후, 구인자는 회사 정보를, 구직자는 이력 및 경력 정보를 등록합니다.',
      icon: <AssignmentIcon />,
    },
    {
      step: 2,
      title: '알바 찾기 또는 검색',
      description: '구인자는 필요한 일자리를 등록하고, 구직자는 적합한 일자리를 검색합니다.',
      icon: <PersonSearchIcon />,
    },
    {
      step: 3,
      title: '실시간 매칭',
      description: 'AI 알고리즘이 조건에 맞는 최적의 인력 또는 일자리를 추천해 드립니다.',
      icon: <DataUsageIcon />,
    },
    {
      step: 4,
      title: '업무 진행 및 결제',
      description:
        '업무 완료 후 서비스 평가를 통해 신뢰도를 쌓고, 안전한 결제 시스템으로 대금을 정산합니다.',
      icon: <CreditCardIcon />,
    },
  ];

  const teamMembers = [
    {
      name: '신현식',
      position: 'CEO / 공동 창업자',
      description: '데이터 분석 및 인력 매칭 알고리즘 전문가. 전 구글 데이터 사이언티스트.',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
      name: '김민지',
      position: 'COO / 공동 창업자',
      description: '인사 관리 및 채용 플랫폼 전문가. 다년간의 HR 매니저 경험 보유.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: '이준호',
      position: 'CTO',
      description: '플랫폼 개발 및 시스템 아키텍처 설계. 전 네이버 소프트웨어 엔지니어.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: '박소영',
      position: '마케팅 디렉터',
      description: '브랜드 전략 및 디지털 마케팅 전문가. 다양한 스타트업 성장 기여.',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
  ];

  return (
    <>
      {/* 히어로 섹션 */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography component="h1" variant="h3" fontWeight="bold" gutterBottom>
                서로에게 필요한 사람을
                <br />
                연결하는 플랫폼
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                QuickMatch는 데이터 기반의 실시간 구인구직 매칭 서비스입니다.
                <br />
                단기 아르바이트부터 전문 프리랜서까지, 모든 인력 문제를 해결합니다.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="/jobs"
                sx={{ mr: 2 }}
              >
                알바 찾기
              </Button>
              <Button variant="outlined" color="inherit" size="large" href="/workers">
                인력 구하기
              </Button>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
                alt="팀워크"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 미션과 비전 */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary">
              우리의 미션
            </Typography>
            <Typography variant="body1" paragraph>
              QuickMatch는 구인구직의 미스매치를 해소하고, 모든 사람이 더 쉽게 일자리와 인력을
              연결할 수 있는 세상을 만들고자 합니다. 기존의 채용 시장이 정규직 중심이었다면, 저희는
              다양한 형태의 일자리와 인력을 빠르고 정확하게 연결합니다.
            </Typography>
            <Typography variant="body1">
              특히 단기 아르바이트, 프리랜서, 긴급 인력 등 기존 채용 플랫폼에서 소외되었던 영역에
              집중합니다. 저희는 기술을 통해 채용 시장의 비효율성을 제거하고, 모든 사람이 자신의
              기술과 시간을 가치 있게 활용할 수 있도록 돕습니다.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary">
              우리의 비전
            </Typography>
            <Typography variant="body1" paragraph>
              QuickMatch는 일의 미래를 재정의합니다. 우리는 모든 사람이 자신의 기술과 재능을 최대한
              활용할 수 있는 유연하고 효율적인 노동 시장을 만들어 갑니다.
            </Typography>
            <Typography variant="body1" paragraph>
              궁극적으로 우리는 다음과 같은 세상을 지향합니다:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SpeedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="필요한 인력을 10분 이내에 매칭하는 세상" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUpIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="모든 사람이 자신의 기술과 시간에 적절한 보상을 받는 세상" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmojiPeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="일의 유연성이 보장되는 새로운 근로 문화의 세상" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* 주요 특징 */}
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
            QuickMatch의 특징
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            단순한 구인구직 플랫폼을 넘어, 데이터 기반의 정확한 매칭과 안전한 시스템을 제공합니다
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: '100%', boxShadow: 2 }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                    {feature.icon}
                    <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 이용 방법 */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
              이용 방법
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              QuickMatch는 간단한 4단계로 필요한 인력을 매칭해 드립니다
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {howItWorks.map((step, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    position: 'relative',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -15,
                      left: -15,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      boxShadow: 2,
                    }}
                  >
                    {step.step}
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                    <Box sx={{ mb: 2, color: 'primary.main' }}>{step.icon}</Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={5}>
            <Button variant="contained" color="primary" size="large" href="/signup">
              지금 시작하기
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 팀 소개 */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
          핵심 팀원 소개
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: 'auto', textAlign: 'center', mb: 6 }}
        >
          다양한 분야의 전문가들이 모여 QuickMatch를 만들어 갑니다
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', boxShadow: 'none', bgcolor: 'transparent' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mx: 'auto', mb: 2, boxShadow: 2 }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 성과 지표 */}
      <Box sx={{ bgcolor: theme.palette.primary.main, color: 'white', py: 6 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <Typography variant="h3" fontWeight="bold">
                  500K+
                </Typography>
                <Typography variant="subtitle1">등록된 구직자</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <Typography variant="h3" fontWeight="bold">
                  20K+
                </Typography>
                <Typography variant="subtitle1">파트너 기업</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <Typography variant="h3" fontWeight="bold">
                  98%
                </Typography>
                <Typography variant="subtitle1">매칭 만족도</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <Typography variant="h3" fontWeight="bold">
                  10분
                </Typography>
                <Typography variant="subtitle1">평균 매칭 시간</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA 섹션 */}
      <Container sx={{ py: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 3,
            bgcolor: 'grey.50',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                지금 바로 QuickMatch와 함께하세요
              </Typography>
              <Typography variant="body1" paragraph>
                빠르고 정확한 인력 매칭을 통해 인재 채용의 새로운 경험을 제공합니다. 지금 가입하고
                편리한 구인구직 서비스를 경험하세요.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" color="primary" size="large" href="/signup">
                  무료로 시작하기
                </Button>
                <Button variant="outlined" color="primary" size="large" href="/faq">
                  자주 묻는 질문
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}
            >
              <UpdateIcon sx={{ fontSize: 150, color: 'primary.light', opacity: 0.7 }} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
