const productService = require("../services/productService");

const getProducts = (req, res) => {
  const products = productService.getProducts();

  res.json(products);
};

const getProductById = (req, res) => {

  const product = productService.getProductById(
    req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado"
    });
  }

  res.json(product);
};

module.exports = {
  getProducts,
  getProductById
};