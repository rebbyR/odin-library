const libraryDisplay = document.querySelector('.library-display');
const userInputDialog = document.getElementById('user-input-dialog');
const addBookButton = document.getElementById('add-book-button');
const cancelButton = document.getElementById('cancel-button');
const confirmButton = document.getElementById('confirm-button');
const bookForm = document.querySelector('form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const pageCountInput = document.getElementById('page-count-input');
const readCheckInput = document.getElementById('read-check-input');

const myLibrary = [];
let newBook = undefined;

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

//removes all books from display, then repopulates by running through array
function addBooksToDisplay() {
  while (libraryDisplay.firstChild) {
    libraryDisplay.removeChild(libraryDisplay.firstChild);
  }
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

//show dialog
addBookButton.addEventListener("click", () => {
  userInputDialog.showModal();
});confirm

cancelButton.addEventListener("click", () => {
  userInputDialog.close();
})

confirmButton.addEventListener("click", (event) => {
  event.preventDefault(); //stops form from actually submitting...since it can't
  let newBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, readCheckInput.value);
  newBook.addBookToLibrary();
  userInputDialog.close();
  //form book object here
})
