document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector("#gridContainer");

  for (let i = 0; i < 81; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    
    container.appendChild(box);
  }
  let boxAll = document.querySelectorAll(".box");
  let button = document.querySelector("button");
  let store= document.querySelector("#gameScore") 
  let randomBox =[];
  for(let j=0;j<9;j++){
    let num =Math.floor(Math.random()*81)
    randomBox.push(num)
  }
  console.log(boxAll);
 
  for (let i = 0; i < boxAll.length; i++) {
    boxAll[i].onclick = () => {
      if(boxAll[i].classList.contains("box2")){
       randomBox.forEach ((j)=>{
        boxAll[j].style.display="block"
       })
        
      }
      else{
        boxAll[i].style.backgroundColor="green"
      }
     
    };
    randomBox.forEach(element => {
      if(element===(i)){  
        boxAll[i].classList.add("box2")
        boxAll[i].style.background="url(./bom1.png) no-repeat scroll center / cover"
        boxAll[i].style.backgroundColor="red"
      }
    });
    console.log(randomBox)
    
    console.log(boxAll[i]);
      
  }
     
});



