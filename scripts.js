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
    const container = document.querySelector('#winner-message');

    console.log(container.childNodes);

    if (container.hasChildNodes) {
        console.log('in if statement');
        container.removeChild(container.firstChild);
    }

    const content = document.createElement('p');
    content.classList.add('winner');

    if (winner == "player") {
        content.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (winner == "computer") {
        content.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else if (winner == "tie") {
        content.textContent = `You tie! You both picked ${computerChoice}.`;
    }

    container.appendChild(content);
}
