let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let newgame=document.querySelector(".newGame");
let msgcon=document.querySelector(".msg-container");
let container=document.querySelector(".container");

let turnO= true;//playerX,playerO

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,7],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcon.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    container.classList.remove("hide");
    reset.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
}
);

const showResult=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
    container.classList.add("hide");
    reset.classList.add("hide");
}

const checkWinner=()=>{
    for(pattern of winPatterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1==posval2 && posval2==posval3){
                showResult(posval1);
            }
        }
    }
}

reset.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);
