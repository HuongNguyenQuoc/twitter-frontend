import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// X dùng font riêng tên Chirp, không tải được. Inter là font thay thế gần nhất.
const chirp = Inter({
  variable: "--font-chirp",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Login | Twitter",
  description: "Happening now",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${chirp.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
