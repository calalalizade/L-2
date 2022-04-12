let add_button = document.getElementById("add_btn");
let firstE = document.querySelector("li");
let sortButton = document.querySelector(".sort");

// Add New Task to to-do list
let id = 1;
add_button.addEventListener('click' , ()=>{
    if(firstE.style.display === "none"){
        firstE.style.display = "block"; 
        return;
    }

    let itm = firstE;
    let cln = itm.cloneNode(true);
    cln.setAttribute('id' , id)
    cln.querySelector("input").disabled = true;
    cln.querySelector("input").setAttribute("value", firstE.querySelector("input").value);
    cln.querySelector(".x").setAttribute("onclick","this.parentElement.remove()");
    document.getElementById("myList").appendChild(cln);

    id++;
     
    if (firstE.style.display === "none") {
        firstE.style.display = "block"; 
    } else {
        firstE.style.display = "none";
    }
    firstE.querySelector("input").value = "";
})


// Sort Functionality
let bool = false;
sortButton.addEventListener('click', ()=>{
    if(!bool){
        sortButton.src = "./Resources/des_normal.svg"
    }else{
        sortButton.src = "./Resources/asc_normal.svg"
    }

    let ul = document.getElementById("myList");
    let e = document.getElementsByClassName("task_input");
    let arr = Array.from(e);

    let compare = (a, b) => {
        return a.value - b.value;}

    arr.sort(compare);
    
    if(bool){
        arr.reverse();
    };
    
    for(let i = 0; i < arr.length; i++){
        ul.append(arr[i].parentElement);
    }

    bool = bool ? false : true;
})


// Hover For Remove Button 
function hover(element) {
    element.setAttribute('src', './Resources/x_button_hover.svg');
}
function unhover(element) {
    element.setAttribute('src', './Resources/x_button.svg');
}