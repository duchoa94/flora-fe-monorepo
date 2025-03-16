import { Geist, Geist_Mono } from 'next/font/google';

import { NavLayout } from '@/components/layout/nav-layout';
import '@workspace/ui/globals.css';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <NavLayout>{children}</NavLayout>
    </div>
  );
}
