import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/Auth_Context";
import { ToastProvider } from "@/components/toastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "RECYCO",
  description: "Turn waste into cash with RECYCO - your trusted platform for recycling and selling used items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} font-sans`}
      
      >
        <AuthProvider>
        <ToastProvider>
        {children}
       </ToastProvider>
       </AuthProvider>
      </body>
    </html>
  );
}
