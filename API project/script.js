const { json } = require("stream/consumers");

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchBooks);

let allBooks = document.getElementById("allBooks");

let content = "";

async function fetchBooks() {
let bookTitle = document.getElementById("booktitle").value;

}

// let myRequest = new XMLHttpRequest();
// myRequest.open(
//     "GET",
//     `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
// );

//     myRequest.send();


    // myRequest.onreadystatechange = () => {
    //     if(myRequest.readyState===4 && myRequest.status===200) {
    //         let convertedBooks = JSON.parse(myRequest.response)
    //         let newBook = convertedBooks.items.map(
    //             (book) =>
    //             `<div class="book>
    //             <img src=${book.volumeInfo.imageLinks.thumbnail}/>
    //                 <h1>${book.volumeInfo.title}</h1>
    //                 <p>${book.volumeInfo.description}</p>
    //                 </div>`
    //             )
    //             .join("")
    //             content +=newBook;

    //     }
    //     allBooks.innerHTML = content;
    // };

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