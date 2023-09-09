'use client';

import { useEffect } from 'react';

import PokemonCard from '../main/components/PokemonCard';

import { usePokemonEvolutionQuery } from '@/hooks/query/detail';

import { getPokemonImgUrl } from '@/utils';

interface PokemonDetailBodyProps {
  params: {
    id: string;
  };
}

export default function PokemonDetailBody({ params }: PokemonDetailBodyProps) {
  const { data } = usePokemonEvolutionQuery(params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="h-screen px-80">
      <PokemonCard
        name={data?.pokemonName}
        id={params.id}
        img={getPokemonImgUrl(params.id)}
      />
      <div className="w-full h-1 border-gray-700 border-t-2 my-10" />
      <h2 className="text-2xl mb-10">포켓몬 진화</h2>
      <div className="flex gap-10">
        {data?.evolutionData?.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={getPokemonImgUrl(pokemon.id)}
          />
        ))}
      </div>
    </main>
  );
}
