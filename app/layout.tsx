import type { Metadata } from "next";
import { ThemeProvider } from "./theme/ThemeProvider";
import { App as AntdApp } from "antd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max ERP",
  description: "A modern ERP system built with Next.js and Ant Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AntdApp>{children}</AntdApp>
        </ThemeProvider>
      </body>
    </html>
  );
}
