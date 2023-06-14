document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".grid-container");
  for (let i = 0; i < 81; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
  let boxAll = document.querySelectorAll(".box");
  let button = document.querySelector("button");
  let store = document.querySelector("#gameScore")
  let openResult=document.querySelector(".openResult")
  let gameOverScore= document.querySelector(".scoreFinal span")
  let boxColorWhite=document.querySelector("#boxId")
  let Coin=this.documentElement.querySelector("#coinScore span")
  let countCoin=0
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
            console.log(ram)
              container.style.display="none"
              openResult.style.display="flex"
              gameOverScore.innerHTML=countScore
              finalCoin.innerHTML=countCoin

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
          countCoin+=10
          store.innerHTML=countScore
          Coin.innerHTML=countCoin
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
  let finalCoin=document.querySelector(".coin span")
  button.onclick =()=>{
    for(let i=0;i<boxAll.length;i++){
      if(boxAll[i].classList.contains("box1")){
        boxAll[i].classList.remove("box1")
      }
      else{
        if(boxAll[i].classList.contains("box2")){
          boxAll[i].classList.remove("box2")
        }
        else{
          countScore=0
          countCoin=0
          container.style.display="grid";
          openResult.style.display="none"
          store.innerHTML=countScore
          Coin.innerHTML=countCoin
        }
      }
    }
   

  }
});



