'use client';

import { useObserver } from '@/hooks/helper/useObserver';
import { useInfinitePokeQuery } from '@/hooks/query/main';
import { PokemonListItem } from '@/services/main/type';
import { useRef } from 'react';
import PokemonCard from './components/PokemonCard';

export default function MainBody() {
  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfinitePokeQuery();
  const bottomRef = useRef<HTMLDivElement>(null);

  const onIntersect: (entries: IntersectionObserverEntry[]) => void = ([
    entry,
  ]) => {
    if (entry.isIntersecting) fetchNextPage();
  };

  useObserver({ target: bottomRef, onIntersect });

  return (
    <main className="px-80">
      <h1 className="text-3xl font-bold underline">Hello Pokemon World!</h1>
      {isLoading && <div>Loading...</div>}
      <div className="grid grid-cols-5 gap-4">
        {data?.pages.map((page) =>
          page.pokemons.map((pokemon: PokemonListItem) => (
            <PokemonCard
              key={pokemon.id}
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
