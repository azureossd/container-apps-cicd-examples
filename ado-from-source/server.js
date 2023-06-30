const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const homeController = require("./controllers/homeController.js");

app.use("/", homeController);

app.listen(port, () => console.log(`Server listening on port: ${port}`));