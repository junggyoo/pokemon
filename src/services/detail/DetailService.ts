import api from '@/axios';

import { getKoreanName, getPokemonImgUrl } from '@/utils';

import { ChainLink, Evolution } from './type';

export default class DetailService {
  static async fetchPokemonSpecies(pokemonId: string) {
    const { data } = await api.get(`/pokemon-species/${pokemonId}`);

    const evolutionChainUrl = data.evolution_chain.url;

    const { data: evolutionChainData } = await api.get(evolutionChainUrl);

    const evolutionData = await this.extractEvolutions(
      evolutionChainData.chain
    );

    return {
      pokemonName: getKoreanName(data.names),
      evolutionData,
    };
  }

  private static async extractEvolutions(
    chain: ChainLink
  ): Promise<Evolution[]> {
    const pokemonId = chain.species.url.split('/')[6];

    const { data: speciesData } = await api.get(
      `/pokemon-species/${pokemonId}`
    );

    let evolutions = [
      {
        name: getKoreanName(speciesData.names),
        id: pokemonId,
        img: getPokemonImgUrl(pokemonId),
      },
    ];

    const evolvesToPromises = chain.evolves_to.map((link) =>
      this.extractEvolutions(link)
    );

    const evolvesToArray = await Promise.all(evolvesToPromises);

    for (const evolvesTo of evolvesToArray) {
      evolutions = [...evolutions, ...evolvesTo];
    }

    return evolutions;
  }
}
