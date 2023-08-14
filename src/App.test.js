import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders user search app', () => {
  render(<App />);
  const titleElement = screen.getByText(/User Search App/i);
  expect(titleElement).toBeInTheDocument();
});

test('fetches users on search', async () => {
  const mockUsers = [
    { id: 1, login: 'user1' },
    { id: 2, login: 'user2' },
  ];

  axios.get.mockResolvedValueOnce({ data: { items: mockUsers } });

  render(<App />);

  const searchInput = screen.getByPlaceholderText('Search by login');
  const searchButton = screen.getByText('Search');

  fireEvent.change(searchInput, { target: { value: 'testuser' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const userElements = screen.getAllByRole('listitem');
    expect(userElements).toHaveLength(mockUsers.length);
  });
});

test('handles fetch error', async () => {
  axios.get.mockRejectedValueOnce(new Error('API error'));

  render(<App />);

  const searchInput = screen.getByPlaceholderText('Search by login');
  const searchButton = screen.getByText('Search');

  fireEvent.change(searchInput, { target: { value: 'testuser' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const errorElement = screen.getByText(/Error fetching data/i);
    expect(errorElement).toBeInTheDocument();
  });
});