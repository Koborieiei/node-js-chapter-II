import * as express from "express";
import { db } from "../src/datasource";
import { Product } from "../src/entity/Product";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

// NOTE: 1. สร้าง routes ทีละ step ตามนี้เลย

export const productRoutes = () => {
  const router = express.Router();
  // const productRepository = db.getRepository(Product); ใช้ตอนที่ manager เรียกใช้มากกว่า 1

  router.get("/products", async (req, res) => {
    const products = await db.manager.find(Product);
    res.send(products);
  });

  router.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const products = await db.manager.findOne(Product, {
      where: { id: Number(id) },
    });
    res.send(products);
  });

  router.post("/products", async (req: Request, res: Response) => {
    const { id, name } = req.body;
    let product = new Product();
    product.id = id;
    product.name = name;

    await db.manager.save(product);

    res.send("Product has been added successfully!");
  });

  router.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(StatusCodes.BAD_REQUEST).send();
    await db.manager
      .delete(Product, id)
      .then((result) => {
        if (!result.affected) return res.status(StatusCodes.NOT_FOUND).send();
        return res
          .status(StatusCodes.OK)
          .send("Product has been deleted successfully!");
      })
      .catch((err) => {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
      });

    // try {
    //   if (!id) return res.status(StatusCodes.BAD_REQUEST).send();
    //   const result = await db.manager.delete(Product, id);
    //   if (!result.affected) return res.status(StatusCodes.NOT_FOUND).send();
    //   res.status(StatusCodes.OK).send("Product has been deleted successfully!");
    // } catch (error) {
    //   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    // }
  });

  return router;
};
