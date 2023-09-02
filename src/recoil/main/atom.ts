import { atom } from 'recoil';

export const searchKeywordState = atom({
  key: 'searchKeywordState',
  default: '',
});

export const searchedPokemonState = atom({
  key: 'searchedPokemonState',
  default: {
    name: '',
    id: '',
    img: '',
  },
});
