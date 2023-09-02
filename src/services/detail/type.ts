export interface Evolution {
  name: string;
  id: string;
  img: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface ChainLink {
  species: Species;
  evolves_to: ChainLink[];
}
