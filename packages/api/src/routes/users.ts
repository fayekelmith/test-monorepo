import { Router, Request, Response } from "express";
import { formatResponse, validateEmail, User } from "@test-monorepo/shared";

const router = Router();

// Mock database
const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// GET all users
router.get("/", (req: Request, res: Response) => {
  res.json(formatResponse(users));
});

// GET user by id
router.get("/:id", (req: Request, res: Response) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json(formatResponse(null, "User not found"));
  }
  res.json(formatResponse(user));
});

// POST create user
router.post("/", (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json(formatResponse(null, "Invalid email"));
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(formatResponse(newUser));
});

// PUT update user
router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json(formatResponse(null, "User not found"));
  }
  const { name, email } = req.body;
  users[userIndex] = { ...users[userIndex], name, email };
  res.json(formatResponse(users[userIndex]));
});

// DELETE user
router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json(formatResponse(null, "User not found"));
  }
  const deleted = users.splice(userIndex, 1)[0];
  res.json(formatResponse(deleted));
});

export default router;
