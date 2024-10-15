import React, { useState, useEffect } from 'react';
import styles from '../styles/Users.module.scss';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.users}>
      <h1>Users</h1>
      <div className={styles.userList}>
        {users.map((user) => (
          <div className={styles.userCard} key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;