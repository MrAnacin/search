import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../components/modalWindow/modal";
import "@testing-library/jest-dom/extend-expect";

const mockOnClose = jest.fn();
const mockSetShowModal = jest.fn();

const user = {
  id: 1,
  login: "testUser",
  avatar_url: "https://example.com",
};

describe("Modal component", () => {
  test("renders Modal component with a user", () => {
    const { getByText } = render(
      <Modal
        showModal={true}
        setShowModal={mockSetShowModal}
        onClose={mockOnClose}
        user={user}
      />
    );

    expect(getByText(user.login)).toBeInTheDocument();
  });

  test("does not render Modal component without a user", () => {
    const { queryByText } = render(
      <Modal
        showModal={true}
        setShowModal={mockSetShowModal}
        onClose={mockOnClose}
        user={null}
      />
    );
    expect(queryByText("User Info")).toBeNull();
  });

  test("calls onClose when clicked outside of the modal", () => {
    const { getByTestId } = render(
      <Modal
        showModal={true}
        setShowModal={mockSetShowModal}
        onClose={mockOnClose}
        user={user}
      />
    );
    fireEvent.click(getByTestId("modal-container"));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
