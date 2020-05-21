// Set Local Storage Item
localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// Set Session Storage Item
sessionStorage.setItem("name", "Yash");

// Remove From Storage
// localStorage.removeItem("name");

// Get From Storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name, age);

// Clear Storage
// localStorage.clear();
console.log(
  "Cleared Storage",
  localStorage.getItem("name"),
  localStorage.getItem("age")
);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("123");
  const task = document.getElementById("task").value;
  console.log(task);

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  // Add to Local Storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

const tasks1 = JSON.parse(localStorage.getItem("tasks"));
tasks1.forEach(function (task) {
  console.log(task);
});
