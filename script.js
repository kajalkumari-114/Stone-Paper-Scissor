let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let countUserScore = document.querySelector("#user-score");
let countCompScore = document.querySelector("#comp-score");

  
       //THIRD
const genCompChoice = () => {
    const arr = ['stone', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return arr[randIdx];
};


    //SECOND
const playGame = (userChoice) => {
    console.log(`userChoice = ${userChoice}`);

    //generate comp choice
    const compChoice = genCompChoice();
    console.log(`compChoice = ${compChoice}`);

    if(userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice == "stone") { 
            // scissor, paper
              userWin = compChoice == "scissor" ? true : false;
        }
        else if (userWin == "paper") {
            // stone, scissor
            userWin = compChoice == "scissor" ? false : true;
        }
        else {
            //stone, paper
            userWin = compChoice == "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


      //FIRST
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


       //FIFTH
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("you win");
        msg.innerText = `You Win. your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore = userScore + 1;
        countUserScore.innerText = userScore;
    }
    else {
    console.log("you lose");
    msg.innerText = `you lose.${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red"
    compScore = compScore + 1;
    countCompScore.innerText = compScore;
    }
};


    //FOURTH
const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game was Draw.Play Again"
    msg.style.backgroundColor = "rgb(15, 15, 15)"
};

