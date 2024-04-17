import express from "express";
import { ProductManager } from "./ProductManager.js";

const app = express();
const products = new ProductManager();
const arraylimit1 = products.getProducts;

app.get("/products", async (rec, res) => {
  const limit = rec.query.limit;

  if (limit) {
    let newArraylimit = await products.getProducts;
    if (limit >= arraylimit1.length) {
      res.send(await { ...arraylimit1 });
    } else {
      newArraylimit.splice(0, newArraylimit.length - limit);
      res.send(await { ...newArraylimit });
    }
  } else {
    res.send(await { ...arraylimit1 });
  }
});

app.get("/products/:pid", async (rec, res) => {
  const id = rec.params.pid;
  const objectById = await arraylimit1[id];
  if (objectById) {
    res.send(await arraylimit1[id]);
  } else {
    res.send("<h1>Error!! Producto no encontrado</h1>");
  }
});

app.listen(8080, () => {
  console.log("Servidor activo");
});
