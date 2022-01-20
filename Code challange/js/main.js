//Your First code Challange

// Write a code that will return a random letter from your name

//breaking the problem in two parts
console.log(typeof "Aman".charAt());
console.log(Math.floor(Math.random()* 4 + 1));

//Combining each other
console.log("Aman".charAt(Math.floor(Math.random()* 4)));
console.log("Aman".charAt(Math.floor(Math.random()* 4)));
console.log("Aman".charAt(Math.floor(Math.random()* 4)));
console.log("Aman".charAt(Math.floor(Math.random()* 4)));

//Lets make this for all names
const anyName ="Prashanna";
console.log(anyName.charAt(Math.floor(Math.random()* anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()* anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()* anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()* anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()* anyName.length)));
