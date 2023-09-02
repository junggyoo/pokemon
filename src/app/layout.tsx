'use client';

import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '@/components/Header';

import './globals.css';
import HeadInfo from './HeadInfo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <HeadInfo />
      <body className="h-screen">
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Header />
            {children}
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
