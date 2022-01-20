// Conditional: Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

let soup ="chicken soup";
let response = soup? "yes, we have soup": "sorry, no soup";
console.log(response);


// The condition is undefined so the response will be sorry no soup.
        // let soup;
        // let response = soup? "yes, we have soup": "sorry, no soup";
        // console.log(response);

let momo ="chicken momo";
let isCustomerBanned = true;
let momoAccess = isCustomerBanned ? "sorry no momo for you" : momo ? `yes, we have ${momo} for you` :"Sorry no momo today";
console.log(momoAccess);


let pizza ="chicken pizza";
let isCustomerBand = false;
let pizzaAccess = isCustomerBand ? "sorry no pizza for you" : pizza ? `yes, we have ${pizza} for you` :"Sorry no pizza today";
console.log(pizzaAccess);


// Ternary operator logic on test grade
let testScore =70;
let myGrade = testScore >90 ? "A"
: testScore >79 ?"B"
: testScore >69 ?"C"
: testScore >59 ?"D"
: "E";
console.log(`My test grade is a ${myGrade}`);


// Ternary operator logic in rock paper scissor

let playerOne ="rock";
let computer ="paper";
let result = playerOne == computer ?"Tie game":
playerOne == "rock" && computer == "paper" ?"computer wins!":
playerOne == "paper" && computer === "scissors"? "Computer wins":
playerOne == "scissors" && computer === "rock"? "Computer wins":
"player one wins";
console.log(result);