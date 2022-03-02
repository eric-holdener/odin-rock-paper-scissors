function computerPlay() {
    let playSelector = Math.floor(Math.random() * 3) + 1;
    console.log(playSelector)
    if (playSelector == 1) {
        let computerChoice = "Rock"
        console.log(computerChoice)
        return computerChoice
    } else if (playSelector == 2) {
        let computerChoice = "Paper"
        console.log(computerChoice)
        return computerChoice
    } else {
        let computerChoice = "Scissors"
        console.log(computerChoice)
        return computerChoice
    }
}