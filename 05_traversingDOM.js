let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes; // Node - Array
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;

// Node Types
// 1 - Element
// 2 - Attribute (depricated)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - DocTYpe

// Get Children Element Nodes
val = list.children; // HTML Collection
val = list.children[0];
list.children[0].textContent = "Hello";

// Children of Children
val = list.children[1].children;
val = list.children[1].children[0];
list.children[1].children[0].id = "Test-link";
val = list.children[1].children[0].innerHTML;

// First Child
val = list.firstChild;
val = list.firstElementChild; // Recommended as it used direct element

// Last Child
val = list.lastChild;
val = list.lastElementChild; // Recommended as it used direct element

// Child Elements Count
val = list.childElementCount;

//---------------------
// Parent
//------------------

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement; // Mostly same as above in all cases
val = listItem.parentElement.parentElement;

//---------------------
// Siblings
//------------------

// Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get Previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
