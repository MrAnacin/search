import React, { useState } from "react";
import * as Styled from "./styles";
import Modal from "../modalWindow/modal";
import { useGetUserQuery } from "../../redux/userApi";

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

interface ListProps {
  userName: string;
  order: string;
}

function List({ userName, order }: ListProps): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error } = useGetUserQuery(
    { userName, order, page: currentPage },
    { skip: !userName }
  );

  if (error) {
    console.log({ error });
  }

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <Styled.ListBox>
        {data?.items.map((user: User) => (
          <div onClick={() => handleOpenModal(user)} key={user.id}>
            {user.login}
          </div>
        ))}
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onClose={handleCloseModal}
            user={selectedUser}
          />
        )}
      </Styled.ListBox>
      {data?.items?.length > 0 && (
        <Styled.ButtonBox>
          <Styled.Button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </Styled.Button>
          <Styled.Button onClick={handleNextPage}>Next</Styled.Button>
        </Styled.ButtonBox>
      )}
    </div>
  );
}

export default List;
