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
        return this.name + ' by ' + this.author+ ', '  + this.pages  + 'pages ' ;
    };
    
}
function addBookToLibrary() {
    
}
