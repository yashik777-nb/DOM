// Create a Element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add Id
li.id = "New-item";

// Add an attribute
li.setAttribute("title", "new-item");

// Create Text Node
li.appendChild(document.createTextNode("Hello World"));

// Create a new Link Element
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
