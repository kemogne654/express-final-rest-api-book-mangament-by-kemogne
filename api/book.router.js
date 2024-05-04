const {
  login,
  deleteBook,
  updateBook,
  getBookById,
  getBook,
  createBook,
} = require("./book.controler");
const { checkToken } = require("../auth/token_validation");
const router = require("express").Router();
router.get("/", checkToken, getBook);
router.get("/:id", checkToken, getBookById);
router.post("/", checkToken, createBook);
router.delete("/", checkToken, deleteBook);
router.patch("/", checkToken, updateBook);
router.post("/login", login);

module.exports = router;
