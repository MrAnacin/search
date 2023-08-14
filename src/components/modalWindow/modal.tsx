import React, { MouseEvent } from "react";
import * as Styled from "./styles";

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  user: User | null;
}

function Modal({
  showModal,
  setShowModal,
  onClose,
  user,
}: ModalProps): JSX.Element | null {
  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    handleClose();
  };

  const handleClickInside = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!showModal || !user) {
    return null;
  }

  return (
    <Styled.ModalContainer
      data-testid="modal-container"
      onClick={handleClickOutside}
    >
      <Styled.ModalContent onClick={handleClickInside}>
        <Styled.ModalHeader>User Info</Styled.ModalHeader>
        <Styled.ModalText>{user.login}</Styled.ModalText>
        <Styled.ModalImage src={user.avatar_url} alt="user" />
      </Styled.ModalContent>
    </Styled.ModalContainer>
  );
}

export default Modal;
