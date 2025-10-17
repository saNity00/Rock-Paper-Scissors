function getComputerChoice(){
let compNumber = Math.floor(Math.random() * 3);
if (compNumber == 0 ) {
    return "ROCK" ;
}
else if (compNumber == 1 ){
    return "PAPER";
}
else {
    return "SCISSORS";
}
}
function getHumanChoice() {
    let decision = prompt("What's your move?").toUpperCase();
    return decision;
}
   let humanScore=0;
   let computerScore =0;
function playRound(humanChoice,computerChoice){
 console.log(`You played ${humanChoice}.`);
    console.log(`Computer played ${computerChoice}.`);

    if(computerChoice == humanChoice){
       console.log ("It's a tie!");
    } else if((humanChoice == "SCISSORS" && computerChoice == "ROCK")||
    (humanChoice== "ROCK" && computerChoice=="PAPER")||
    (humanChoice == "PAPER" && computerChoice == "SCISSORS")){
       console.log ("Loser!");
        computerScore++;
    }
    else {
        console.log("lucky");
        humanScore++;
    }}

function playGame(){

 for (let i = 0 ; i < 3; i++){
    const humanSelection = getHumanChoice();
    const computerSelection =getComputerChoice();
    playRound(humanSelection,computerSelection);
 }
 console.log("The final score is...");
 console.log(`You ${humanScore} : Me ${computerScore}`);
 if (computerScore > humanScore){
    console.log ("You just lost to a bot!");
 } else if ( humanScore > computerScore){
    console.log ("Run it back!")
 } else{
     console.log("Never end on a draw");
 }
}
playGame();

