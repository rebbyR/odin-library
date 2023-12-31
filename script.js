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
let readCheckButtons = document.querySelectorAll('.read, .not-read');
//let removeButton = document.createElement('button');
let removeButtons = document.querySelectorAll('.remove-button');


const myLibrary = [];
//let newBook = undefined;

function Book(title, author, pageCount, readCheck) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readCheck = readCheck;
}

function updateRemoveButtons() {
  removeButtons = document.querySelectorAll('.remove-button');
  for (i=0; i < removeButtons.length; i++) {
    i.addEventListener('click', () => {
      event.target.classList.toggle('to-be-removed');
      removeBook();
    })
  }
}

function removeBook() {
  for (i=0; i < removeButtons.length; i++) {
    if (removeButtons[i].classList.contains('to-be-removed')) {
      myLibrary.splice(i, 1);
    }
  }
  console.log(myLibrary);
  addBooksToDisplay();
}

function updateRemoveButtons() {
  removeButtons = document.querySelectorAll('.remove-button');
  for (i of removeButtons) {
    i.addEventListener('click', () => {
      event.target.classList.add('to-be-removed');
      removeBook();
      console.log(myLibrary);
    })
  }
}

function updateReadInformation() {
  readCheckButtons = document.querySelectorAll('.read, .not-read');
  for (i of readCheckButtons) {
    i.addEventListener('click', () => {
      updateReadStatusDisplay();
      updateReadCheckOfBooks();
    });
  }
  return readCheckButtons;
}

function updateReadStatusDisplay() {
  event.target.classList.toggle('read');
  event.target.classList.toggle('not-read');  
  if (event.target.textContent === 'read') {
    event.target.textContent = 'not read';
  } else {
    event.target.textContent = 'read';
  }
}

function updateReadCheckOfBooks() {
  for (i = 0; i < readCheckButtons.length; i++) {
    if (readCheckButtons[i].classList.contains('read')) {
      myLibrary[i].readCheck = true;
    }
    else if (readCheckButtons[i].classList.contains('not-read')) {
      myLibrary[i].readCheck = false;
    }
  }
}

//runs addBooksToDisplay() and updateButtons()
Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this);
  addBooksToDisplay();
  updateReadInformation();
  updateRemoveButtons();
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
    if (bookReadCheck.textContent === 'read' || bookReadCheck.textContent === 'true' || myLibrary[i].readCheck === true) {
      bookReadCheck.classList.add('read');
      bookReadCheck.textContent = 'read'; 
    } else {
      bookReadCheck.classList.toggle('not-read');
      bookReadCheck.textContent = 'not read';
    }
    let removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-button');
    bookCell.appendChild(bookTitle);
    bookCell.appendChild(bookAuthor);
    bookCell.appendChild(bookPageCount);
    bookCell.appendChild(bookReadCheck);
    bookCell.appendChild(removeButton);
    bookCell.classList.add('book-cell');
    libraryDisplay.appendChild(bookCell);
  }
  updateRemoveButtons();
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
  let newBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, readCheckInput.checked);
  newBook.addBookToLibrary();
  userInputDialog.close();
})