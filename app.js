require("dotenv").config();
const express = require("express");
const app = express();
const UserRouter = require("./api/book.router");
app.use(express.json());
app.use("/api/book", UserRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("server running successfully on port : ", process.env.APP_PORT);
});
