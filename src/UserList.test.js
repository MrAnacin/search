import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('renders user list with correct number of users', () => {
  const users = [
    { id: 1, login: 'user1' },
    { id: 2, login: 'user2' },
    { id: 3, login: 'user3' },
  ];
  render(<UserList users={users} />);
  const userListItems = screen.getAllByRole('listitem');
  expect(userListItems).toHaveLength(3);
});
