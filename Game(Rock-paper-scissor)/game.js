let userScore=0;
let compScore=0;

let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choices");

//generating random values
const genCompChoice=()=>{
    let Arr=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    return Arr[random];
}

const msg=document.querySelector(".msg"); 

const drawGame=()=>{
    console.log("game draw");
    msg.innerText = "Game Draw.Play again!";
    msg.style.backgroundColor="#482728";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You win");
        msg.innerText = `You won!! your ${userChoice} beats ${compChoice}`;
        userScore++;
        userscore.innerText= userScore;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You lose");
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        compScore++;
        compscore.innerText= compScore;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user Choice=",userChoice);
    let compChoice=genCompChoice();
    console.log("Computer Choice=",compChoice);
    if(userChoice === compChoice){
        //draw match
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false: true;
        }
        else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})