//Conditionals : Switch statements

//syntax

// switch(expression Or value){
//     case choice 1:
//         //run this code
//     break;
//     case choice 2:
//         //run this code
//         break;

//         //add as many cases as needed
//         default:
                // run this code
                //no need for a break here
// }



switch("2"){

    case 1:
        console.log("1");
    break;

    case 2:
        console.log("2");
    break;

    case 3:
        console.log("3");
    break;

    default:
        console.log("No match");
}



switch(1){

    case 1:
        console.log(1);
    break;

    case 2:
        console.log(2);
    break;

    case 3:
        console.log(3);
    break;

    default:
        console.log("No match");
}





switch(Math.floor(Math.random()* 5 + 1)){

    case 1:
        console.log(1);
    break;

    case 2:
        console.log(2);
    break;

    case 3:
        console.log(3);
    break;

    default:
        console.log("No match");
}



// Switch statement as a decision tree of rock paper.

let playerOne ="rock";
let computer ="scissor"

switch(playerOne){

    case computer:
        console.log("Tie game!");
    break;

    case "rock":
        if(computer =="paper"){
            console.log("computer wins!");
        }else{
            console.log("Player one wins");
        }
    break;
    
    case "paper":
        if(computer =="scissors"){
            console.log("computer wins!");
        }else{
            console.log("Player one wins");
        }
    break;
    

    default:
        if(computer =="rock"){
            console.log("computer wins!");
        }else{
            console.log("Player one wins");
        }
}