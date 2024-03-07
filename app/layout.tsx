// src/app/layout.tsx
import type { Metadata } from "next";
import { Lexend, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ClerkProvider, auth } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { inter } from "./fonts";
import NavHeader from '@/components/NavHeader';
import { ConvexClientProvider } from "@/providers/convex-client-provider";

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RecruitMe.AI',
  description: 'Enhance Interview Skills Using AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  return (
<html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          inter.className,
          "antialiased min-h-screen border-none outline-none",
          "scrollbar scrollbar-thumb scrollbar-thumb-white scrollbar-track-slate-700 bg-[#222629] "
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
    
  
}
