const express = require("express");

const app = express();

const productRouter =  require("./src/routes/productRouter");
const userRouter = require("./src/routes/userRouter");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Tienda funcionando");
});

app.use("/users", userRouter);

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log(
    "Servidor corriendo en http://localhost:3000"
  );
});