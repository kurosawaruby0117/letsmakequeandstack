const button = document.getElementsByClassName("stack_button");
const buttonArray = Array.from(button[0].querySelectorAll("button"));
const button_queue = document.getElementsByClassName("queue_button");
const buttonArray2 = Array.from(button_queue[0].querySelectorAll("button"));
const stackDiv = document.getElementsByClassName("stack_place")[0];
const QueDiv = document.getElementsByClassName("stack_place_2")[0];
const stackButton=document.querySelector(".input__contents");
const stackSubmit=stackButton.querySelector("input");
const queueButton=document.querySelector(".input__contents_2");
const queueSubmit=queueButton.querySelector("input");


let top_ = -1;
let Que_top=-1;
let Color = [
    "#fdfd96",
    "#add8e6",
    "#a1a5a4",
    "#ffb6c1",
    "#f76865",
    "#ffa359",
    "#d5ace7",
    "#000080",
    "#adec92",
    "#38b48b"
];
console.log(buttonArray);
function push(event) {
    event.preventDefault();
    if(stackSubmit.value==""){
        alert("값을 입력해주세요!");
        return;
    }
   
    var jbRandom=Math.random();

    console.log(stackSubmit.value)
    var newDiv = document.createElement("div");
    top_ = top_ + 1;
    newDiv.innerText = stackSubmit.value;
    newDiv.style.color=Color[Math.floor(jbRandom*9)];
    newDiv.setAttribute("id", top_);
    stackDiv.appendChild(newDiv);
    stackButton.reset();
}
function pop() {
  if (top_ === -1) {
    alert("스택이 비었습니다.");
  } else {
    console.log(top_);
    const memberArray = Array.from(stackDiv.querySelectorAll("div"));
    stackDiv.removeChild(memberArray[top_]);
    top_ = top_ - 1;
  }
}
function peek() {
  if (top_ === -1) {
    alert("스택이 비었습니다.");
  } else {
    console.log(top_);
    const memberArray = Array.from(stackDiv.querySelectorAll("div"));
    alert(`스택 맨위값: ${memberArray[top_].innerText}`);
  }
}

function handleLowClick(e) {
  switch (e.target.id) {
    case "pop":
      console.log("hi");
      pop();
      break;
    case "peek":
      peek();
      break;
  }
  
  
}
function QueuePeek() {
    if (Que_top === -1) {
      alert("큐가 비었습니다.");
    } else {
      const memberArray = Array.from(QueDiv.querySelectorAll("div"));
      alert(`큐 맨앞의 값: ${memberArray[0].innerText}`);
    }
  }
function handleLowClick_2(e) {
    switch (e.target.id) {
      case "pop":
        console.log("hi");
        deleteQue();
        break;
      case "peek":
        QueuePeek();
        break;
    }
    
    
}
async function deleteQue (event){
    if(Que_top===-1){
        alert("큐가 비었습니다.")
        return;
    }
    var memberArray = Array.from(QueDiv.querySelectorAll("div"));
    const deleteArray = Array.from(QueDiv.querySelectorAll("div"))[0];
    var fadeEffect = await setInterval(function () {
        if (deleteArray.style.opacity > 0) {
            deleteArray.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 5000);
    QueDiv.removeChild(deleteArray);
    const cleanToDos = memberArray.filter(function(toDo) {
      return toDo.id !== deleteArray.id;
    });
    Que_top-=1;
   
  }
function enqueue(event) {
    event.preventDefault();
    if(queueSubmit.value==""){
        alert("값을 입력해주세요!");
        return;
    }
   
    var jbRandom=Math.random();

    console.log(queueSubmit.value)
    var newDiv = document.createElement("div");
    Que_top = Que_top + 1;
    newDiv.innerText = queueSubmit.value;
    newDiv.style.color=Color[Math.floor(jbRandom*9)];
    newDiv.setAttribute("id", Que_top);
    QueDiv.appendChild(newDiv);
    queueButton.reset();
}

buttonArray.forEach(function (e) {
  e.addEventListener("click", handleLowClick);
});

buttonArray2.forEach(function (e) {
    e.addEventListener("click", handleLowClick_2);
});

stackButton.addEventListener("submit",push);
queueButton.addEventListener("submit",enqueue)