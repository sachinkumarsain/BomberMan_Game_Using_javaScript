document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector("#gridContainer");
  for (let i = 0; i < 81; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
  let boxAll = document.querySelectorAll(".box");
  let button = document.querySelector("button");
  let store = document.querySelector("#gameScore")
  let randomBox = [];
  let countScore = 0;
  for (let j = 0; j < 9; j++) {
    let num = Math.floor(Math.random() * 81)
    randomBox.push(num)
  }
  let check = false
  for (let i = 0; i < boxAll.length; i++) {
    boxAll[i].onclick = () => {
      if (boxAll[i].classList.contains("box2")) {
        check = true;
        if (check){
          for (let j = 0; j < boxAll.length; j++) {
            if (boxAll[j].hasAttribute("id")){
              boxAll[j].removeAttribute("id")
            }
          }
        }
      }
      else {
        if(boxAll[i].classList.contains("box1")){
          return false
        }
        else{
          countScore++
          store.innerHTML=countScore
          boxAll[i].classList.add("box1")
        }
      }
    };
    randomBox.forEach((element )=> {
      if (element === (i)) {
        boxAll[i].classList.add("box2")
        boxAll[i].setAttribute("id", "boxId")
      }
    });
  }
});



