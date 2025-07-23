export const colors = {
  primary: {
    50: '#E6F7FF',
    100: '#BAE7FF',
    200: '#91D5FF',
    300: '#69C0FF',
    400: '#40A9FF',
    500: '#1890FF',
    600: '#096DD9',
    700: '#0050B3',
    800: '#003A8C',
    900: '#002766',
  },

  success: {
    50: '#F6FFED',
    100: '#D9F7BE',
    200: '#B7EB8F',
    300: '#95DE64',
    400: '#73D13D',
    500: '#52C41A',
    600: '#389E0D',
    700: '#237804',
    800: '#135200',
    900: '#092B00',
  },

  warning: {
    50: '#FFF7E6',
    100: '#FFE7BA',
    200: '#FFD591',
    300: '#FFC069',
    400: '#FFA940',
    500: '#FA8C16',
    600: '#D46B08',
    700: '#AD4E00',
    800: '#873800',
    900: '#612500',
  },

  error: {
    50: '#FFF2F0',
    100: '#FFCCC7',
    200: '#FFA39E',
    300: '#FF7875',
    400: '#FF4D4F',
    500: '#F5222D',
    600: '#CF1322',
    700: '#A8071A',
    800: '#820014',
    900: '#5C0011',
  },

  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#F0F0F0',
    300: '#D9D9D9',
    400: '#BFBFBF',
    500: '#8C8C8C',
    600: '#595959',
    700: '#434343',
    800: '#262626',
    900: '#1F1F1F',
  },

  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F5F5F5',
    dark: '#001529',
  },

  text: {
    primary: '#262626',
    secondary: '#595959',
    tertiary: '#8C8C8C',
    disabled: '#BFBFBF',
    inverse: '#FFFFFF',
  },

  border: {
    light: '#F0F0F0',
    base: '#D9D9D9',
    dark: '#BFBFBF',
  },
};

export const typography = {
  fontFamily: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
};

export const borderRadius = {
  none: '0px',
  sm: '2px',
  base: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export const components = {
  card: {
    borderRadius: borderRadius.base,
    boxShadow: shadows.base,
    padding: spacing.lg,
    backgroundColor: colors.background.primary,
    borderColor: colors.border.light,
  },

  button: {
    borderRadius: borderRadius.base,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    padding: `${spacing.sm} ${spacing.lg}`,
    height: '32px',
    heightLarge: '40px',
    heightSmall: '24px',
  },

  input: {
    borderRadius: borderRadius.base,
    borderColor: colors.border.base,
    fontSize: typography.fontSize.sm,
    padding: `${spacing.sm} ${spacing.md}`,
    height: '32px',
  },

  menu: {
    backgroundColor: colors.background.dark,
    itemColor: colors.text.inverse,
    itemSelectedColor: colors.primary[500],
    itemHoverColor: colors.primary[400],
  },

  layout: {
    headerHeight: '64px',
    sidebarWidth: '256px',
    contentPadding: spacing.lg,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  components,
}; 