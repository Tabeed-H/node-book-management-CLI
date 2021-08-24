const chalk = require("chalk");
const loadBook = require("./Helpers/Book.LOAD");
const saveBook = require("./Helpers/Bool.SAVE");
const checkBook = require("./Helpers/Book.DUBLICATE");
const save = require("./Helpers/Bool.SAVE");

//     adds a new books to the collection
exports.addBook = function (name, author, publisher = "NA", category = "NA") {
  //   loads books collection
  const books = loadBook();

  //   checks if the books is already present or not
  if (checkBook(name)) {
    console.log(chalk.red("Book Already Exists"));
    return;
  }

  //   new book model
  const newBook = {
    name: name,
    author: author,
    publisher: publisher,
    category: category,
  };

  //   adds new book
  books.push(newBook);

  //   saves new collection
  saveBook(books);

  //   Messge
  console.log(chalk.green("Book Added!"));
};

// Lists all books present in the collection
exports.listAllBooks = function () {
  const books = loadBook();

  books.forEach((book, index) => {
    console.log(`${index + 1}\t${chalk.bold(book.name)}\tby\t${book.author}`);
  });
};

// list a particular book by title
exports.listBook = function (key) {
  const books = loadBook();

  const book = books.find((book) => book.name === key);

  //   checks if the book is present
  if (!book) {
    console.log(chalk.red("Book Not Found"));
    return;
  }

  //   prints book details
  console.log(chalk.bold(`Name\tAuthor\tPublisher\tCategory`));
  console.log(
    `${book.name}\t${book.author}\t${book.publisher}\t${book.category}`
  );
};

exports.remove = function (name, publisher) {
  const books = loadBook();

  const updateBookCollection = books.filter(
    (book) => book.name !== name && book.publisher !== publisher
  );

  save(updateBookCollection);
  console.log(chalk.green("Collection Updated!"));
};
