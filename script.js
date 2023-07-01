let addBookButton = document.querySelector(".add-book-button");
let modal = document.querySelector(".modal");




addBookButton.addEventListener('click', () => {
    modal.classList.toggle("hide");
});


let form = document.querySelector("form");
form.addEventListener('submit', addBookToLibrary);



let myLibrary = [];

function Book(title, author, pages, readStatus) {
    // the constructor...
}

function addBookToLibrary() {

const data = new FormData(form);

    //getting form values
    let bookTitle = data.get("bookTitle");
    let authorName = data.get("bookAuthor");
    let bookPages = data.get("bookPages");
    let readStatus = (data.get("readStatus") == "on")? "Read" : "Not yet read";

    //appending child node in the DOM
    let bookCard = document.createElement('div');
    
    let bookCardContent = `<div class="book__card--title">${bookTitle}</div>
    <div class="book__card--author">${authorName}</div>
    <div class="book__card--pages">${bookPages} pages</div>
    <div class="book__card--read_status"><button>${readStatus}</button></div>
    <div class="book__card--remove"><button>Remove</button></div>`;

    //adding event listener to remove and read status
    let readStatusButton = document.querySelector(".book__card--read_status");

    readStatusButton.addEventListener('click', ()=>{
        readStatusButton.textContent = (data.get("readStatus") == "on")? "Read" : "Not yet read";
   });

    //styling child node
    bookCard.classList.add('book__card');
    bookCard.innerHTML = bookCardContent;
    document.querySelector(".books__wrapper").appendChild(bookCard);

    //preventing refresh
    event.preventDefault();

    //showing modal
    modal.classList.toggle("hide");


}

