'use client';

import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

import MainService from '@/services/main/MainService';

import { searchedPokemonState, searchKeywordState } from '@/recoil/main/atom';
import { isNotFoundErrorState } from '@/recoil/global/atom';

export default function Header() {
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  const setSearchedPokemon = useSetRecoilState(searchedPokemonState);
  const resetSeachedPokemon = useResetRecoilState(searchedPokemonState);
  const setIsNotFoundError = useSetRecoilState(isNotFoundErrorState);

  const handleSearch = async () => {
    try {
      setIsNotFoundError(false);
      const { pokemon } = await MainService.fetchPokemonSearch(searchKeyword);
      setSearchedPokemon(pokemon);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (
        axiosError.isAxiosError &&
        axiosError.response?.data === 'Not Found'
      ) {
        resetSeachedPokemon();
        setIsNotFoundError(true);
      }
    }

    router.push(`/search`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleTitleClick = () => {
    router.push(`/`);
    setSearchKeyword('');
  };

  return (
    <header className="px-80">
      <h1
        className="text-center text-3xl py-20 font-bold cursor-pointer"
        onClick={handleTitleClick}
      >
        Hello Pokemon World!
      </h1>
      <div className="mb-4 flex">
        <input
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="1번부터 1010번까지의 포켓몬을 검색해보세요!"
          className="border p-2 rounded mr-2 flex-grow"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded"
        >
          포켓몬 검색
        </button>
      </div>
    </header>
  );
}
