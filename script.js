//query selectors
const libraryDisplay = document.querySelector('.library-display');


//create elements




const myLibrary = [];

function Book(title, author, pageCount, readCheck) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readCheck = readCheck;
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this);
  addBooksToDisplay();
}

function addBooksToDisplay() {
  for (i = 0; i < myLibrary.length; i++) {
    let bookCell = document.createElement('div');
    let bookTitle = document.createElement('p');
    bookTitle.textContent = myLibrary[i].title;
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = myLibrary[i].author;
    let bookPageCount = document.createElement('p');
    bookPageCount.textContent = myLibrary[i].pageCount;
    let bookReadCheck = document.createElement('button');
    bookReadCheck.textContent = myLibrary[i].readCheck;
    if (bookReadCheck.textContent === 'read') {
      bookReadCheck.classList.toggle('read');
    } else bookReadCheck.classList.toggle('not-read');
    bookCell.appendChild(bookTitle);
    bookCell.appendChild(bookAuthor);
    bookCell.appendChild(bookPageCount);
    bookCell.appendChild(bookReadCheck);
    bookCell.classList.add('book-cell');
    libraryDisplay.appendChild(bookCell);
  }
}

const newBook = new Book('fellowship', 'jrr', 200, 'not read');
const newBook2 = new Book('ex', 'test', 13, 'read');