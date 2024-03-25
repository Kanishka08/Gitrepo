const form = document.querySelector("form");

const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitLists = document.querySelectorAll(".fruit");

  //selected Input
  const fruitsToAdd = document.getElementById("fruit-to-add");
  //created li element

  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML =
    fruitsToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">Edit</button>';
  fruits.appendChild(newLi);

  console.log(fruitLists.length);
  console.log(fruits);
});
fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    console.log(event.target.parentElement);
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
const fruitLists = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitLists.length; i++) {
  let editBtn = document.createElement("button");
  const editBtnText = document.createTextNode("Edit");
  editBtn.append(editBtnText);
  editBtn.className = "edit-btn";
  fruitLists[i].appendChild(editBtn);
}
