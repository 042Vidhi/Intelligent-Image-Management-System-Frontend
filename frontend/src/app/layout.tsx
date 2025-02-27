import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/Sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Providers from "./provider";
import { Toaster } from "@/components/ui/sonner"
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "TagAI",
  description: "AI-driven auto-tagging for image management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html>
      <body>
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen">
        <SidebarTrigger />
        <Providers>{children}</Providers>
      </main>
      <Toaster position="top-center"/>
    </SidebarProvider>
    </body>
    </html>
  );
}
