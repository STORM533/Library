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
    const form1 = document.querySelector("#names").value;
    const form2 = document.querySelector("#author").value;
    const form3  = document.querySelector("#pages").value;
    const form4  = document.querySelector("#status").value;
    const theBook  = new Book(form1 , form2 , form3 , form4);
    console.log(theBook);
    myLibrary.push(theBook);
    showLibrary();

}
function forms() {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + #btn");
    const closeButton = document.querySelector("dialog button");
    const btn = document.querySelector("#button");
    const form  = document.querySelector("#myForm")
    btn.addEventListener("click" , () =>{
                     
        dialog.close();
        
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
        addBookToLibrary();
        form.reset();

    });
}
function showLibrary(){
    
    const list = document.querySelector("#list");
    list.innerHTML="";
    myLibrary.forEach((theBook , idx) =>{
        const li = document.createElement("li");
        li.classList.add("lists");
        li.style.fontSize ="30px";
        
        li.textContent = theBook.info();
        const removebtn = document.createElement("button");
        removebtn.style.borderRadius = "20px";
        removebtn.style.height = "30px";
        removebtn.style.width = "90px";
        removebtn.textContent = "remove";
        removebtn.addEventListener("click" , () =>{
            myLibrary.splice(idx , 1);
            showLibrary();
        });
   const statusSelect = document.createElement("select");
   statusSelect.style.marginLeft="10px";
   statusSelect.style.marginRight = "10px";
   statusSelect.style.width  = "150px";
   statusSelect.style.height = "30px";
   statusSelect.style.borderRadius = "20px";
   statusSelect.style.borderColor = "aquamarine";
    ["not-read", "read", "yet-to-read"].forEach((val) => {
      const opt = document.createElement("option");
      opt.value = val;
      opt.textContent =
        val === "not-read"
          ? "NOT READ"
          : val === "read"
          ? "READ COMPLETELY"
          : "YET TO READ";
      if (theBook.status === val) opt.selected = true;
      statusSelect.appendChild(opt);
    });

    statusSelect.addEventListener("change", (e) => {
      theBook.status = e.target.value;
      // optionally update display immediately; we can re-render:
      showLibrary();
    });
        li.appendChild(statusSelect);
        li.appendChild(removebtn);
        list.appendChild(li);
    });
}
showLibrary();
forms();




