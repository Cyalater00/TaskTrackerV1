const inputBox = document.getElementById("input-box"); //
const listContainer = document.getElementById("list-contanier");

function addTask(){
  if (inputBox.value === "") {
    alert("Put in a task!"); //It checks if the inputBox is empty.
  } else {
    let li = document.createElement("li"); //If it's not empty, it creates a new list item (li)
    li.innerHTML = inputBox.value; //adds the task from the inputBox to it
    listContainer.appendChild(li); //adds the new list item to the listContainer
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // adds a "x" button next to the task to remove it later
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); //After adding the task, it clears the inputBox and saves the data
}

listContainer.addEventListener("click",function(e){
  //adds an event listener to the listContainer
  if (e.target.tagName === "LI") {
    // when "LI" list item is clikced, it toggles the "checked" on the item list
    e.target.classList.toggle("checked");
    saveData(); //saves the data to remember the changes you made
  } else if (e.target.tagName === "SPAN") {
    //if you click on the little "x" button (SPAN), it removes the whole list item from the listcontainer
    e.target.parentElement.remove();
    saveData(); //saves the data again after removing the item
  }
},false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML); //saves the content of the listContainer to the browser's local storage
}

//This code helps you add tasks, mark them as done, remove tasks, and remember them even when you refresh the page.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();