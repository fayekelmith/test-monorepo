import { Router, Request, Response } from "express";
import { formatResponse, Product } from "@test-monorepo/shared";

const router = Router();

const products: Product[] = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Gadget", price: 19.99 },
];

router.get("/", (req: Request, res: Response) => {
  res.json(formatResponse(products));
});

router.get("/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json(formatResponse(null, "Product not found"));
  }
  res.json(formatResponse(product));
});

router.post("/", (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newProduct: Product = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(formatResponse(newProduct));
});

export default router;
