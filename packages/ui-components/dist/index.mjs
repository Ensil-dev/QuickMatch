// src/theme/index.ts
import { createTheme } from "@mui/material/styles";
var theme = createTheme({
  palette: {
    primary: {
      main: "#4361ee",
      // 기본 색상, 니더 브랜드 색상에 맞게 변경 가능
      light: "#6c8cff",
      dark: "#0039bb",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#3a0ca3",
      // 보조 색상
      light: "#6e38d5",
      dark: "#000074",
      contrastText: "#ffffff"
    },
    error: {
      main: "#f72585"
    },
    background: {
      default: "#ffffff",
      paper: "#f8f9fa"
    }
  },
  typography: {
    fontFamily: '"Pretendard", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "2.5rem"
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem"
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem"
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem"
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem"
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem"
    },
    body1: {
      fontSize: "1rem"
    },
    body2: {
      fontSize: "0.875rem"
    },
    button: {
      textTransform: "none",
      // 버튼 텍스트 대문자 변환 비활성화
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
          }
        }
      },
      defaultProps: {
        disableElevation: true
        // 기본적으로 버튼 그림자 효과 비활성화
      }
    }
    // 다른 컴포넌트 스타일 오버라이드도 여기에 추가
  }
});

// src/providers/ThemeProvider.tsx
import React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styled-engine-sc";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
var ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ React.createElement(StylesProvider, { injectFirst: true }, /* @__PURE__ */ React.createElement(MUIThemeProvider, { theme }, /* @__PURE__ */ React.createElement(SCThemeProvider, { theme }, /* @__PURE__ */ React.createElement(CssBaseline, null), children)));
};

// src/components/Button/index.tsx
import React2 from "react";
import { Button as MuiButton } from "@mui/material";
var Button = React2.forwardRef((props, ref) => {
  return /* @__PURE__ */ React2.createElement(MuiButton, { ref, ...props });
});
Button.displayName = "Button";
var PrimaryButton = React2.forwardRef((props, ref) => {
  return /* @__PURE__ */ React2.createElement(Button, { ref, variant: "contained", color: "primary", ...props });
});
PrimaryButton.displayName = "PrimaryButton";
var SecondaryButton = React2.forwardRef((props, ref) => {
  return /* @__PURE__ */ React2.createElement(Button, { ref, variant: "outlined", color: "primary", ...props });
});
SecondaryButton.displayName = "SecondaryButton";
var TextButton = React2.forwardRef((props, ref) => {
  return /* @__PURE__ */ React2.createElement(Button, { ref, variant: "text", color: "primary", ...props });
});
TextButton.displayName = "TextButton";

// src/components/Card/index.tsx
import React3 from "react";
import { Card as MuiCard, CardContent } from "@mui/material";
var Card = React3.forwardRef(
  ({ padding = "medium", children, ...props }, ref) => {
    const paddingMap = {
      small: "8px",
      medium: "16px",
      large: "24px"
    };
    return /* @__PURE__ */ React3.createElement(MuiCard, { ref, ...props }, /* @__PURE__ */ React3.createElement(CardContent, { style: { padding: paddingMap[padding] } }, children));
  }
);
Card.displayName = "Card";
var ElevatedCard = React3.forwardRef((props, ref) => {
  return /* @__PURE__ */ React3.createElement(
    Card,
    {
      ref,
      ...props,
      sx: {
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        ...props.sx || {}
      }
    }
  );
});
ElevatedCard.displayName = "ElevatedCard";

// src/index.ts
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Checkbox,
  Radio,
  Select,
  MenuItem,
  Switch,
  Divider,
  Paper,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from "@mui/material";
import {
  Menu,
  Person,
  Search
} from "@mui/icons-material";
export {
  AppBar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Drawer,
  ElevatedCard,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu as MenuIcon,
  MenuItem,
  Paper,
  Person as PersonIcon,
  PrimaryButton,
  Radio,
  Search as SearchIcon,
  SecondaryButton,
  Select,
  Switch,
  TextButton,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  theme
};
