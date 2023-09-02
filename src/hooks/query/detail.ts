import { useQuery } from 'react-query';
import DetailService from '@/services/detail/DetailService';

const usePokemonEvolutionQuery = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemonEvolution', id],
    queryFn: () => DetailService.fetchPokemonSpecies(id),
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
  };
};

export { usePokemonEvolutionQuery };
