// Replacing Elements

// Create an Element
const newHeading = document.createElement("h2");
newHeading.className = "";
newHeading.id = "task-title";

// Add Text Node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old Heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");
// Replace Child
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// ------------------
// REMOVING ELEMENT
// ------------------
const li = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove List Item
li[0].remove();

// Remove Child Element
list.removeChild(li[3]);

// ----------------------
//  CLASSES & ATTRIBUTES
// ----------------------
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

console.log(firstLi);
console.log(link);

let val;

// Classes
val = link.className;
val = link.classList;

link.classList.add("test");
link.classList.remove("test");

val.forEach(function (v) {
  console.log(v);
});

// Attributes
val = link.getAttribute("href");
link.setAttribute("href", "http://google.com");

val = link.getAttribute("href");
val = link.hasAttribute("href");
val = link.hasAttribute("title");

link.setAttribute("title", "Google");
link.removeAttribute("title");

val = link;

console.log(val);
