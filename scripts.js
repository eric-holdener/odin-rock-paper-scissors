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

function playRound(playerChoice) {
    let computerChoice = computerPlay();

    if (computerChoice == "Rock" && playerChoice == "Rock") {
        let winner = "tie";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Rock" && playerChoice == "Paper") {
        let winner = "player";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Rock" && playerChoice == "Scissors") {
        let winner = "computer";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Paper" && playerChoice == "Paper") {
        let winner = "tie";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Paper" && playerChoice == "Rock") {
        let winner = "computer";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        let winner = "player";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Scissors" && playerChoice == "Scissors") {
        let winner = "tie";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Scissors" && playerChoice == "Paper") {
        let winner = "computer";
        determineWinner(winner, playerChoice, computerChoice);
    }
    else if (computerChoice == "Scissors" && playerChoice == "Rock") {
        let winner = "player";
        determineWinner(winner, playerChoice, computerChoice);
    } else {
        winner = "no one";
        determineWinner(winner, playerChoice, computerChoice);
    }
}

function determineWinner(winner, playerChoice, computerChoice) {
    if (winner == "player") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
    } else if (winner == "computer") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
    } else if (winner == "tie") {
        console.log(`You tie! You both picked ${computerChoice}.`);
    }
}
