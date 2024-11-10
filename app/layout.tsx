import type { Metadata } from "next";
import "./globals.css";

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
      <body
      >
        {children}
      </body>
    </html>
  );
}
