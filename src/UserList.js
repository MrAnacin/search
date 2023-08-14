import React, { useState } from 'react';
import SortOptions from './SortOptions';
import Pagination from './Pagination';

const UserList = ({ users }) => {
  const [sortedUsers, setSortedUsers] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const handleSort = (order) => {
    const sorted = [...users];
    if (order === 'asc') {
      sorted.sort((a, b) => a.public_repos - b.public_repos);
    } else {
      sorted.sort((a, b) => b.public_repos - a.public_repos);
    }
    setSortedUsers(sorted);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      <SortOptions onSort={handleSort} />
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>{user.login} - {user.public_repos} repos</li>
        ))}
      </ul>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={sortedUsers.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserList;