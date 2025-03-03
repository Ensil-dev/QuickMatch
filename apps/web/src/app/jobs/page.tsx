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
  Select,
  FormControl,
  InputLabel,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { jobs, Job } from '@/data/jobs';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setCategoryFilter(e.target.value);
  };

  const openJobDetails = (job: Job) => {
    setSelectedJob(job);
    setDialogOpen(true);
  };

  const closeJobDetails = () => {
    setDialogOpen(false);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === '' || job.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(jobs.map((job) => job.category)));

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        알바 찾기
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        다양한 단기 일자리를 검색하고 지원하세요
      </Typography>

      {/* 검색 및 필터 */}
      <Box sx={{ mb: 4, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="키워드, 위치, 기업명 검색"
              value={searchTerm}
              onChange={handleSearchChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>카테고리</InputLabel>
              <Select value={categoryFilter} onChange={handleCategoryChange} label="카테고리">
                <MenuItem value="">전체</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* 일자리 목록 */}
      <Grid container spacing={3}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Grid item xs={12} md={6} lg={4} key={job.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 1 }}>
                    <Chip label={job.category} size="small" color="primary" sx={{ mr: 1 }} />
                    <Typography variant="caption" color="text.secondary">
                      마감일: {job.deadline}
                    </Typography>
                  </Box>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {job.company}
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                    <LocationOnIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {job.location}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                    <MonetizationOnIcon
                      fontSize="small"
                      sx={{ mr: 0.5, color: 'text.secondary' }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {job.salary}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {job.workingHours}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => openJobDetails(job)}>
                    상세보기
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

      {/* 일자리 상세 다이얼로그 */}
      <Dialog open={dialogOpen} onClose={closeJobDetails} maxWidth="sm" fullWidth>
        {selectedJob && (
          <>
            <DialogTitle>{selectedJob.title}</DialogTitle>
            <DialogContent>
              <Typography variant="subtitle1" gutterBottom>
                {selectedJob.company}
              </Typography>
              <Divider sx={{ my: 2 }} />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    <LocationOnIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2">
                      <strong>위치:</strong> {selectedJob.location}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    <WorkIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2">
                      <strong>분야:</strong> {selectedJob.category}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    <MonetizationOnIcon
                      fontSize="small"
                      sx={{ mr: 0.5, color: 'text.secondary' }}
                    />
                    <Typography variant="body2">
                      <strong>급여:</strong> {selectedJob.salary}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2">
                      <strong>근무시간:</strong> {selectedJob.workingHours}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
                <strong>상세 내용</strong>
              </Typography>
              <Typography variant="body2" paragraph>
                {selectedJob.description}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  등록일: {selectedJob.publishedAt} | 마감일: {selectedJob.deadline}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeJobDetails} color="inherit">
                닫기
              </Button>
              <Button variant="contained" color="primary">
                지원하기
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}
