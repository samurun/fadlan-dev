import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Providers from '@/components/providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Fadlan.dev',
  description: 'Generated by create next app',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'https://fadlan-dev.vercel.app/'
  ),
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
          inter.variable
        )}
      >
        <Providers>
          <Header />
          <main className='container pt-16 min-h-[calc(100dvh-136px)]'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
