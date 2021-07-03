import { Colors } from "./types";

export const baseColors = {
    failure: "#DD5252",
  primary: "#001F4C",
  primaryBright: "#001F4C",
  primaryDark: "#001F4C",
  secondary: "#283149",
  success: "#9FF8FF",
  warning: "#D199AE",
};

export const additionalColors = {
 binance: "#638E91",
  overlay: "#001f4c",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#F4F4F9",
  backgroundDisabled: "#E8E9EB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#F4F4F9",
  contrast: "#3a3557",
  dropdown: "#F4F4F9",
  dropdownDeep: "#E2E6ED",
  invertedContrast: "#FFFFFF",
  input: "#DFE7F2",
  inputSecondary: "#DFE7F2",
  tertiary: "#DEFFFE",
  text: "#19213A",
  textDisabled: "#BDC2C4",
  textSubtle: "#6A93AD",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #C1D0F4 0%, #DFE7F2 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #DFE7F2 0%, #C1D0F4 100%)",
    cardHeader: "linear-gradient(111.68deg, #F4F4F9 0%, #E2E6ED 100%)",
    blue: "linear-gradient(180deg, #CAEFED 0%, #C3D1E2 100%)",
    violet: "linear-gradient(180deg, #CAEFED 0%, #C3D1E2 100%)",
    violetAlt: "linear-gradient(180deg, #CAEFED 0%, #C3D1E2 100%)",
    gold: "linear-gradient(180deg, #71FFFF 0%, #F2ACA2 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9AEBED",
  background: "#3a3557",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#3a3557",
  cardBorder: "#31383f",
  contrast: "#FFFFFF",
  dropdown: "#1B1E1E",
  dropdownDeep: "#0E1214",
  invertedContrast: "#332947",
  input: "#3B3F56",
  inputSecondary: "#222B51",
  primaryDark: "#9AEBED",
 tertiary: "#353547",
  text: "#E1E7F9",
  textDisabled: "#616470",
  textSubtle: "#B9CEEA",
  disabled: "#4A5160",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #31475B 0%, #272B35 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #272B35 0%, #31475B 100%)",
    cardHeader: "linear-gradient(166.77deg, #31475B 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #31475B 0%, #4A5160 100%)",
    violet: "linear-gradient(180deg, #31475B 0%, #31475B 100%)",
    violetAlt: "linear-gradient(180deg, #31475B 0%, #31475B 100%)",
    gold: "linear-gradient(180deg, #71FFFF 0%, #F2ACA2 100%)",
  },
};