import { NameEntry } from '@/services/main/type';

export const getKoreanName = (names: NameEntry[]) => {
  const koreanNameEntry = names.find(
    (nameEntry: NameEntry) => nameEntry.language.name === 'ko'
  );

  return koreanNameEntry ? koreanNameEntry.name : names[0].name;
};

export const getPokemonImgUrl = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
