// document.getElementById();

let val;

val = document.getElementById("task-title");
val = document.getElementById("task-title").id;
val = document.getElementById("task-title").className;
val = document.getElementById("task-title").classList;

const taskTitle = document.getElementById("task-title");

// Change Style
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "0.5rem";
// taskTitle.style.display = "none";

// Change Content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = '<span style="color:red">Inner HTML</span>';

//---------------------------------------------------
// Query Selector - document.querySelector();
//---------------------------

val = document.querySelector("#task-title");
val = document.querySelector(".card-title");
val = document.querySelector("h5");

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "red";
document.querySelector("ul li:last-child").style.color = "red";
document.querySelector("ul li:nth-child(3)").style.color = "red";
document.querySelector("ul li:nth-child(4)").textContent = "Hello Child";
document.querySelector("ul li:nth-child(odd)").style.background = "#ccc";
document.querySelector("ul li:nth-child(odd)").style.background = "#f4f4f4";

console.log(val);
