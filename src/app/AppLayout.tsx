'use client';

import { useRecoilValue } from 'recoil';

import { isLoadingState } from '@/recoil/global/atom';

import Header from '@/components/Header';
import Loading from '@/components/Loading';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const isLoading = useRecoilValue(isLoadingState);

  return (
    <div className="h-full">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </div>
  );
}
