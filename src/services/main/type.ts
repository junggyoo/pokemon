export interface PokemonDto {
  name: string;
  url: string;
}

export interface PokemonListItem {
  name: string;
  id: string;
  img: string;
}

export interface NameEntry {
  name: string;
  language: {
    name: string;
  };
}
