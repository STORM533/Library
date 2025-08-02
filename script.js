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
        return this.name + ' by ' + this.author+ ', '  + this.pages  + ' pages . status: ' + this.status;
    };
}

function addBookToLibrary() {
    myLibrary.push(theHobbit.info());

}

console.log(myLibrary);


function details(){
    for(let i = 0; i<10; i++) {
            const form1 = document.querySelector("#names").value;
            const form2 = document.querySelector("#author").value;
            const form3  = document.querySelector("#pages").value;
            const form4  = document.querySelector("#status").value;
            const theBook  = new Book(form1 , form2 , form3 , form4);
            console.log(theBook.info());
            myLibrary.push(theBook.info());
    }

}

function forms() {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + #btn");
    const closeButton = document.querySelector("dialog button");
    const btn = document.querySelector("#button");
    const form  = document.querySelector("#myForm")
    btn.addEventListener("click" , () =>{
        details();              
        dialog.close();
        form.reset();
    });
// "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

// "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });
    form.addEventListener('submit',(event) => {
        event.preventDefault();
    });
}
forms();

