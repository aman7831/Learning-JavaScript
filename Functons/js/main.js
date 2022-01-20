//functions

// Methods = Built in functions !

"Aman".toLocaleLowerCase();
Math.random();

// function decleration syntax:
// function sum(num1, num2){
//     return num1 + num2;
// }
// console.log(sum(2,6));


// function sum(num1, num2){
//     console.log(num1);
//     console.log(num2);
//     return num1 + num2;
// }
// console.log(sum(2,6));


// function sum(num1, num2){
//     if (num2 === undefined){
//         return num1 + num1;
//     }
//     return num1 + num2;
// }
// console.log(sum(5, 10));


// function getUserNameFromEmail(email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("amanbhandari188@gmail.com"));


// const getUserNameFromEmail = function (email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("amanbhandari188@gmail.com"));



// const getUserNameFromEmail = (email) => {
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("amanbhandari@gmail.com"));



const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase();
};
console.log(toProperCase("november"));

//function reusable code!
