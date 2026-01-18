import express, { Request, Response } from "express";
import cors from "cors";
import { formatResponse } from "@test-monorepo/shared";
import usersRouter from "./routes/users";
import productsRouter from "./routes/products";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

app.get("/api/health", (req: Request, res: Response) => {
  res.json(formatResponse({ status: "healthy", timestamp: new Date() }));
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on port ${PORT}`);
});

export default app;
