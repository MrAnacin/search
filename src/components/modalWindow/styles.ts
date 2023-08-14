import styled from "styled-components";
export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  width: 444px;
  height: 554px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
`;

export const ModalHeader = styled.h3`
  color: #000;
  font-size: 32px;
  font-family: "Handjet", cursive;
  line-height: 40px;
  padding-bottom: 30px;
`;

export const ModalImage = styled.img`
  max-width: 80%;
  max-height: 70%;
  padding-top: 15px;
`;

export const ModalText = styled.p`
  font-family: "Handjet", cursive;
  font-size: 16px;
`;
