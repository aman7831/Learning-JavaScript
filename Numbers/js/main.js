//Numbers

//An integer is a whole number.
const myNumber =42;
//A number with a decimal point is a float which refrences the "floating point"
const myFloat = 42.08722;

const myString ="42";

console.log(myFloat);
console.log(myString +3);

console.log(myString +3);

console.log(Number(myString)== myNumber);

console.log(Number("Aman")); //not a number
console.log(Number(undefined)); //not a number


//boolean
console.log(Number(true));
console.log(Number(false));


//Number mehods
//The Number.isInteger() method determines wheather the passed value is an integer.

console.log(Number.isInteger(myString));

// The Number.parseFloat() method parses an argument and returns a floating point number. if a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));

console.log(Number.parseFloat(myString));

//the tofixed()method formats a number according to how many decimal points you provide as the parameter.

console.log(myFloat.toFixed(2));  //round off garna 

// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat));

//The toString() method returns a string representing the number.
console.log(myFloat.toString());
console.log(typeof myFloat.toString());  //string
console.log(typeof Number.parseFloat(String)); 


//chaining = using several methods chained together
console.log(Number.parseFloat("4.23.7abc").toFixed(2).toString());

//NaN is an acronym for Not a Number
console.log(Number("Aman"));

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.
console.log(Number.isNaN("Aman"));

//The global is NaN() function determines whether a value is NaN or not.
console.log(isNaN("Aman"));
