import { dehydrate } from '@tanstack/react-query';

import PokemonDetailBody from '@/views/pokemon/PokemonDetailBody';

import { getQueryClient } from '@/hooks/query/useQueryClient';
import HydrateOnClient from '@/hooks/query/HydrateOnClient';

import DetailService from '@/services/detail/DetailService';

export default async function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['pokemonEvolution', params.id], () =>
    DetailService.fetchPokemonSpecies(params.id)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateOnClient state={dehydratedState}>
      <PokemonDetailBody params={params} />
    </HydrateOnClient>
  );
}
