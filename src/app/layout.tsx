import type { Metadata, Viewport } from 'next';
import { Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Providers from '@/components/providers';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const NotoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Fadlan.dev',
  description: 'Nextjs 14 blog using velite, tailwind and shadcn',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'https://fadlan-dev.vercel.app/'
  ),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-pt-[5rem]'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          NotoSansThai.variable
        )}
      >
        <Providers>
          <Header />
          <main className='container pt-16 min-h-[calc(100dvh-136px)]'>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
