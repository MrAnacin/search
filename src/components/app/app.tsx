import React, { useState } from "react";
import Search from "../search/search";
import List from "../list/list";
import SortButton from "../sort/sortButton";
import * as Styled from "./styles";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleSortOrderChange = (order: string) => {
    setSortOrder(order);
  };

  return (
    <Styled.Container>
      <Search onSearchTermChange={setSearchTerm} />
      <SortButton onSort={handleSortOrderChange} />
      <List userName={searchTerm} order={sortOrder} />
    </Styled.Container>
  );
}

export default App;
