import "reflect-metadata";

const express = require("express");
const app = express();
const router = require("../routes/product.route");

const PORT = 8000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is now running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => res.send("Welcome to Node.js Chapter 2"));
