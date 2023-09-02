import { atom } from 'recoil';

export const isNotFoundErrorState = atom({
  key: 'isNotFoundErrorState',
  default: false,
});

export const isLoadingState = atom({
  key: 'isLoadingState',
  default: false,
});
