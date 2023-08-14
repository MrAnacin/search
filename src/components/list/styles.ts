import styled from "styled-components";

export const ListBox = styled.div`
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
export const Button = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  text-align: center;
  border: 1px solid #d6ccc2;
  padding: 11px 24px;
  height: 5vh;
  width: 15vh;
  color: #202223;
  background: #ffffff;
  border-radius: 4px;
  font-family: "Handjet", cursive;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;

  &:hover {
    background: #f6f6f7;
    outline: 1px solid transparent;
  }
`;

export const ButtonBox = styled.div`
    display: flex;
   justify-content: space-around;
   padding-top: 30px;
}`;
