const myLibrary = [];
function Book(name , author , pages , status){
    if(!new.target){
        throw Error("you must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return this.name + ' by ' + this.author+ ', '  + this.pages  + ' pages .' ;
    };
}

const theHobbit = new Book('adasd','adadaw','adasdad','adwasda');
const theRedeem = new Book('asdasd','awdasd','adasda','adasd');

function addBookToLibrary() {
    myLibrary.push(theHobbit.info());
    myLibrary.push(theRedeem.info());
}
console.log(addBookToLibrary());
console.log(myLibrary);
console.log(theHobbit.info());
console.log(theRedeem.info());

function createBooks(){
    
}
const container = document.querySelector(".container");
const books = document.createElement("div");
books.classList.add("books");
books.textContent= myLibrary[0];
container.appendChild(books);
const button = document.createElement("button");
button.classList.add("createBook");
button.textContent  ="ADD BOOKS";
    button.addEventListener("click" ,() =>{

    });
    container.appendChild(button);
    

