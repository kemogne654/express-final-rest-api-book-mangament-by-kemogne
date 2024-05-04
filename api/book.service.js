const pool = require("../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "INSERT INTO bookmant (title, author, publishedDate, email, password) VALUES (?, ?, ?, ?, ?)",
      [data.title, data.author, data.publishedDate, data.email, data.password],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
  getBook: (callBack) => {
    pool.query(
      "SELECT title, author, publishedDate, email, password FROM bookmant",
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
  getBookById: (id, callBack) => {
    pool.query(
      "SELECT title, author, publishedDate, email, password FROM bookmant WHERE id=?",
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
  updateBook: (data, callBack) => {
    pool.query(
      "UPDATE bookmant SET title=?, author=?, publishedDate=?, email=?, password=? WHERE id=?",
      [
        data.title,
        data.author,
        data.publishedDate,
        data.email,
        data.password,
        data.id,
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results[0]);
        }
      }
    );
  },
  deleteBook: (data, callBack) => {
    pool.query(
      "DELETE FROM bookmant WHERE id=?",
      [data.id],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
  getBookByEmail: (email, callBack) => {
    pool.query(
      "SELECT title, author, publishedDate, email, password FROM bookmant WHERE email=?",
      [email],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
