import api from '@/axios';

import { NameEntry, PokemonDto } from './type';

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
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
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
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
    };

    return {
      pokemon,
    };
  }
}

const getKoreanName = (names: NameEntry[]) => {
  const koreanNameEntry = names.find(
    (nameEntry: NameEntry) => nameEntry.language.name === 'ko'
  );

  return koreanNameEntry ? koreanNameEntry.name : names[0].name;
};
