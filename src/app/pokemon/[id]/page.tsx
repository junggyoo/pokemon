import { cache } from 'react';

import DetailService from '@/services/detail/DetailService';
import PokemonDetailBody from '@/views/pokemon/PokemonDetailBody';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function PokemonDetailPage({ params }: PageProps) {
  return <PokemonDetailBody params={params} />;
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { id } = params;

  const getPokemonName = cache(async () => {
    const { pokemonName } = await DetailService.fetchPokemonSpecies(params.id);
    return pokemonName;
  });

  const pokemonName = await getPokemonName();

  return {
    title: `${pokemonName} - 포켓몬 도감`,
    openGraph: {
      title: pokemonName,
      description: `${pokemonName}의 정보를 확인하세요!`,
      url: `http://localhost:3000/pokemon/${id}`,
      locale: 'ko_KR',
      siteName: 'studiomate-pokemon',
      type: 'website',
      keywords: [
        pokemonName,
        '포켓몬',
        '포켓몬 도감',
        '포켓몬 정보',
        '포켓몬 진화',
        '포켓몬 도감 정보',
        '포켓몬 도감 진화',
      ],
      images: [
        {
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          width: 300,
          height: 300,
        },
      ],
    },
  };
};
