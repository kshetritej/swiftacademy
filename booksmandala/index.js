const inputBox = document.getElementById("add-new-book")
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", addNewBook)

const container = document.querySelectorAll(".container")[0];

 const books = ["Atomic Habits", "Alchemist", "Psychology of Money"];


function addNewBook(e) {
    e.preventDefault();
    const bookName = inputBox.value.trim();

    if(bookName == ""){
        return;
    }
    
    const newBook = inputBox.value;
   books.push(newBook); 
   inputBox.value = "";
   renderBooks();
}


function renderBooks() {
    container.innerHTML = "";

    books.forEach((book, index) => {
        const bookList = document.createElement("div");
        bookList.className = "book-container";
        bookList.textContent = book;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", () => {
            books.splice(index, 1);
            renderBooks();
        })

        container.append(bookList);
        bookList.appendChild(deleteBtn);
    })
}

