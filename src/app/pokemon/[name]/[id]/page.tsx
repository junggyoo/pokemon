import PokemonDetailBody from '@/views/pokemon/PokemonDetailBody';

export default function PokemonDetailPage({
  params,
}: {
  params: { name: string; id: string };
}) {
  return <PokemonDetailBody params={params} />;
}
