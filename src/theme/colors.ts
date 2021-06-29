import { Colors } from "./types";

export const baseColors = {
  failure: "#ed4b4e",
  primary: "#303030",
  primaryBright: "#222222",
  primaryDark: "#222222",
  secondary: "#969696",
  success: "#0074d9",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAFAFA",
  backgroundDisabled: "#dddddd",
  contrast: "#010101",
  invertedContrast: "#FFFFFF",
  input: "#dddddd",
  tertiary: "#EFF4F5",
  text: "#303030",
  textDisabled: "#c1c1c1",
  textSubtle: "#969696",
  borderColor: "#e3e4e5",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
