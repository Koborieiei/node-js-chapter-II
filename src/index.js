const express = require("express");
const app = express();
const router = require("../routes/product.route");

const PORT = 8000;

app.use(router);

app.listen(PORT, () => {
  console.log(`start server port ${PORT}`);
  return;
});

app.get("/", (req, res) => res.send("Welcome to Node.js Chapter 2"));
