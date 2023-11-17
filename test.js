let todoList = document.getElementsByTagName("LI");
let addBtn = document.querySelector(".addBtn");
let inputField = document.getElementById("myInput");

addBtn.addEventListener("click", function () {
  newElement();
});

myInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    newElement();
  }
});

function remove() {
  inputField.style.boxShadow = "none";
  inputField.setAttribute("placeholder", "Enter Your Task");
}

for (let i = 0; i < todoList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  todoList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

list.addEventListener("click", function () {
  let list = document.querySelectorAll("LI");
  for (let i = i; i < list.length; i++) {}
});
function newElement() {
  console.time("Time");
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue[0] == " " || inputValue == "") {
    inputField.style.boxShadow = "0px 0px 30px red";
    let placeStyle = inputField.setAttribute(
      "placeholder",
      "Enter Something to Add a Task"
    );
    let errMsg = document.querySelector("small");
    errMsg.style.color = "red";
    errMsg.innerHTML = "Enter Something to Add a Task";
  } else {
    let list = document.getElementById("ulList");
    list.insertBefore(li, list.childNodes[0]);
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");
  let date = new Date();

  let txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
  console.timeEnd("Time");
}
