let todoList = document.getElementsByTagName("LI");
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function () {
  newElement();
});

myInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault(); // Ensure it is only this code that runs
    newElement();
  }
});

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
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = document.getElementById("ulList");
    list.insertBefore(li, list.childNodes[0]);  
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");

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
}
