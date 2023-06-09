const express = require("express");
const router = express.Router();

router.get("/api/product", (req, res) => {
  res.send("Waiting for code 🤓");
});

module.exports = router;
