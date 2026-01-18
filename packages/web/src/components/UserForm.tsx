import React, { useState } from "react";
import { validateEmail } from "@test-monorepo/shared";
// Assuming Button exists based on directory listing or I can use standard button
import Button from "./Button";

interface Props {
  onSubmit: (name: string, email: string) => void;
}

export default function UserForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (validateEmail(email)) {
      onSubmit(name, email);
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button onClick={handleSubmit}>Add User</Button>
    </div>
  );
}
