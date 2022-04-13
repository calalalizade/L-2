let add_button = document.getElementById("add_btn");
let firstE = document.querySelector("li");
let sortButton = document.querySelector(".sort");

// Add New Task to to-do list
let id = 1;
add_button.addEventListener('click' , ()=>{
    // Unhide input field
    if(firstE.style.display === "none"){
        firstE.style.display = "block"; 
        return;
    }

    // Create a new task and add to list
    let itm = firstE;
    let cln = itm.cloneNode(true);
    cln.setAttribute('id' , id)
    cln.querySelector("input").disabled = true;
    cln.querySelector("input").setAttribute("value", firstE.querySelector("input").value);
    cln.querySelector(".x").setAttribute("onclick","this.parentElement.remove()");
    document.getElementById("myList").appendChild(cln);
    id++;
    
    // Hide input field
    if (firstE.style.display !== "none")
        firstE.style.display = "none";

    // Clear input field
    firstE.querySelector("input").value = "";
})


// Sort Functionality
let bool = false;
sortButton.addEventListener('click', ()=>{
    let ul = document.getElementById("myList");
    let e = document.getElementsByClassName("task_input");
    let arr = Array.from(e);

    let compare = (a, b) => {
        return a.value - b.value;}

    arr.sort(compare);
    
    if(bool){
        arr.reverse();
        sortButton.src = "./Resources/asc_normal.svg"
    }else{
        sortButton.src = "./Resources/des_normal.svg"
    }
    
    // Add sorted version to list
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