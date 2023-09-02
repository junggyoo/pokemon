'use client';

import { useRecoilValue } from 'recoil';

import { searchedPokemonState } from '@/recoil/main/atom';
import { isNotFoundErrorState } from '@/recoil/global/atom';

import PokemonCard from '../main/components/PokemonCard';

export default function SearchBody() {
  const pokemon = useRecoilValue(searchedPokemonState);
  const isNotFoundError = useRecoilValue(isNotFoundErrorState);

  return (
    <main className="h-screen px-80">
      {isNotFoundError ? (
        <p className="text-3xl mb-10">
          검색 결과가 없습니다. 1번부터 1010번 사이로 검색해주세요.
        </p>
      ) : (
        <p className="text-3xl mb-10">검색결과: {pokemon.name}</p>
      )}
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
