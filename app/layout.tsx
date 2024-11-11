import type { Metadata } from "next";
import "./globals.css";
import {Kumbh_Sans} from "next/font/google"
import TopNav from "./components/TopNav";
import { ThemeProvider } from "./components/theme-provider";
import Navabr from "./components/Navabr";

const inter = Kumbh_Sans({
  subsets:['latin'],
  weight: ["400"],
})
export const metadata: Metadata = {
  title: "AI Blog App",
  description: "AI Blog App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}
      >  
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
        <TopNav/>
        <Navabr/>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
