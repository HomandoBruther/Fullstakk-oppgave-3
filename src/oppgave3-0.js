// Oppgave 1
let removeBtn = document.getElementById("remove-btn");
removeBtn.onclick = function () {
  document.getElementById("remove").remove();
  this.remove();
};
//endra navn på remove-btn til removeBtn i camelCase fordi bindestreken i remove-btn ga meg vansker + tok utgangspunkt i denne snippeten http://jsfiddle.net/4WGRP/

//Brukte til slutt mye av løsnings koden ettersom jeg ikke har kjennskap til mange Javascript properties. Skrev av, men ikke kopierte rett inn. Også gjorde notater om ting jeg skjønte av koden i egne notater

// Oppgave 2
let textToChange = document.getElementById("change");
let changeBtn = document.getElementById("change-btn");

const changeText = () => {
  textToChange.innerHTML = "La brommy";
};

changeBtn.addEventListener("click", changeText);

/*document.getElementById("changeBtn").onclick = function () {
  this.textContent = "La brommy";
};*/

// Oppgave 3
const inputText = document.getElementById("input-text");
const input = document.getElementById("input");

const removeDefaultText = () => {
  inputText.innerHTML = null;
};

removeDefaultText();

const updateUI = (event) => {
  let letter = event.key;
  inputText.innerHTML += letter;
};

input.addEventListener("keyup", updateUI);

// Oppgave 4
const myList = ["item one", "item two", "item three"];

let ul = document.getElementById("ul");
let writeBtn = document.getElementById("write-list");

const createLi = () => {
  const liElements = myList.map((listElement) => `<li>${listElement}</li>`);
  ul.innerHTML = liElements.join("");

  myList.forEach((listElement) => (ul.innerHTML += `<li>${listElement}</li>`));
};

writeBtn.addEventListener("click", createLi);

// Oppgave 5
let text = document.getElementById("text");
let createBtn = document.getElementById("create");
let select = document.getElementById("select");
let htmlPlaceHolder = document.getElementById("placeholder");

const createElement = () => {
  const htmlEl = select.value;
  const message = text.value;
  htmlPlaceHolder.innerHTML += `<${htmlEl}>${message}<{/htmlEl}>`;
};

createBtn.addEventListener("click", createElement);

// Oppgave 6
let parentUl = document.getElementById("list");
let removeLiBtn = document.getElementById("remove-li");

const removeLiFromParent = () => {
  const lastElement = parentUl.lastElementChild;
  if (lastElement) {
    parentUl.removeChild(lastElement);
  }
};

removeLiBtn.addEventListener("click", removeLiFromParent);

// Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

const handleKeyUp = () => {
  const name = inputName.value;
  if (name && name.length >= 4) {
    orderBtn.disabled = true;
    orderBtn.style = "border: 1px solid red";
  } else {
    orderBtn.disabled = false;
    orderBtn.style = "border: 1px solid black";
  }
};

inputName.addEventListener("keyup", handleKeyUp);

// Oppgave 8

const ulParent = document.querySelector(".children");
const ulParentChildren = ulParent.querySelectorAll("li");
const colorBtn = document.getElementById("color");

const addBorder = () => {
  Array.from(ulParentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 1px solid pink";
    } else {
      li.style = "border: 1px solid green";
    }
  });
};

colorBtn.addEventListener("click", addBorder);
