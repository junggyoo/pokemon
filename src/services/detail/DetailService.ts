import api from '@/axios';

import { ChainLink, Evolution } from './type';

export default class DetailService {
  static async fetchPokemonSpecies(pokemonId: string) {
    const { data } = await api.get(`/pokemon-species/${pokemonId}`);

    const evolutionChainUrl = data.evolution_chain.url;

    const { data: evolutionChainData } = await api.get(evolutionChainUrl);

    const evolutionData = extractEvolutions(evolutionChainData.chain);

    return {
      evolutionData,
    };
  }
}

function extractEvolutions(chain: ChainLink): Evolution[] {
  let evolutions = [
    {
      name: chain.species.name,
      id: chain.species.url.split('/')[6],
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        chain.species.url.split('/')[6]
      }.png`,
    },
  ];

  if (chain.evolves_to.length) {
    evolutions = [...evolutions, ...extractEvolutions(chain.evolves_to[0])];
  }

  return evolutions;
}
