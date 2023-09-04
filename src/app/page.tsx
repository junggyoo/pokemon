import MainBody from '@/views/main/MainBody';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포켓몬 도감',
  openGraph: {
    description: '포켓몬 도감 정보를 제공합니다.',
    url: 'http://localhost:3000',
    locale: 'ko_KR',
    siteName: 'studiomate-pokemon',
    images: [
      {
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        width: 300,
        height: 300,
      },
    ],
  },
  keywords: [
    '포켓몬',
    '포켓몬 도감',
    '포켓몬 정보',
    '포켓몬 진화',
    '포켓몬 도감 정보',
    '포켓몬 도감 진화',
  ],
};

export default function MainPage() {
  return <MainBody />;
}
