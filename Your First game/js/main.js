//Your firt Interactive Game
let playGame = confirm("shall we play rock, paper or scissors?");
if (playGame){
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLocaleLowerCase();
        if(playerOne ==="rock" || playerOne === "paper" || playerOne ==="scissors"){
            let computerChoice = Math.floor(Math.random()*3 +1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";
            
            let result = playerOne == computer ?"Tie game":
            playerOne == "rock" && computer == "paper" ?"computer wins!":
            playerOne == "paper" && computer === "scissors"? "Computer wins":
            playerOne == "scissors" && computer === "rock"? "Computer wins":
            "player one wins";
            alert(result);

            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("ok thanks for playing");

        }else{
            alert("You didn't enter rock, paper or scissors.")
        }
    }else{
        alert("I guess you changed your mind.");
    }
}else{
    alert("Ok, May be next time");
}