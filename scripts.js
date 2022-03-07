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
    if (computerChoice == "Rock" && playerChoice == "Rock") {
        let winner = "tie";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Rock" && playerChoice == "Paper") {
        let winner = "player";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Rock" && playerChoice == "Scissors") {
        let winner = "computer";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Paper" && playerChoice == "Paper") {
        let winner = "tie";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Paper" && playerChoice == "Rock") {
        let winner = "computer";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        let winner = "player";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Scissors" && playerChoice == "Scissors") {
        let winner = "tie";
        return [winner, computerChoice];
    }
    else if (computerChoice == "Scissors" && playerChoice == "Paper") {
        let winner = "computer";
        return winner;
    }
    else if (computerChoice == "Scissors" && playerChoice == "Rock") {
        let winner = "player"
        return winner;
    } else {
        winner = "no one";
        return winner;
    }
}

function game(playerChoice) {
    let computerChoice = computerPlay();

    let winner = playRound(computerChoice, playerChoice);


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
