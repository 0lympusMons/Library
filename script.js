let addBookButton = document.querySelector(".add-book-button");
let modal = document.querySelector(".modal");


addBookButton.addEventListener('click', () => {
    modal.classList.toggle("hide");
});


let form = document.querySelector("form");
form.addEventListener('submit', addBookToLibrary);



let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {

const data = new FormData(form);

    //getting form values
    let bookTitle = data.get("bookTitle");
    let authorName = data.get("bookAuthor");
    let bookPages = data.get("bookPages");
    let readStatus = (data.get("readStatus") == "on")? "Read" : "Not yet read";

    //creating new book object
    let newBook = new Book(bookTitle, authorName, bookPages, readStatus);

    //appending child node in the DOM
    let bookCard = document.createElement('div');
    
    let bookCardContent = `<div class="book__card--title">${bookTitle}</div>
    <div class="book__card--author">${authorName}</div>
    <div class="book__card--pages">${bookPages} pages</div>
    <div class="book__card--read_status"><button class="book__card--read_statusButton">${readStatus}</button></div>
    <div class="book__card--remove"><button >Remove</button></div>`;

    //styling child node
    bookCard.classList.add('book__card');
    bookCard.innerHTML = bookCardContent;
    document.querySelector(".books__wrapper").appendChild(bookCard);

    //preventing refresh
    event.preventDefault();

    //showing modal
    modal.classList.toggle("hide");
    readEventListener();

    return newBook;

}

function readEventListener(){
    let readButtons = document.querySelectorAll(".book__card--read_statusButton");
    readButtons.forEach(function(button){button.addEventListener('click', toggleRead);
    });
}

function toggleRead(e){
    e.target.innerText = (e.target.innerText == "Read")? "Not yet read" : "Read";
}

readEventListener();





