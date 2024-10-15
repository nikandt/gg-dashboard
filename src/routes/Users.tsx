import React, { useState, useEffect } from 'react';
import styles from '../styles/Users.module.scss';
import { FaSearch } from 'react-icons/fa';
import { Button, Card, CardContent, Typography } from '@mui/material';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: { street: string; city: string };
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'email'>('name');
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(term)
      )
    );
  };

  const getLastName = (name: string) => {
    const parts = name.split(' ');
    return parts[parts.length - 1]; // Assume last word is the last name
  };

  const handleSort = (field: 'name' | 'email') => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      let compare;
      if (field === 'name') {
        const lastNameA = getLastName(a.name).toLowerCase();
        const lastNameB = getLastName(b.name).toLowerCase();
        compare = lastNameA.localeCompare(lastNameB);
      } else {
        compare = a.email.localeCompare(b.email);
      }
      return isAscending ? compare : -compare;
    });
    setSortBy(field);
    setIsAscending(!isAscending);
    setFilteredUsers(sortedUsers);
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className={styles.users}>
      <h1>Users</h1>
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className={styles.sortBy}>
          <p>Sort by:</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSort('name')}
          >
            Name {isAscending && sortBy === 'name' ? '▲' : '▼'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSort('email')}
          >
            Email {isAscending && sortBy === 'email' ? '▲' : '▼'}
          </Button>
        </div>
      </div>
      <div className={styles.userList}>
      {filteredUsers.map((user) => (
          <Card className={styles.userCard} key={user.id}>
            <CardContent>
              <Typography variant="h5">{user.name}</Typography>
              <Typography variant="body2">
                <strong>Email:</strong> {user.email}
              </Typography>
              <Typography variant="body2">
                <strong>Phone:</strong> {user.phone}
              </Typography>
              <Typography variant="body2">
                <strong>Website:</strong> {user.website}
              </Typography>
              <Typography variant="body2">
                <strong>Address:</strong> {user.address.street}, {user.address.city}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Users;
