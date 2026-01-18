import React, { useState, useEffect } from "react";
import { User } from "@test-monorepo/shared";
import { getUsers, createUser } from "../api/client";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleCreateUser = async (name: string, email: string) => {
    const res = await createUser(name, email);
    const data = await res.json();
    setUsers([...users, data.data]);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm onSubmit={handleCreateUser} />
      <UserList users={users} />
    </div>
  );
}
