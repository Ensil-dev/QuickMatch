'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // 👇 추가: 클라이언트 사이드 렌더링 상태 추적
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되면 클라이언트 사이드임을 표시
    setIsClient(true);
  }, []);

  const navItems = [
    { label: '홈', href: '/' },
    { label: '일자리 찾기', href: '/jobs' },
    { label: '인력 구하기', href: '/workers' },
    { label: '서비스 소개', href: '/about' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // 👇 수정: 서버 사이드에서는 아무것도 렌더링하지 않거나 공통 상태를 렌더링
  if (!isClient) {
    return (
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}
          >
            QuickMatch
          </Typography>
          {/* 초기 로딩 상태에서는 메뉴 아이콘만 표시 */}
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}
        >
          QuickMatch
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
                <List>
                  {navItems.map((item) => (
                    <ListItemButton component={Link} href={item.href} key={item.label}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  ))}
                  <ListItemButton component={Link} href="/login">
                    <ListItemText primary="로그인" />
                  </ListItemButton>
                  <ListItemButton component={Link} href="/signup">
                    <ListItemText primary="회원가입" />
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item.label} component={Link} href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
            <Button
              component={Link}
              href="/login"
              variant="outlined"
              color="primary"
              sx={{ ml: 2 }}
            >
              로그인
            </Button>
            <Button component={Link} href="/signup" variant="contained" color="primary">
              회원가입
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
