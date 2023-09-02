import MainService from '@/services/main/MainService';
import { useInfiniteQuery } from 'react-query';

const useInfinitePokeQuery = () => {
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

export { useInfinitePokeQuery };
