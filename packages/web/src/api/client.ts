import { User } from "@test-monorepo/shared";

const API_BASE = "http://localhost:3000/api";

export async function getUsers() {
  return fetch(`${API_BASE}/users`);
}

export async function getUserById(id: number) {
  return fetch(`${API_BASE}/users/${id}`);
}

export async function createUser(name: string, email: string) {
  return fetch(`${API_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
}

export async function deleteUser(id: number) {
  return fetch(`${API_BASE}/users/${id}`, { method: "DELETE" });
}

export async function updateUser(id: number, data: Partial<User>) {
  return fetch(`${API_BASE}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
