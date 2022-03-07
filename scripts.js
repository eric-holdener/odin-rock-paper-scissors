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
    const counterContainer = document.querySelector('#counter');

    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    if (container.childNodes.length > 0) {
        container.removeChild(container.firstChild);
    }

    if (counterContainer.childNodes.length > 0) {
        let counterText = (counterContainer.firstChild.textContent);
        let computerIndex = counterText.indexOf("Computer");
        let tiesIndex = counterText.indexOf("Ties");

        playerWins = counterText.substring(8, computerIndex-1);
        computerWins = counterText.substring(computerIndex+9, tiesIndex-1);
        ties = counterText.substring(tiesIndex+5);

        playerWins = parseInt(playerWins);
        computerWins = parseInt(computerWins);
        ties = parseInt(ties);

        counterContainer.removeChild(counterContainer.firstChild);
    }

    const content = document.createElement('p');
    const counter = document.createElement('p');

    content.classList.add('winner');
    counter.classList.add('counter');

    if (winner == "player") {
        content.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;

        playerWins += 1;
        counter.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${ties}`;
    } else if (winner == "computer") {
        content.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;

        computerWins += 1;
        counter.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${ties}`;;
    } else if (winner == "tie") {
        content.textContent = `You tie! You both picked ${computerChoice}.`;

        ties += 1;
        counter.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${ties}`;
    }

    container.appendChild(content);
    counterContainer.appendChild(counter);
}
