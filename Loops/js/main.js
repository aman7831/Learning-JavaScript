//Loops

// while loop

// let myNumber = 0;
// while(myNumber < 50){
//     myNumber++;
//     console.log(myNumber);
// }

// let myNumber = 0;
// while(myNumber < 50){
//         myNumber += 2;
//         console.log(myNumber);
//     }

// don't create an endles loop


//do while loop 

// let myNumber = 0;
// do {
//         myNumber += 2;
//         console.log(myNumber);
//     } while(myNumber < 50);



//for loop 

// for (let i=0; i<=10; i++){
//     console.log(i);
// }


// let name ="Aman";
// for (let i=0; i<=name.length; i++){
//     console.log(name.charAt(i));
// }


// let name = "Aman";
// let counter = 0;
// let myLetter;
// while (true){
//     myLetter = name [counter];
//     console.log(myLetter);
//     if (myLetter === "a") break;
//     counter++;
// }


let name = "Aman";
let counter = 0;
let myLetter;
while (counter <= 3){
    myLetter = name [counter];
    console.log(myLetter);
    if(counter ===1){
        counter += 2;
        continue;
    }
    if (myLetter === "a") break;
    counter++;
}
console.log(counter);
