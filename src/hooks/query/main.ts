import { useInfiniteQuery, useQuery } from 'react-query';

import MainService from '@/services/main/MainService';

const useInfinitePokemonQuery = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: 'pokemonList',
      queryFn: async ({ pageParam = 0 }) =>
        MainService.fetchPokemonList(pageParam),
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return false;
        return Number(new URL(next).searchParams.get('offset'));
      },
      refetchOnWindowFocus: false,
    });

  return {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  };
};

const usePokemonQuery = (pokemonId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => MainService.fetchPokemonSearch(pokemonId),
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.pokemon,
    isLoading,
  };
};

export { useInfinitePokemonQuery, usePokemonQuery };
