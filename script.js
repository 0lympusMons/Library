//data structures

let myLibrary = [];

class Book{
    constructor(title, author, pages, readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    };
}

function addBookToLibrary(bookTitle, authorName, bookPages, readStatus) {

    let newBook = new Book(bookTitle, authorName, bookPages, readStatus);
    myLibrary.push(newBook);
}


//user interface

let addBookButton = document.querySelector(".add-book-button");
let modal = document.querySelector(".modal");


addBookButton.addEventListener('click', () => {

    openAddBookModal();
    document.addEventListener("keydown", detectEscapeKey);

});

modal.addEventListener("click", (e) => {
    // e.stopPropagation();
    modal.classList.add("hide");
});

function openAddBookModal() {
    modal.classList.remove("hide");

};

function closeAddBookModal(e) {
    modal.classList.add("hide");

}

function detectEscapeKey(e) {
    if (e.key == "Escape") {
        modal.classList.toggle("hide");
        document.removeEventListener("keydown", detectEscapeKey);
    }
}

function addBookToDOM() {

    let data = new FormData(form);

    //getting form values
    let bookTitle = data.get("bookTitle");
    let authorName = data.get("bookAuthor");
    let bookPages = data.get("bookPages");
    let readStatus = (data.get("readStatus") == "on") ? "Read" : "Not yet read";

    //creating new book object
    addBookToLibrary(bookTitle, authorName, bookPages, readStatus);


    //appending child node in the DOM
    let bookCard = document.createElement('div');

    let bookCardContent = `<div class="book__card--title">${bookTitle}</div>
    <div class="book__card--author">${authorName}</div>
    <div class="book__card--pages">${bookPages} pages</div>
    <div class="book__card--read_status"><button class="book__card--read_statusButton">${readStatus}</button></div>
    <div class="book__card--remove"><button class="removeBook">Remove</button></div>`;

    //styling child node
    bookCard.classList.add('book__card');
    bookCard.innerHTML = bookCardContent;
    document.querySelector(".books__wrapper").appendChild(bookCard);

    //preventing refresh
    event.preventDefault();

    //closing modal
    closeAddBookModal();

    //attaching event listeners to new buttons
    //!! performance issue !!
    update();



}


let form = document.querySelector("form");
form.addEventListener('submit', addBookToDOM);
form.addEventListener('click', e => e.stopPropagation());


function readEventListener() {
    let readButtons = document.querySelectorAll(".book__card--read_statusButton");
    readButtons.forEach(button => button.addEventListener('click', toggleRead));
}


function toggleRead(e) {
    e.target.innerText = (e.target.innerText == "Read") ? "Not yet read" : "Read";
    let readStatus = e.target.innerText;

    let bookTitle = e.target.parentNode.parentNode.querySelector(".book__card--title").innerText;
    console.log(bookTitle);


    myLibrary.forEach((book, index) => {
        if (book.title == bookTitle) {
            book.readStatus = readStatus;
        }
    });
}


function addRemoveEventListener() {
    let removeBookButton = document.querySelectorAll(".removeBook");
    removeBookButton.forEach(button => button.addEventListener('click', removeBook));

    function removeBook(e) {
        let bookTitle = e.target.parentNode.parentNode.querySelector(".book__card--title").innerText;
        console.log(bookTitle);

        myLibrary.forEach((book, index) => {
            if (book.title == bookTitle)
                myLibrary.splice(index, 1);
        });
        e.target.parentNode.parentNode.remove();

    addIndexToCards();

    }

    //remove from array
}

function addIndexToCards(){
    let bookCards = document.querySelectorAll('.book__card');
    bookCards.forEach( (card, index) => {
        card.dataset.index = index;
    });
}

function update(){
    addIndexToCards();
    readEventListener();
    addRemoveEventListener();
};

update();







