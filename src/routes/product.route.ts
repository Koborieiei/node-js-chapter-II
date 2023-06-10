import express = require("express");
import { Product } from '../entity/product';
import { db } from '../datasource';
const router = express.Router();

router.get("/products", (req, res) => {
  const product = new Product();
});

export default router;
