document.addEventListener("DOMContentLoaded",()=>{
    let addbtn = document.getElementById("addbtn");
    let notesContainer = document.getElementById("notescontainer");
    let notes = document.querySelectorAll(".input");

        function showNotes(){
            notesContainer.innerHTML = localStorage.getItem("notes");
        }
        showNotes();
    function updateStorage(){
        localStorage.setItem("notes",notesContainer.innerHTML);
    }
    addbtn.addEventListener("click",()=>{
        let paper = document.createElement("p");
        paper.className = "input";
        paper.setAttribute("contenteditable","true");
        let img = document.createElement("img");
        img.className = "trash";
        img.src ="./src/assets/trash.png";
        notesContainer.appendChild(paper).appendChild(img);
        });
    notesContainer.addEventListener("click",(e)=>{
        if(e.target.tagName === "IMG"){
            e.target.parentElement.remove();
            updateStorage();
        }
        else if(e.target.tagName === "P"){
            notes = document.querySelectorAll(".input");
            notes.forEach(nt => {
                nt.addEventListener("input", function() {
                    updateStorage();
                });
            });
            
        }
    })
})