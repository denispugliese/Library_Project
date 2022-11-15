class Book{
    id;
    title;
    author;
    hasRead;

    constructor(title, author, read){
        this.title = title;
        this.author = author;
        this.hasRead = read;
    }
}

class Library{
    bookCount;
    books;

    constructor(count, booksArray){
        this.bookCount = count;
        this.books = booksArray;
    }

    markRead(checkbox, id){
        this.books.forEach( book => {
            if(book.id == id){
                book.hasRead = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }

    addBook(){
        const inputBookTitleElement = document.querySelector("#input-bookTitle");
        const inputBookAuthorElement = document.querySelector("#bookAuthor");
        const inputBookHasReadElement = document.querySelector("#input-bookHasRead");
        const tableBodyContent = document.querySelector("booksTable");

        const book = new Book(inputBookTitleElement.value, 
            inputBookAuthorElement.value, inputBookHasReadElement.checked);
        this.books.push(book);

            const tr = document.createElement("tr");
            const tdTitle = document.createElement("td");
            tdTitle.textContent = book.title;
            const tdAuthor = document.createElement("td");
            tdAuthor.textContent = book.author;
            const tdHasRead = document.createElement("td");
            const inputHasRead = document.createElement("input");
            inputHasRead.type = "checkbox";
            inputHasRead.checked = book.hasRead;
            inputHasRead.disabled = true;

            tdHasRead.append(inputHasRead);
            tr.append(tdTitle);
            tr.append(tdAuthor);
            tr.append(tdHasRead);
            tableBodyContent.append(tr);

            this.bookCount++;

            inputBookTitleElement.value = "";
            inputBookAuthorElement.value = "";
            inputBookHasReadElement.checked = false;
            
    }

}

const bookLibrary = new Library(1, [new Book("Name of the Wind", "Patrick Rothfuss", true)]);

const newBookForm = document.querySelector("#newBookForm");
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookLibrary.addBook();
});
