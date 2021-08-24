const fs = require("fs");
const path = require("path");
const loadBooks = require("./Book.LOAD");
const bookJson = path.normalize(`${__dirname}/../../db`);

const checkDublicateBook = function (key) {
  const books = loadBooks();
  const copyPresent = books.some((book) => book.name === key);
  return copyPresent;
};

module.exports = checkDublicateBook;
