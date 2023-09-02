'use client';

import { useInfinitePokeQuery } from '@/hooks/query/main';
import { PokemonListItem } from '@/services/main/type';

export default function Home() {
  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfinitePokeQuery();

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello Pokemon World!</h1>
      {isLoading && <div>Loading...</div>}
      <div className="grid grid-cols-3 gap-4">
        {data?.pages.map((page) =>
          page.pokemons.map((pokemon: PokemonListItem) => (
            <div key={pokemon.id}>
              <img src={pokemon.img} alt={pokemon.name} />
              <div>{pokemon.name}</div>
            </div>
          ))
        )}
      </div>
      <button onClick={() => fetchNextPage()}>Load More</button>
      {isFetchingNextPage && <div>Loading...</div>}
    </main>
  );
}
