import React from "react";
import * as Styled from "./styles";

interface SortButtonProps {
  onSort: (order: "desc" | "asc") => void;
}

function SortButton({ onSort }: SortButtonProps): JSX.Element {
  const handleSort = (order: "desc" | "asc") => {
    onSort(order);
  };

  return (
    <Styled.SortBox>
      <Styled.Header>Сортировать по количеству репозиториев:</Styled.Header>
      <Styled.ButtonBox>
        <Styled.Button onClick={() => handleSort("desc")}>
          По убыванию
        </Styled.Button>
        <Styled.Button onClick={() => handleSort("asc")}>
          По возрастанию
        </Styled.Button>
      </Styled.ButtonBox>
    </Styled.SortBox>
  );
}

export default SortButton;
