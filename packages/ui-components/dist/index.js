"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AppBar: () => import_material3.AppBar,
  Box: () => import_material3.Box,
  Button: () => Button,
  Card: () => Card,
  Checkbox: () => import_material3.Checkbox,
  Container: () => import_material3.Container,
  Divider: () => import_material3.Divider,
  Drawer: () => import_material3.Drawer,
  ElevatedCard: () => ElevatedCard,
  Grid: () => import_material3.Grid,
  IconButton: () => import_material3.IconButton,
  List: () => import_material3.List,
  ListItem: () => import_material3.ListItem,
  ListItemIcon: () => import_material3.ListItemIcon,
  ListItemText: () => import_material3.ListItemText,
  MenuIcon: () => import_icons_material.Menu,
  MenuItem: () => import_material3.MenuItem,
  Paper: () => import_material3.Paper,
  PersonIcon: () => import_icons_material.Person,
  PrimaryButton: () => PrimaryButton,
  Radio: () => import_material3.Radio,
  SearchIcon: () => import_icons_material.Search,
  SecondaryButton: () => SecondaryButton,
  Select: () => import_material3.Select,
  Switch: () => import_material3.Switch,
  TextButton: () => TextButton,
  TextField: () => import_material3.TextField,
  ThemeProvider: () => ThemeProvider,
  Toolbar: () => import_material3.Toolbar,
  Typography: () => import_material3.Typography,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// src/theme/index.ts
var import_styles = require("@mui/material/styles");
var theme = (0, import_styles.createTheme)({
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
var import_react = __toESM(require("react"));
var import_styles2 = require("@mui/material/styles");
var import_styled_engine_sc = require("@mui/styled-engine-sc");
var import_styled_components = require("styled-components");
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ import_react.default.createElement(import_styled_engine_sc.StylesProvider, { injectFirst: true }, /* @__PURE__ */ import_react.default.createElement(import_styles2.ThemeProvider, { theme }, /* @__PURE__ */ import_react.default.createElement(import_styled_components.ThemeProvider, { theme }, /* @__PURE__ */ import_react.default.createElement(import_CssBaseline.default, null), children)));
};

// src/components/Button/index.tsx
var import_react2 = __toESM(require("react"));
var import_material = require("@mui/material");
var Button = import_react2.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react2.default.createElement(import_material.Button, { ref, ...props });
});
Button.displayName = "Button";
var PrimaryButton = import_react2.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react2.default.createElement(Button, { ref, variant: "contained", color: "primary", ...props });
});
PrimaryButton.displayName = "PrimaryButton";
var SecondaryButton = import_react2.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react2.default.createElement(Button, { ref, variant: "outlined", color: "primary", ...props });
});
SecondaryButton.displayName = "SecondaryButton";
var TextButton = import_react2.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react2.default.createElement(Button, { ref, variant: "text", color: "primary", ...props });
});
TextButton.displayName = "TextButton";

// src/components/Card/index.tsx
var import_react3 = __toESM(require("react"));
var import_material2 = require("@mui/material");
var Card = import_react3.default.forwardRef(
  ({ padding = "medium", children, ...props }, ref) => {
    const paddingMap = {
      small: "8px",
      medium: "16px",
      large: "24px"
    };
    return /* @__PURE__ */ import_react3.default.createElement(import_material2.Card, { ref, ...props }, /* @__PURE__ */ import_react3.default.createElement(import_material2.CardContent, { style: { padding: paddingMap[padding] } }, children));
  }
);
Card.displayName = "Card";
var ElevatedCard = import_react3.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react3.default.createElement(
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
var import_material3 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  MenuIcon,
  MenuItem,
  Paper,
  PersonIcon,
  PrimaryButton,
  Radio,
  SearchIcon,
  SecondaryButton,
  Select,
  Switch,
  TextButton,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  theme
});
