// document.getElementsByClassName();

const items = document.getElementsByClassName("collection-item");

console.log(items);
console.log(items[0]);

items[0].style.color = "red";
items[3].textContent = "red";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItems);

// document.getElementsByTagName();

const lis = document.getElementsByTagName("li");

console.log(lis);
console.log(lis[0]);

lis[0].style.color = "red";
lis[3].textContent = "red";

// Convert HTML Collection to Arrray
let lisArr = Array.from(lis);
lisArr.reverse();

lisArr.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lisArr);

// document.querySelectorAll();
console.log("document.querySelectorAll()");

const itemsQS = document.querySelectorAll("ul.collection li.collection-item");

itemsQS.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello QS`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#f4f4f4";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#ccc";
}

console.log(itemsQS);
