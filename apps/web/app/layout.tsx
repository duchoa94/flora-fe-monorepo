import { Geist, Geist_Mono } from 'next/font/google';

import { NavLayout } from '@/components/layout/nav-layout';
import { Providers } from '@/components/providers';
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <Providers>
          <NavLayout>{children}</NavLayout>
        </Providers>
      </body>
    </html>
  );
}
