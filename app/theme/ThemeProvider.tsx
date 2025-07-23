"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { antdTheme } from "./antd-theme";
import { theme } from "./design-system";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const DesignSystemContext = React.createContext(theme);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <DesignSystemContext.Provider value={theme}>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </DesignSystemContext.Provider>
  );
};

export const useDesignSystem = () => {
  const context = React.useContext(DesignSystemContext);
  if (!context) {
    throw new Error("useDesignSystem must be used within a ThemeProvider");
  }
  return context;
};
