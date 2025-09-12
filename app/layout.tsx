import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"; // <-- add this
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhineet Saha - Portfolio",
  description:
    "Computer Science student passionate about designing technology that enriches everyday experiences",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster /> {/* <- toast portal lives here */}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
