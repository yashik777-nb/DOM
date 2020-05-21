const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

taskInput.value = "";

form.addEventListener("submit", runEvent);

// KeyDown
// taskInput.addEventListener("keydown", runInputEvent);

// KeyUp
// taskInput.addEventListener("keyup", runInputEvent);

// Key Press
// taskInput.addEventListener("keypress", runInputEvent);

// Focus
// taskInput.addEventListener("focus", runInputEvent);

// Blur
// taskInput.addEventListener("blur", runInputEvent);

// Cut
// taskInput.addEventListener("cut", runInputEvent);

// Paste
// taskInput.addEventListener("paste", runInputEvent);

// Input Event
taskInput.addEventListener("input", runInputEvent);

// Change
select.addEventListener("change", runInputEvent);

function runInputEvent(e) {
  console.log(`Event Type: ${e.type}`);

  // Capture the key press
  console.log(`Key Pressed: ${e.target.value} and ASCII value: ${e.keyCode}`);
  heading.innerText = e.target.value;
}

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  // Get Input value
  console.log(`Task Input: ${taskInput.value}`);

  e.preventDefault();
}
