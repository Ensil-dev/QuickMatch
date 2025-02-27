import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styled-engine-sc';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </SCThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  );
};
