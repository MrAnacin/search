import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

test('renders search form', () => {
  render(<SearchForm />);
  const searchButton = screen.getByText('Search');
  const input = screen.getByPlaceholderText('Search by login');
  expect(searchButton).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test('calls onSearch with entered query', () => {
  const mockOnSearch = jest.fn();
  render(<SearchForm onSearch={mockOnSearch} />);

  const input = screen.getByPlaceholderText('Search by login');
  fireEvent.change(input, { target: { value: 'testuser' } });

  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  expect(mockOnSearch).toHaveBeenCalledWith('testuser');
});