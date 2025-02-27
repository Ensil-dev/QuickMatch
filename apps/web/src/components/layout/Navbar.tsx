'use client';

import React, { useState } from 'react';
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

  const navItems = [
    { label: '홈', href: '/' },
    { label: '일자리 찾기', href: '/jobs' },
    { label: '인력 구하기', href: '/workers' },
    { label: '서비스 소개', href: '/about' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
                    <ListItem button component={Link} href={item.href} key={item.label}>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                  <ListItem button component={Link} href="/login">
                    <ListItemText primary="로그인" />
                  </ListItem>
                  <ListItem button component={Link} href="/signup">
                    <ListItemText primary="회원가입" />
                  </ListItem>
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
