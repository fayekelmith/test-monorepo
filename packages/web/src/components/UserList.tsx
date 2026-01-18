import React from "react";
import { User } from "@test-monorepo/shared";

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
