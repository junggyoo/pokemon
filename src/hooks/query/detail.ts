import { useQuery } from '@tanstack/react-query';

import DetailService from '@/services/detail/DetailService';

const usePokemonEvolutionQuery = (id: string) => {
  const { data } = useQuery({
    queryKey: ['pokemonEvolution', id],
    queryFn: () => DetailService.fetchPokemonSpecies(id),
  });

  return {
    data,
  };
};

export { usePokemonEvolutionQuery };
