// Book Class: Represents a Book
class Book{
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
        const StoredBooks =[{
            titulo:'Livro Um',
            autor:'Marcelo Guimaraes',
            isbn:'666666'
        },
    {
        titulo:'Livro Sem paginas',
        autor:'Smith',
        isbn:'555555' 
    }];
    const books = StoredBooks;

    books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.titulo}</td> 
        <td>${book.autor}</td> 
        <td>${book.isbn}</td> 
        <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td> 
        `;

        list.appendChild(row)
    }
}
// Store Class: Handles Storage

// Event: Display Book

document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: Add a Book

// Event: Remove a Book