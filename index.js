showNotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width:18rem;">
        <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${element} </p>
        <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`;
    });
    let notesEln = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEln.innerHTML = html;
    }
    else {
        notesEln.innerHTML = `<h4 class="my-2">Nothing to show! Add some notes.</h4>`
    }
}
function deletenote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    })
})
localStorage.clear();