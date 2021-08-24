const yargs = require("yargs");
const book = require("./modules/Books");

yargs.command({
  command: "add",
  describe: "To Add A New Book",
  builder: {
    name: {
      describe: "Book Name",
      demandOption: true,
      type: "string",
    },
    author: {
      describe: "Book Author",
      demandOption: true,
      type: "string",
    },
    publisher: {
      describe: "Bool Publisher",
      demandOption: false,
      type: "string",
    },
    category: {
      describe: "Book Category",
      demandOption: false,
      type: "string",
    },
  },

  handler: function (argv) {
    book.addBook(argv.name, argv.author, argv.publisher, argv.category);
  },
});

yargs.command({
  command: "listAll",
  describe: "Lists All Books In The Collection",
  handler: book.listAllBooks,
});

yargs.command({
  command: "listBook",
  describe: "List A Particular Book by Title",
  builder: {
    name: {
      describe: "Title Of The Book To Find",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    book.listBook(argv.name);
  },
});

yargs.command({
  command: "remove",
  describe: "Deletes a book",
  builder: {
    name: {
      describe: "Title of Book",
      demandOption: true,
      type: "string",
    },
    publisher: {
      describe: "Name of publisher",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    book.remove(argv.name, argv.publisher);
  },
});

yargs.parse();
