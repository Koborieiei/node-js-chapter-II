import express = require("express");
import { Product } from "../entity/product";
import { db } from "../datasource";
const router = express.Router();

const productRepository = db.getRepository(Product);

router.get("/products", (_req, res) => {
  productRepository
    .find()
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

router.get("/products/:id", (req, res) => {
  const id = req.params.id;
  productRepository
    .findBy({ id: Number(id) })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

router.post("/products", (req, res) => {
  productRepository
    .save({
      ...req.body,
    })
    .then((_product) => {
      res.status(200).send("Product created successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

router.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Missing URL parameter: id");
    return;
  }
  productRepository
    .delete({ id: Number(id) })
    .then((_product) => {
      res.status(200).send("Product created successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

export default router;
