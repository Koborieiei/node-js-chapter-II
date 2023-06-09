import express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.send("Waiting for some code 🤓");
});

export default router;
