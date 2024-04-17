import fs from "fs";

export class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./products.txt";
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let id;
    this.products < 1 ? (id = -1) : (id = this.products.length - 1);

    const product = {
      id: id + 1,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    const completeSpace = Object.values(product).includes(undefined);
    const codeExiste = this.products.some((element) => element.code === code);
    if (completeSpace) {
      console.log("se necesitan todas las propiedades");
    } else if (codeExiste) {
      console.log("El codigo ya existe");
    } else {
      this.products.push(product);
      fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
  }

  get getProducts() {
    const getProducts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    return getProducts;
  }

  getProductById(id) {
    const getProducts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    const productId = getProducts.find((product) => product.id === id);
    if (productId) {
      return productId;
    } else {
      console.error("Not Found");
    }
  }
  updateProduct(id, title, description, price, thumbnail, code, stock) {
    const product = {
      id: id,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    const getProducts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    const upgrateArray = getProducts.filter((element) => element.id !== id);
    const completeSpace = Object.values(product).includes(undefined);
    const sameCode = upgrateArray.some(
      (elemet) => product.code === elemet.code
    );
    if (sameCode) {
      console.log("Ya hay un producto con ese codigo");
    } else if (completeSpace) {
      console.log("Llene todos los campos incluyendo el id");
    } else {
      const newArray = [...upgrateArray, product];
      this.products = newArray;
      fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
  }

  deleteProduct(id) {
    const getProducts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    const upgrateArray = getProducts.filter((element) => element.id !== id);

    if (getProducts.length === upgrateArray.length) {
      console.error("Producto no encontrado");
    } else {
      this.products = [...upgrateArray];
      fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
  }
}

// ----------------------------------- Prueba -------------------------------------------

const producto1 = new ProductManager();

producto1.addProduct(
  "manzana ",
  "fruta roja",
  "$2250",
  "Aqui va la imagen",
  5,
  20
);
producto1.addProduct("uva ", "fruta roja", "$150", "Aqui va la imagen", 6, 250);
producto1.addProduct(
  "naranja ",
  "fruta naranja",
  "$2800",
  "Aqui va la imagen",
  7,
  12
);
producto1.addProduct(
  "manzana ",
  "fruta verde",
  "$2250",
  "Aqui va la imagen",
  8,
  10
);

producto1.addProduct(
  "banana ",
  "fruta amarilla",
  "$2300",
  "Aqui va la imagen",
  9,
  14
);
producto1.addProduct(
  "kiwi ",
  "fruta verde",
  "$1800",
  "Aqui va la imagen",
  10,
  12
);
producto1.addProduct(
  "durazno ",
  "fruta naranja",
  "$2100",
  "Aqui va la imagen",
  11,
  19
);
producto1.addProduct(
  "guayaba ",
  "fruta amarilla",
  "$2050",
  "Aqui va la imagen",
  12,
  8
);
producto1.addProduct(
  "pera ",
  "fruta verde",
  "$2300",
  "Aqui va la imagen",
  13,
  8
);
producto1.addProduct(
  "aguacate ",
  "fruta verde",
  "$2600",
  "Aqui va la imagen",
  14,
  15
);
