let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randTdx = Math.floor(Math.random()*3);
    return options[randTdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Drawn! Play Again!";
    msg.style.backgroundColor = "rgb(50, 84, 207)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won!");
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lost!");
        msg.innerText = `You Lost! Comp's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // Generate Comp Choice
    const compChoice = getCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = (compChoice === "Paper") ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = (compChoice === "Scissors") ? false : true;
        }
        else{
            userWin = (compChoice === "Rock") ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("was clicked...", userChoice);
        playGame(userChoice);
    });
});