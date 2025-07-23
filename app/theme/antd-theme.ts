import { theme } from './design-system';

export const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary[500],
    colorSuccess: theme.colors.success[500],
    colorWarning: theme.colors.warning[500],
    colorError: theme.colors.error[500],
    colorInfo: theme.colors.primary[500],
    
    colorBgContainer: theme.colors.background.primary,
    colorBgElevated: theme.colors.background.primary,
    colorBgLayout: theme.colors.background.secondary,
    colorBgSpotlight: theme.colors.background.tertiary,
    
    colorText: theme.colors.text.primary,
    colorTextSecondary: theme.colors.text.secondary,
    colorTextTertiary: theme.colors.text.tertiary,
    colorTextQuaternary: theme.colors.text.disabled,
    
    colorBorder: theme.colors.border.base,
    colorBorderSecondary: theme.colors.border.light,
    
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: parseInt(theme.typography.fontSize.base),
    fontSizeSM: parseInt(theme.typography.fontSize.sm),
    fontSizeLG: parseInt(theme.typography.fontSize.lg),
    fontSizeXL: parseInt(theme.typography.fontSize.xl),
    
    borderRadius: parseInt(theme.borderRadius.base),
    borderRadiusLG: parseInt(theme.borderRadius.lg),
    borderRadiusSM: parseInt(theme.borderRadius.sm),
    
    padding: parseInt(theme.spacing.md),
    paddingLG: parseInt(theme.spacing.lg),
    paddingSM: parseInt(theme.spacing.sm),
    paddingXS: parseInt(theme.spacing.xs),
    
    margin: parseInt(theme.spacing.md),
    marginLG: parseInt(theme.spacing.lg),
    marginSM: parseInt(theme.spacing.sm),
    marginXS: parseInt(theme.spacing.xs),
    
    controlHeight: 32,
    controlHeightLG: 40,
    controlHeightSM: 24,
    
    boxShadow: theme.shadows.base,
    boxShadowSecondary: theme.shadows.sm,
  },
  
  components: {
    Button: {
      borderRadius: parseInt(theme.borderRadius.base),
      fontSize: parseInt(theme.typography.fontSize.sm),
      fontWeight: theme.typography.fontWeight.medium,
      controlHeight: 32,
      controlHeightLG: 40,
      controlHeightSM: 24,
    },

    Card: {
      borderRadius: parseInt(theme.borderRadius.base),
      boxShadow: theme.shadows.base,
      paddingLG: parseInt(theme.spacing.lg),
      headerBg: theme.colors.background.primary,
      headerFontSize: parseInt(theme.typography.fontSize.lg),
      headerFontWeight: theme.typography.fontWeight.semibold,
    },
    
    Input: {
      borderRadius: parseInt(theme.borderRadius.base),
      fontSize: parseInt(theme.typography.fontSize.sm),
      controlHeight: 32,
      controlHeightLG: 40,
      controlHeightSM: 24,
    },
    
    Menu: {
      darkItemBg: theme.colors.background.dark,
      darkItemColor: theme.colors.text.inverse,
      darkItemSelectedBg: theme.colors.primary[500],
      darkItemHoverBg: theme.colors.primary[400],
      itemHeight: 40,
      itemPaddingInline: parseInt(theme.spacing.md),
    },
    
    Layout: {
      headerBg: theme.colors.background.primary,
      headerHeight: 64,
      siderBg: theme.colors.background.dark,
      bodyBg: theme.colors.background.secondary,
      footerBg: theme.colors.background.primary,
    },
    
    Typography: {
      fontFamily: theme.typography.fontFamily.primary,
      fontSize: parseInt(theme.typography.fontSize.base),
      fontSizeHeading1: parseInt(theme.typography.fontSize['5xl']),
      fontSizeHeading2: parseInt(theme.typography.fontSize['4xl']),
      fontSizeHeading3: parseInt(theme.typography.fontSize['3xl']),
      fontSizeHeading4: parseInt(theme.typography.fontSize['2xl']),
      fontSizeHeading5: parseInt(theme.typography.fontSize.xl),
    },
    
    Table: {
      borderRadius: parseInt(theme.borderRadius.base),
      headerBg: theme.colors.background.tertiary,
      headerColor: theme.colors.text.primary,
      headerFontWeight: theme.typography.fontWeight.semibold,
      rowHoverBg: theme.colors.background.tertiary,
    },
    
    Form: {
      labelFontSize: parseInt(theme.typography.fontSize.sm),
      labelFontWeight: theme.typography.fontWeight.medium,
      itemMarginBottom: parseInt(theme.spacing.lg),
    },
    
    Select: {
      borderRadius: parseInt(theme.borderRadius.base),
      fontSize: parseInt(theme.typography.fontSize.sm),
      controlHeight: 32,
      controlHeightLG: 40,
      controlHeightSM: 24,
    },
    
    Modal: {
      borderRadius: parseInt(theme.borderRadius.lg),
      headerBg: theme.colors.background.primary,
      contentBg: theme.colors.background.primary,
      footerBg: theme.colors.background.primary,
    },
    
    Drawer: {
      colorBgElevated: theme.colors.background.primary,
      colorBgContainer: theme.colors.background.primary,
    },
    
    Notification: {
      borderRadius: parseInt(theme.borderRadius.base),
      boxShadow: theme.shadows.lg,
    },
    
    Message: {
      borderRadius: parseInt(theme.borderRadius.base),
      boxShadow: theme.shadows.lg,
    },
  },
}; 