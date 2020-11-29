import * as consts from 'consts';
import React, { createContext, FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface SearchContextStateProps {
  searchText: string;
  onChangeSearchText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSearching: boolean;
  searchInitiated: () => void;
  searchComplete: () => void;
  onKeyDownSearchBar: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextStateProps | undefined>(
  undefined
);

export const SearchProvider: FunctionComponent = (props) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const history = useHistory();

  const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const searchInitiated = () => setIsSearching(true);

  const searchComplete = () => {
    setIsSearching(false);
  };

  const onKeyDownSearchBar = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      history.push(consts.routes.SEARCH);
      searchInitiated();
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchText,
        onChangeSearchText,
        isSearching,
        searchInitiated,
        searchComplete,
        onKeyDownSearchBar,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
