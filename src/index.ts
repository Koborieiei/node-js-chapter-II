import productRoutes from "./routes/product.route";
import express = require("express");
import { db } from "./datasource";

const app = express();
const PORT = 8000;

db.initialize();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server is now running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => res.send("Welcome to Node.js Chapter 2"));
