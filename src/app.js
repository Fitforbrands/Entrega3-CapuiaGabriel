import express from "express";

import productos from "./productManager.js";

const app = express();
const PORT = 8080;

// query limit productos

app.get("/products", (req, res) => {
  const { limit } = req.query;

  if (limit) {
    const productLimit = productos.slice(0, limit);
    if (productLimit) {
      return res.json(productLimit);
    } else {
      res.json(productos);
    }
  }
  res.json(productos);
});

// Products por ID con params
app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const producto = productos.find((user) => user.id === Number(id));

  if (producto) {
    res.json(producto);
  } else {
    res.json("product not found");
  }
});

app.listen(8080, () => console.log(`Listening on port ${PORT}`));
