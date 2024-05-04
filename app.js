require("dotenv").config();
const express = require("express");
const app = express();
const { routerResult } = require("./api/book.router");
app.use(express.json());
app.use("/", routerResult);
app.listen(process.env.APP_PORT, () => {
  console.log("server running successfully on port : ", process.env.APP_PORT);
});
