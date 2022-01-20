// User Input

// alert("Hello world");
// confirm("on == True\nCancel == false");

// let myBoolean =confirm("on == True\nCancel == false");
// console.log(myBoolean);


// let name = prompt("Please enter your name.");
// console.log(typeof name);
// console.log(name ?? "You didn't enter your name.");



// let name = prompt("Please enter your name.");
// if (name){
//     console.log(name);
// }else{
//     console.log("You didn't enter your name.");
// }


let name = prompt("Please enter your name.");
if (name){
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
}else{
    console.log("You didn't enter your name.");
}