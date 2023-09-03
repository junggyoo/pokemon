import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import MainService from '@/services/main/MainService';

const useInfinitePokemonQuery = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['pokemonList'],
    {
      queryFn: async ({ pageParam = 0 }) =>
        MainService.fetchPokemonList(pageParam),
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return false;
        return Number(new URL(next).searchParams.get('offset'));
      },
    }
  );

  return {
    data,
    isFetchingNextPage,
    fetchNextPage,
  };
};

const usePokemonQuery = (pokemonId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => MainService.fetchPokemonSearch(pokemonId),
  });

  return {
    data: data?.pokemon,
    isLoading,
  };
};

export { useInfinitePokemonQuery, usePokemonQuery };
