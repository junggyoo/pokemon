import api from '@/axios';

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

    const pokemons = data.results.map((pokemon: PokemonDto) => {
      const id = pokemon.url.split('/')[6];
      return {
        name: pokemon.name,
        id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    });

    return {
      pokemons,
      next: data.next,
    };
  }
}
