// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("Clear Taks Button Clicked");

//   e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  console.log("Clicked");

  // Event Object
  let val;

  val = e;

  // Event Target Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // collection list
  e.target.innerText = "Hello";

  // Event Type
  val = e.type;

  //   Time Stamp
  val = e.timeStamp;

  // Co-ordinates of the event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Co-ordinates of the event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  val = console.log(val);
}
