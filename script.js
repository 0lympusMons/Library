let addBookButton = document.querySelector(".add-book-button");

addBookButton.addEventListener('click', () => {
    let authorName = "Dodot";

    let bookCard = document.createElement('div');
    
    let bookCardContent = `<div class="book__card--title">Dune</div>
    <div class="book__card--author">${authorName}</div>
    <div class="book__card--pages">400 pages</div>
    <div class="book__card--read_status"><button>Read</button></div>
    <div class="book__card--remove"><button>Remove</button></div>`;
    
    bookCard.classList.add('book__card');
    bookCard.innerHTML = bookCardContent;
    document.querySelector(".books__wrapper").appendChild(bookCard);

});




let myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}

