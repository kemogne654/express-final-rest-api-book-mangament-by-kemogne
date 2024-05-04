const pool = require("../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into bookmanT (title,author,publishedDate) values(?,?,?)",
      [data.title, data.author, data.publishedDate],
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
    pool.query("select title,author,publishedDate from bookmanT "),
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      };
  },
  getBookById: (id, callBack) => {
    pool.query("select title,author,publishedDate from bookmanT where id=?"),
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      };
  },
  updateBook: (data, callBack) => {
    pool.query("update bookmanT set title=?,author=?,publishedDate where id=?"),
      [data.title, data.author, data.publishedDate, data.id],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results[0]);
        }
      };
  },
  deleteBook: (data, callBack) => {
    pool.query("delete from bookmanT where id=?"),
      [data.id],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      };
  },
  getBookByemail: (id, callBack) => {
    pool.query("select title,author,publishedDate from bookmanT where email=?"),
      [eail],
      (error, results) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      };
  },
};
