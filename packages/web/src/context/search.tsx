import * as consts from 'consts';
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface SearchContextStateProps {
  searchText: string;
  onChangeSearchText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSearching: boolean;
  searchInitiated: () => void;
  searchComplete: () => void;
  onKeyDownSearchBar: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchContextState = createContext<
  SearchContextStateProps | undefined
>(undefined);

export const SearchProvider = ({ children }: any) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const history = useHistory();

  const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const searchInitiated = () => setIsSearching(true);

  const searchComplete = () => {
    setIsSearching(false);
    setSearchText('');
  };

  const onKeyDownSearchBar = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      history.push(consts.routes.SEARCH);
      searchInitiated();
    }
  };

  return (
    <SearchContextState.Provider
      value={{
        searchText,
        onChangeSearchText,
        isSearching,
        searchInitiated,
        searchComplete,
        onKeyDownSearchBar,
      }}
    >
      {children}
    </SearchContextState.Provider>
  );
};
