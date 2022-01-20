// Conditionals: If Statements

//Syntax
// if(condition){
//     //run some code
// }else{
//     //run some differnt code
// }

let chowmin ="Chicken chowmin"
let Waiterreply;
if (chowmin){
    Waiterreply =`Here is your order for ${chowmin} `;
}
else{
    Waiterreply = `Sorry, We donot have ${chowmin}`;
}
console.log(Waiterreply);


// If customer is banned
let customerIsBanned = true;
let momo ="Chicken momo"
let reply;

if(customerIsBanned){
    reply ="No Momo for you";
}else if (momo){
    reply =`Here is your order for ${momo} `;
}
else{
    reply = `Sorry, We donot have ${momo}`;
}
console.log(reply);


// Add two products

let customerIsBand = false;
let pizza ="Chicken pizza"
let coke = true;
let hotel;
if(customerIsBand){
    hotel ="No pizza for you";
}else if (pizza && coke){
    hotel =`Here is your order for ${pizza} & coke.`;
}
else if (pizza){
    hotel =`Here is your order for ${pizza} `;
}
else{
    hotel = `Sorry, We donot have ${pizza}`;
}
console.log(hotel);



// conditin : if statemets
let testScore = 69;
let collegeStudent =true;
let grade;

if(testScore >= 90){
    grade = "A";
}else if(testScore >= 80){
    grade ="B";
}
else if(testScore >= 70){
    grade ="C";
}
else if(testScore >= 60){
    grade ="D";
}else{
    //Nested id
    if(collegeStudent){
        grade ="U"
    }
    else{
        grade ="F"
    }
}
console.log(grade);




//Decision tree!

if(playerOne == computer){
    // tie game
}else if(playerOne == "rock"){
    if(computer == "paper"){
    //computer wims
    }else{
        //Playerone wins
    }
}else if(playerOne == "paper"){
    if(computer == "Scissors"){
    //computer wims
    }else{
        //Playerone wins
    }
}else{
    if(computer == "rock"){
        //computer wims
        }else{
            //Playerone wins
        }
}