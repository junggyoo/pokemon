'use client';

import { useRef } from 'react';

import { PokemonListItem } from '@/services/main/type';

import { useObserver } from '@/hooks/helper/useObserver';
import { useInfinitePokemonQuery } from '@/hooks/query/main';

import PokemonCard from './components/PokemonCard';

export default function MainBody() {
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, isFetchingNextPage, fetchNextPage } = useInfinitePokemonQuery();

  const onIntersect: (entries: IntersectionObserverEntry[]) => void = ([
    entry,
  ]) => {
    if (entry.isIntersecting) fetchNextPage();
  };

  useObserver({ target: bottomRef, onIntersect });

  return (
    <main className="px-80">
      <div className="grid grid-cols-5 gap-4 h-auto">
        {data?.pages.map((page) =>
          page.pokemons.map((pokemon: PokemonListItem) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.img}
            />
          ))
        )}
      </div>
      <div ref={bottomRef} />
      {isFetchingNextPage && <div>Loading...</div>}
    </main>
  );
}
