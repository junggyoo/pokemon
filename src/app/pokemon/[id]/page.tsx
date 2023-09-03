import PokemonDetailBody from '@/views/pokemon/PokemonDetailBody';

export default async function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <PokemonDetailBody params={params} />;
}
