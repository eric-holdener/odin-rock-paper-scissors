function computerPlay() {
    let playSelector = Math.floor(Math.random() * 3) + 1;
    if (playSelector == 1) {
        let computerChoice = "Rock";
        return computerChoice;
    } else if (playSelector == 2) {
        let computerChoice = "Paper";
        return computerChoice;
    } else {
        let computerChoice = "Scissors";
        return computerChoice;
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice == "Rock" && playerChoice == "rock") {
        let winner = "tie";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Rock" && playerChoice == "paper") {
        let winner = "player";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Rock" && playerChoice == "scissors") {
        let winner = "computer";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Paper" && playerChoice == "paper") {
        let winner = "tie";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Paper" && playerChoice == "rock") {
        let winner = "computer";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Paper" && playerChoice == "scissors") {
        let winner = "player";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Scissors" && playerChoice == "scissors") {
        let winner = "tie";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Scissors" && playerChoice == "paper") {
        let winner = "computer";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Scissors" && playerChoice == "rock") {
        let winner = "player"
        return [winner, computerChoice];
    } else {
        winner = "no one";
        return [winner, computerChoice];
    }
}

function game() {
    for (let i=0; i<5; i++) {
        playerChoice = window.prompt("Choose rock, paper, or scissors");
        playerChoice = playerChoice.toLowerCase();

        let returnArray = playRound(computerPlay(), playerChoice);
        let winner = returnArray[0];
        let computerChoice = returnArray[1];

        if (winner == "player") {
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
        } else if (winner == "computer") {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
        } else if (winner == "tie") {
            console.log(`You tie! You both picked ${computerChoice}.`);
        } else {
            console.log("Maybe there was a typo? You didn't pick a valid answer. Try again")
            i -= 1;
        }
    }
}
