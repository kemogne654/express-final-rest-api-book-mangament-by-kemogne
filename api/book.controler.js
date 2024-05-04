const {
  create,
  getBookByEmail,
  deleteBook,
  updateBook,
  getBookById,
  getBook,
} = require("./book.service");
const { sign } = require("jsonwebtoken");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
module.exports = {
  createBook: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (error, results) => {
      if (error) {
        return console.log(error);
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getBook: (req, res) => {
    getBook((error, results) => {
      if (error) {
        return console.log(error);
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getBookById: (req, res) => {
    const id = req.params.id;
    getBookById(id, (error, results) => {
      if (error) {
        return console.log(error);
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateBook: (req, res) => {
    const body = req.body;
    updateBook(body, (error, results) => {
      if (error) {
        return console.log(error);
      } else {
        return res.json({
          success: 1,
          message: "updated successfully",
        });
      }
    });
  },
  deleteBook: (req, res) => {
    const body = req.body;
    deleteBook(body.id, (error, results) => {
      if (error) {
        return console.log(error);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "no data found ",
        });
      }
      return res.json({
        success: 1,
        message: "deleted successfully",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getBookByEmail(body.email, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({
          success: 0,
          message: "internal server error",
        });
      }
      if (!results || results.length == 0) {
        return res.status(401).json({
          success: 0,
          message: " invalide username or password ",
        });
      }
      const book = results[0];
      const passwordMatch = compareSync(body.password, book.password);
      if (!passwordMatch) {
        return res.status(401).json({
          success: 0,
          message: "invalid password or email",
        });
      }
      book.password = undefined;
      const jsontoken = sign({ book }, "your_secret_key", { expiresIn: "1h" });
      return res.json({
        success: 1,
        message: "Login successfull.....",
        token: jsontoken,
      });
    });
  },
};
