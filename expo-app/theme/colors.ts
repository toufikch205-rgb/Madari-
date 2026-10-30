export const colors = {
  background: "#F8FAF7",
  surface: "#FFFFFF",
  surfaceMuted: "#F1F5EE",
  primary: "#B7E532",
  primaryStrong: "#8DBB13",
  primarySoft: "#EFF8D8",
  text: "#20251D",
  textMuted: "#7A8174",
  border: "#E7EDE1",
  success: "#4E9B55",
  danger: "#D95D5D",
  night: {
    background: "#11150F",
    surface: "#1B2118",
    surfaceMuted: "#252D21",
    text: "#F4F7EF",
    textMuted: "#A4AE9B",
    border: "#303A2B"
  }
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  screen: 22
} as const;

export const radius = {
  sm: 10,
  md: 16,
  lg: 22,
  pill: 999
} as const;