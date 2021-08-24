// gets an array and saves it as json file

const fs = require("fs");
const path = require("path");
const bookJson = path.normalize(`${__dirname}/../../db`);

const save = function (books) {
  const bookCollection = JSON.stringify(books);
  fs.writeFileSync(path.join(bookJson, "book.json"), bookCollection);
};

module.exports = save;
