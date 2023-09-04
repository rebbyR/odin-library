const myLibrary = [];

function Book(title, author, pageCount, readCheck) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readCheck = readCheck;
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this);
}

const newBook = new Book('fellowship', 'jrr', 200, 'not read');
const newBook2 = new Book('ex', 'test', 13, 'read');

newBook.addBookToLibrary();
newBook2.addBookToLibrary();

console.log(myLibrary);