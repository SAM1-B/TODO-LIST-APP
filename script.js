const inputBox= document.getElementById("input");
const listContainer= document.querySelector(".list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must type something!");
    }
    else{
        let li= document.createElement("li");
        let aside= document.createElement("aside");
        li.appendChild(aside);
        

       aside.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(togIt){
    if(togIt.target.tagName === "ASIDE"){
        togIt.target.classList.toggle("checkedin");

        saveData();
    }
    
    else if(togIt.target.tagName === "SPAN"){
        togIt.target.parentElement.remove();

        saveData();
    }
   
})

// TO SAVE DATA ON THE SERVER

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML=localStorage.getItem("data");
}

getData();