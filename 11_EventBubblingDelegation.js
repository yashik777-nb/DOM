// Event Bubbling
// document.querySelector(".card-title").addEventListener("click", function (e) {
//   console.log(`Event Type: ${e.type} on Card Title`);
// });

// document.querySelector(".card-content").addEventListener("click", function (e) {
//   console.log(`Event Type: ${e.type} on Card Content`);
// });

// document.querySelector(".card").addEventListener("click", function (e) {
//   console.log(`Event Type: ${e.type} on Card `);
// });

// document.querySelector(".col").addEventListener("click", function (e) {
//   console.log(`Event Type: ${e.type} on Col `);
// });

// Event Delegation
const deleteItem = document.querySelector(".delete-item");
deleteItem.addEventListener("click", delItem);

// document.body.addEventListener("click", delItem);

function delItem(e) {
  console.log(e.target);
  if (e.target.parentElement.classList.contains("delete-item")) {
    // console.log("Delete Item");
    e.target.parentElement.parentElement.remove();
  }
  //   if (e.target.parentElement.className == "delete-item secondary-content") {
  //     console.log("Delete Item");
  //   }
}
