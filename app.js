// Score track

let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.getElementById('user-score');
const compScorePara = document.getElementById('comp-score');

// random choice genereated by computer.
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

// Play the game
  

    const drawGame = () => {
        console.log("game was draw...");
        msg.innerText = "game was draw play again.."
        msg.style.backgroundColor="#081b31";
    }

    const showWinner = (userWin, userChoice, compChoice) => {
        if(userWin)
        {
            console.log("you won");
            msg.innerText = `you win! ${userChoice} beat ${compChoice}`;
            msg.style.backgroundColor="green";
            userScore++;
            userScorePara.innerText = userScore;
        }
        else{
            console.log("you lose"); 
            msg.innerText = `you lose... ${compChoice} beat ${userChoice}`;
            msg.style.backgroundColor="red";
            compScore++;
            compScorePara.innerText = compScore;
        }
    }

const playGame = (uesrChoice) => {
    console.log("user choice = ",uesrChoice)
    //gen computer choice
    const compChoice = genCompChoice();
    console.log("comp choice is", compChoice);

    // check the result 
    if(uesrChoice === compChoice) {
        // Draw game

        drawGame();
    }
    else{
        let userWin = true;
        if(uesrChoice === "rock")
        {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(uesrChoice === "paper")
        {
            //scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //rock, paper comp choice.
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, uesrChoice, compChoice);
    }
}

//user choice

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const uesrChoice = choice.getAttribute("id"); //instead of usersChoice u can write userId also.
        console.log("choice was clicked",uesrChoice);

        playGame(uesrChoice)
    });
});