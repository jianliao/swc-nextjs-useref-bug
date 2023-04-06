"use client";
import "./globals.css";
import { SpTheme } from "@/components/Theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SpTheme theme="spectrum" color="light" scale="medium">
          {children}
        </SpTheme>
      </body>
    </html>
  );
}
