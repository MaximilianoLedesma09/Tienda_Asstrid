const products = require("../models/productsModel");

const getProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find(
    product => product.id === Number(id)
  );
};

module.exports = {
  getProducts,
  getProductById
};