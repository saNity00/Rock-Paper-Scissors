function getComputerchoice(){
let compNumber = Math.floor(Math.random() * 3);
if (compNumber == 0 ) {
    return "ROCK";
}
else if (compNumber == 1 ){
    return "PAPER";
}
else {
    return "Scissors";
}
}
console.log(getComputerchoice());