import api from '@/axios';

import { getKoreanName, getPokemonImgUrl } from '@/utils';

import { PokemonDto } from './type';

const LIMIT = 30;

export default class MainService {
  static async fetchPokemonList(pageParam: number) {
    const { data } = await api.get('/pokemon', {
      params: {
        offset: pageParam,
        limit: LIMIT,
      },
    });

    const pokemonPromises = data.results.map(async (pokemon: PokemonDto) => {
      const id = pokemon.url.split('/')[6];

      const { data: pokemonData } = await api.get(`/pokemon-species/${id}`);

      return {
        name: getKoreanName(pokemonData.names),
        id,
        img: getPokemonImgUrl(id),
      };
    });

    const pokemons = await Promise.all(pokemonPromises);

    return {
      pokemons,
      next: data.next,
    };
  }

  static async fetchPokemonSearch(pokemonId: string) {
    const { data } = await api.get(`/pokemon-species/${pokemonId}`);

    const pokemon = {
      name: getKoreanName(data.names),
      id: data.id,
      img: getPokemonImgUrl(data.id),
    };

    return {
      pokemon,
    };
  }
}
