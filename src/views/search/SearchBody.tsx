'use client';

import { useRecoilValue } from 'recoil';

import { searchedPokemonState } from '@/recoil/main/atom';

import PokemonCard from '../main/components/PokemonCard';

export default function SearchBody() {
  const pokemon = useRecoilValue(searchedPokemonState);

  return (
    <main className="h-screen px-80">
      <div className="grid grid-cols-5 gap-4">
        {pokemon.name && (
          <PokemonCard
            id={pokemon?.id}
            name={pokemon?.name}
            img={pokemon?.img}
          />
        )}
      </div>
    </main>
  );
}