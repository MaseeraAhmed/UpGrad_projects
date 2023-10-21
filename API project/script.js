const { json } = require("stream/consumers");

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchBooks);

let allBooks = document.getElementById("allBooks");

let content = "";

async function fetchBooks() {
let bookTitle = document.getElementById("booktitle").value;

}

    let response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
    );

    let convertedBooks = await response.json();
    let newBook = convertedBooks.items.map(
        (book) =>
        `<div class="book>
        <img src=${book.volumeInfo.imageLinks.thumbnail}/>
            <h1>${book.volumeInfo.title}</h1>
            <p>${book.volumeInfo.description}</p>
            </div>`
        )
        .join("");
        content +=newBook;

        allBooks.innerHTML = content;