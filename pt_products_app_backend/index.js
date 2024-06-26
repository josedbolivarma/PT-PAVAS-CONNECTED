const express = require("express");
const port = 4200;

const cors = require("cors");

const app = express();

app.use(cors());


const productsRouter = require("./src/routes/products.js");

app.use("/products", productsRouter);

app.listen(port, () => {
    console.log(`Server run on port ${port}`);
})