import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import UserList from './UserList';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = (query) => {
    axios.get(`https://api.github.com/search/users?q=${query}`)
      .then(response => {
        setUsers(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <h1>User Search App</h1>
      <SearchForm onSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
};

export default App;
