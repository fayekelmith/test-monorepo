import React, { useState, useEffect } from 'react';
import { formatResponse, validateEmail } from '@test-monorepo/shared';
import Button from './components/Button';

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();
      setUsers(data.data || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    console.log('Add user clicked');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test Monorepo - User Management</h1>
      
      <Button onClick={handleAddUser}>
        Add New User
      </Button>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h2>Users ({users.length})</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
