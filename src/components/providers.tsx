'use client';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from './theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <ProgressBar color='#2563eb' />
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Providers;
