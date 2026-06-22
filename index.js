const express = require("express");
const app = express();

app.use(express.json());

const productRouter = require("./src/routes/productRouter");
const authRouter = require("./src/routes/authRouter");

app.use("/products", productRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("API Tienda funcionando");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});