'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  InputAdornment,
  IconButton,
  FormHelperText,
  Alert,
  Stack,
  Divider,
  Avatar,
  useMediaQuery,
  useTheme,
  Grid,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  Lock as LockIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  LocationOn as LocationOnIcon,
  Check as CheckIcon,
  Google as GoogleIcon,
  Apple as AppleIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material';
import NextLink from 'next/link';

// 회원가입 단계 정의
const steps = ['기본 정보', '회원 유형 선택', '추가 정보', '완료'];

export default function SignupPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    userType: 'worker' | 'employer';
    companyName: string;
    companySize: string;
    businessType: string;
    jobCategories: string[];
    location: string;
    availableDays: string[];
    preferredJobTypes: string[];
    termsAgreed: boolean;
    privacyAgreed: boolean;
    marketingAgreed: boolean;
  }>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    userType: 'worker',
    companyName: '',
    companySize: '',
    businessType: '',
    jobCategories: [], // 이제 string[] 타입으로 인식됨
    location: '',
    availableDays: [],
    preferredJobTypes: [],
    termsAgreed: false,
    privacyAgreed: false,
    marketingAgreed: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const jobCategories = [
    '사무/문서작성',
    'IT/개발',
    '디자인',
    '마케팅/홍보',
    '영업/판매',
    '교육/강사',
    '번역/통역',
    '서비스',
    '물류/운송',
    '건설/생산',
    '요식업',
    '기타',
  ];

  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep === steps.length - 1) {
        handleSubmit();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'jobCategories' || name === 'availableDays' || name === 'preferredJobTypes') {
        setFormData((prev) => {
          const currentArray = [...(prev[name] as any[])];
          if (checked) {
            return { ...prev, [name]: [...currentArray, value] };
          } else {
            return { ...prev, [name]: currentArray.filter((item) => item !== value) };
          }
        });
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // 입력 값이 변경되면 해당 필드의 오류 메시지를 제거합니다
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // 기본 정보
        if (!formData.email) {
          newErrors.email = '이메일을 입력해주세요';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = '유효한 이메일 주소를 입력해주세요';
        }

        if (!formData.password) {
          newErrors.password = '비밀번호를 입력해주세요';
        } else if (formData.password.length < 8) {
          newErrors.password = '비밀번호는 8자 이상이어야 합니다';
        }

        if (!formData.confirmPassword) {
          newErrors.confirmPassword = '비밀번호 확인을 입력해주세요';
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
        }

        if (!formData.name) {
          newErrors.name = '이름을 입력해주세요';
        }
        break;

      case 1: // 회원 유형 선택
        if (!formData.userType) {
          newErrors.userType = '회원 유형을 선택해주세요';
        }
        break;

      case 2: // 추가 정보
        if (formData.userType === 'employer') {
          if (!formData.companyName) {
            newErrors.companyName = '회사명을 입력해주세요';
          }
          if (!formData.businessType) {
            newErrors.businessType = '업종을 입력해주세요';
          }
        } else {
          if (formData.jobCategories.length === 0) {
            newErrors.jobCategories = '관심 분야를 하나 이상 선택해주세요';
          }
        }

        if (!formData.location) {
          newErrors.location = '활동 지역을 입력해주세요';
        }
        break;

      case 3: // 완료
        if (!formData.termsAgreed) {
          newErrors.termsAgreed = '이용약관에 동의해주세요';
        }
        if (!formData.privacyAgreed) {
          newErrors.privacyAgreed = '개인정보 처리방침에 동의해주세요';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    // 실제 구현에서는 API 호출로 대체됩니다
    console.log('회원가입 정보:', formData);
    // 회원가입 성공 처리
    setRegistrationSuccess(true);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              기본 정보를 입력해주세요
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="이메일"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="비밀번호"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!errors.password}
                  helperText={
                    errors.password || '8자 이상의 영문, 숫자, 특수문자 조합을 사용하세요'
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="비밀번호 확인"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="이름"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              회원 유형을 선택해주세요
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      border:
                        formData.userType === 'worker'
                          ? `2px solid ${theme.palette.primary.main}`
                          : '1px solid rgba(0, 0, 0, 0.12)',
                      boxShadow: formData.userType === 'worker' ? 3 : 1,
                    }}
                    onClick={() => setFormData({ ...formData, userType: 'worker' })}
                  >
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      <PersonIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                      <Typography variant="h6" gutterBottom>
                        구직자
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        일자리를 찾고 계신가요? 여러분의 기술과 경험에 맞는 일자리를 빠르게 연결해
                        드립니다.
                      </Typography>
                      {formData.userType === 'worker' && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <CheckIcon sx={{ color: 'white', fontSize: 16 }} />
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      border:
                        formData.userType === 'employer'
                          ? `2px solid ${theme.palette.primary.main}`
                          : '1px solid rgba(0, 0, 0, 0.12)',
                      boxShadow: formData.userType === 'employer' ? 3 : 1,
                    }}
                    onClick={() => setFormData({ ...formData, userType: 'employer' })}
                  >
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      <BusinessIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                      <Typography variant="h6" gutterBottom>
                        구인자
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        인재를 찾고 계신가요? 빠르고 효율적으로 적합한 인재를 매칭해 드립니다.
                      </Typography>
                      {formData.userType === 'employer' && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <CheckIcon sx={{ color: 'white', fontSize: 16 }} />
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              {errors.userType && <FormHelperText error>{errors.userType}</FormHelperText>}
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              추가 정보를 입력해주세요
            </Typography>
            <Grid container spacing={2}>
              {formData.userType === 'employer' ? (
                // 구인자 추가 정보
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="회사명"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      error={!!errors.companyName}
                      helperText={errors.companyName}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BusinessIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="업종"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      error={!!errors.businessType}
                      helperText={errors.businessType}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <WorkIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">회사 규모</FormLabel>
                      <RadioGroup
                        row
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel value="소기업" control={<Radio />} label="소기업" />
                        <FormControlLabel value="중기업" control={<Radio />} label="중기업" />
                        <FormControlLabel value="대기업" control={<Radio />} label="대기업" />
                        <FormControlLabel value="스타트업" control={<Radio />} label="스타트업" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </>
              ) : (
                // 구직자 추가 정보
                <>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" error={!!errors.jobCategories} fullWidth>
                      <FormLabel component="legend">관심 직종 (복수 선택 가능)</FormLabel>
                      <Grid container>
                        {jobCategories.map((category) => (
                          <Grid item xs={6} sm={4} key={category}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="jobCategories"
                                  value={category}
                                  checked={formData.jobCategories.includes(category)}
                                  onChange={handleInputChange}
                                />
                              }
                              label={category}
                            />
                          </Grid>
                        ))}
                      </Grid>
                      {errors.jobCategories && (
                        <FormHelperText>{errors.jobCategories}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">선호하는 근무 형태</FormLabel>
                      <Grid container>
                        {['정규직', '계약직', '아르바이트', '프리랜서', '재택근무'].map((type) => (
                          <Grid item xs={6} sm={4} key={type}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="preferredJobTypes"
                                  value={type}
                                  checked={formData.preferredJobTypes.includes(type)}
                                  onChange={handleInputChange}
                                />
                              }
                              label={type}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FormControl>
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="활동 지역"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  error={!!errors.location}
                  helperText={errors.location}
                  placeholder="예: 서울시 강남구"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              약관 동의
            </Typography>
            <Box sx={{ mt: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleInputChange}
                    color="primary"
                  />
                }
                label="이용약관에 동의합니다 (필수)"
              />
              {errors.termsAgreed && <FormHelperText error>{errors.termsAgreed}</FormHelperText>}
              <Link
                href="/terms"
                component={NextLink}
                sx={{ ml: 3, display: 'inline-block', mb: 1 }}
              >
                이용약관 보기
              </Link>

              <FormControlLabel
                control={
                  <Checkbox
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleInputChange}
                    color="primary"
                  />
                }
                label="개인정보 처리방침에 동의합니다 (필수)"
              />
              {errors.privacyAgreed && (
                <FormHelperText error>{errors.privacyAgreed}</FormHelperText>
              )}
              <Link
                href="/privacy"
                component={NextLink}
                sx={{ ml: 3, display: 'inline-block', mb: 1 }}
              >
                개인정보 처리방침 보기
              </Link>

              <FormControlLabel
                control={
                  <Checkbox
                    name="marketingAgreed"
                    checked={formData.marketingAgreed}
                    onChange={handleInputChange}
                    color="primary"
                  />
                }
                label="마케팅 정보 수신에 동의합니다 (선택)"
              />
            </Box>

            <Alert severity="info" sx={{ mt: 3 }}>
              모든 정보를 확인하시고 회원가입 버튼을 클릭하세요.
            </Alert>
          </Box>
        );
      default:
        return '알 수 없는 단계';
    }
  };

  if (registrationSuccess) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Avatar sx={{ m: 'auto', bgcolor: 'success.main', width: 60, height: 60, mb: 2 }}>
            <CheckIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            회원가입이 완료되었습니다!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            QuickMatch에 오신 것을 환영합니다. 이제 로그인하여 서비스를 이용하실 수 있습니다.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={NextLink}
            href="/login"
            sx={{ mt: 2 }}
          >
            로그인하기
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            QuickMatch 회원가입
          </Typography>
          <Typography variant="body1" color="text.secondary">
            계정을 만들고 일자리와 인력을 빠르게 매칭해 보세요
          </Typography>
        </Box>

        <Stepper
          activeStep={activeStep}
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          sx={{ mb: 4 }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box>{getStepContent(activeStep)}</Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
            이전
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? '회원가입' : '다음'}
          </Button>
        </Box>

        {activeStep === 0 && (
          <>
            <Divider sx={{ my: 4 }}>
              <Typography variant="body2" color="text.secondary">
                또는
              </Typography>
            </Divider>

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{
                  py: 1.2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Google로 회원가입 (미구현)
                </Button>
              </Grid>
              {/* <Grid item xs={12} sm={4}>
                <Button fullWidth variant="outlined" startIcon={<FacebookIcon />} sx={{ py: 1.2 }}>
                  Facebook으로 회원가입
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button fullWidth variant="outlined" startIcon={<AppleIcon />} sx={{ py: 1.2 }}>
                  Apple로 회원가입
                </Button>
              </Grid> */}
            </Grid>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2">
                이미 계정이 있으신가요?{' '}
                <Link href="/login" component={NextLink} fontWeight="bold">
                  로그인하기
                </Link>
              </Typography>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}
