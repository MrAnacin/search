import React, { ChangeEvent } from "react";
import * as Styled from "./styles";

interface SearchProps {
  onSearchTermChange: (searchTerm: string) => void;
}

function Search({ onSearchTermChange }: SearchProps): JSX.Element {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <div>
      <Styled.SearchTerm
        type="search"
        placeholder="Поиск пользователя"
        name="search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
