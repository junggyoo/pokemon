import { NameEntry } from '@/services/main/type';

export const getKoreanName = (names: NameEntry[]) => {
  const koreanNameEntry = names.find(
    (nameEntry: NameEntry) => nameEntry.language.name === 'ko'
  );

  return koreanNameEntry ? koreanNameEntry.name : names[0].name;
};
