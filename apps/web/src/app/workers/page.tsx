'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Avatar,
  Rating,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  InputAdornment,
  Stack,
} from '@mui/material';
import { workers, Worker } from '@/data/workers';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

export default function WorkersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobFilter, setJobFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleJobChange = (e: any) => {
    setJobFilter(e.target.value);
  };

  const handleLocationChange = (e: any) => {
    setLocationFilter(e.target.value);
  };

  const openWorkerDetails = (worker: Worker) => {
    setSelectedWorker(worker);
    setDialogOpen(true);
  };

  const closeWorkerDetails = () => {
    setDialogOpen(false);
  };

  const handleHireRequest = () => {
    // 실제 구현에서는 API 호출 필요
    alert('인력 요청이 전송되었습니다.');
    setDialogOpen(false);
  };

  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch = 
      worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      worker.intro.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesJob = jobFilter === '' || worker.preferredJobs.includes(jobFilter);
    
    const matchesLocation = locationFilter === '' || worker.location.includes(locationFilter);
    
    return matchesSearch && matchesJob && matchesLocation;
  });

  const allJobs = Array.from(new Set(workers.flatMap(worker => worker.preferredJobs)));
  const allLocations = Array.from(new Set(workers.map(worker => worker.location.split(' ')[0])));

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          인력 구하기
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          프로젝트에 적합한 인재를 찾아 빠르게 매칭해 드립니다
        </Typography>
      </Box>

      {/* 검색 및 필터 */}
      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="이름, 기술, 소개글로 검색"
              value={searchTerm}
              onChange={handleSearchChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>선호 직종</InputLabel>
              <Select
                value={jobFilter}
                onChange={handleJobChange}
                label="선호 직종"
              >
                <MenuItem value="">전체</MenuItem>
                {allJobs.map((job) => (
                  <MenuItem key={job} value={job}>
                    {job}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>지역</InputLabel>
              <Select
                value={locationFilter}
                onChange={handleLocationChange}
                label="지역"
              >
                <MenuItem value="">전체</MenuItem>
                {allLocations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* 인력 목록 */}
      <Grid container spacing={3}>
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <Grid item xs={12} md={6} lg={4} key={worker.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar
                      src={worker.profileImage}
                      alt={worker.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {worker.name}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <Rating value={worker.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({worker.reviewCount})
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center" mb={1}>
                    <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2">
                      {worker.location}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={1}>
                    <WorkIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" noWrap>
                      {worker.preferredJobs.join(', ')}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={1}>
                    <AttachMoneyIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2">
                      시급 {worker.hourlyRate.toLocaleString()}원
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" mb={2} sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: '40px'
                  }}>
                    {worker.intro}
                  </Typography>

                  <Box sx={{ mt: 1 }}>
                    {worker.skills.slice(0, 3).map((skill) => (
                      <Chip 
                        key={skill} 
                        label={skill} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                        sx={{ mr: 0.5, mb: 0.5 }} 
                      />
                    ))}
                    {worker.skills.length > 3 && (
                      <Chip 
                        label={`+${worker.skills.length - 3}`} 
                        size="small" 
                        color="default" 
                        variant="outlined"
                        sx={{ mb: 0.5 }} 
                      />
                    )}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => openWorkerDetails(worker)}
                  >
                    상세 정보 보기
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                검색 결과가 없습니다
              </Typography>
              <Typography variant="body2" color="text.secondary">
                다른 키워드나 필터 조건으로 검색해 보세요
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      {/* 인력 상세 다이얼로그 */}
      <Dialog open={dialogOpen} onClose={closeWorkerDetails} maxWidth="md" fullWidth>
        {selectedWorker && (
          <>
            <DialogTitle>
              <Box display="flex" alignItems="center">
                <Avatar
                  src={selectedWorker.profileImage}
                  alt={selectedWorker.name}
                  sx={{ width: 64, height: 64, mr: 2 }}
                />
                <Box>
                  <Typography variant="h5">{selectedWorker.name}</Typography>
                  <Box display="flex" alignItems="center">
                    <Rating value={selectedWorker.rating} precision={0.1} readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({selectedWorker.reviewCount}개 리뷰)
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    소개
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedWorker.intro}
                  </Typography>

                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    경력
                  </Typography>
                  <List dense>
                    {selectedWorker.experiences.map((exp, index) => (
                      <ListItem key={index}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <WorkIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={exp} />
                      </ListItem>
                    ))}
                  </List>

                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    보유 기술
                  </Typography>
                  <Box mb={2}>
                    {selectedWorker.skills.map((skill) => (
                      <Chip 
                        key={skill} 
                        label={skill} 
                        color="primary" 
                        variant="outlined"
                        sx={{ mr: 0.5, mb: 0.5 }} 
                      />
                    ))}
                  </Box>

                  {selectedWorker.certifications && (
                    <>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        자격증
                      </Typography>
                      <List dense>
                        {selectedWorker.certifications.map((cert, index) => (
                          <ListItem key={index}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <VerifiedIcon fontSize="small" color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={cert} />
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper elevation={0} variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      기본 정보
                    </Typography>
                    
                    <Box display="flex" alignItems="center" mb={1.5}>
                      <PersonIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">
                        {selectedWorker.age}세 · {selectedWorker.gender}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" mb={1.5}>
                      <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">
                        {selectedWorker.location}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" mb={1.5}>
                      <AttachMoneyIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">
                        시급 {selectedWorker.hourlyRate.toLocaleString()}원
                      </Typography>
                    </Box>

                    {selectedWorker.education && (
                      <Box display="flex" alignItems="center" mb={1.5}>
                        <SchoolIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2">
                          {selectedWorker.education}
                        </Typography>
                      </Box>
                    )}

                    {selectedWorker.languages && (
                      <Box display="flex" alignItems="center" mb={1.5}>
                        <LanguageIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2">
                          {selectedWorker.languages.join(', ')}
                        </Typography>
                      </Box>
                    )}
                  </Paper>

                  <Paper elevation={0} variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      선호 직종
                    </Typography>
                    {selectedWorker.preferredJobs.map((job) => (
                      <Chip 
                        key={job} 
                        label={job} 
                        color="primary" 
                        size="small"
                        sx={{ mr: 0.5, mb: 0.5 }} 
                      />
                    ))}
                  </Paper>
                  
                  <Paper elevation={0} variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      근무 가능 요일
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                        <Chip 
                          key={day} 
                          label={day} 
                          color={selectedWorker.availableDays.includes(day) ? "primary" : "default"}
                          variant={selectedWorker.availableDays.includes(day) ? "filled" : "outlined"}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeWorkerDetails} color="inherit">
                닫기
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={handleHireRequest}
                disabled={!selectedWorker.contactAvailable}
              >
                인력 요청하기
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}
