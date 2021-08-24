// reads the json data and returns an array

const fs = require("fs");
const path = require("path");
const bookJson = path.normalize(`${__dirname}/../../db`);

loadAllBooks = function () {
  try {
    const data = fs.readFileSync(path.join(bookJson, "book.json"));
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = loadAllBooks;
