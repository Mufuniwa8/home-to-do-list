const add = document.getElementById("add");
const inputFill = document.getElementById("inputfill");
const toDoContainer = document.getElementById("todocontainer");

add.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  paragraph.innerText = inputFill.value;
  toDoContainer.appendChild(paragraph);
  inputFill.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

