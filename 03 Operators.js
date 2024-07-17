// ================== Operators ==================

// ...................... Questions No : 1 ......................
// Can you guess what the output will be?
// const priceOne = 5;
// const priceTwo = 10;
// console.log(priceOne == priceTwo);

// Ans : true , (false)

// ...................... Questions No : 2 ......................
// Now, priceOne and priceTwo have the same value. Let's see what the output will be:

// const priceOne = 10;
// const priceTwo = 10;
// console.log(priceOne == priceTwo);

// Ans : (true) , false

// ...................... Questions No : 3 ......................
// Can you guess what the output will be?

// const priceOne = 5;
// const priceTwo = 10;
// console.log(priceOne != priceTwo);

// Ans : false (true)

// ...................... Questions No : 4 ......................
// Now, we got true because priceOne and priceTwo are indeed not equal.

// console.log(10 == 10);
// Ans : (true) , false

// console.log(10 != 11);
// Ans : false , (true)

// console.log(false == false);
// Ans : false , (true)

// ...................... Questions No : 5 ......................
// In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.

// const numOne = 5;
// const numTwo = 6;
// console.log(numOne == numTwo);

// Ans : 

// const numOne = 5;
// const numTwo = 5;
// console.log(numOne == numTwo);

// ...................... Questions No : 6 ......................
// In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different values. Change the code so that the console.log() statement logs true.

// const numOne = 5;
// const numTwo = 5;
// console.log(numOne != numTwo);

// Ans : 

// const numOne = 5;
// const numTwo = 4;
// console.log(numOne != numTwo);

// ...................... Questions No : 7 ......................
// Can you guess what the output will be?

// const priceOne = 5;
// const priceTwo = 10;

// console.log(priceOne > priceTwo);
// console.log(priceTwo > priceOne);

// Ans : false , true

// Let's use the Less than operator in the example for above:
// const priceOne = 5;
// const priceTwo = 10;

// console.log(priceOne < priceTwo);
// console.log(priceTwo < priceOne);

// Ans : true , false

// ...................... Questions No : 7 ......................
// Here's an example of how to use them:

// const priceOne = 10;
// const priceTwo = 15;
// const priceThree = 10;

// console.log(priceOne >= priceTwo);
// console.log(priceOne >= priceThree);

// console.log(priceOne <= priceTwo);
// console.log(priceOne <= priceThree);

// Ans : false , true , true , true

// ...................... Questions No : 7 ......................
// const priceOne = 1;
// const priceTwo = 1;
// const priceThree = 2
 
// console.log(priceOne <= priceTwo);
 
// console.log(priceOne <= priceThree);

// Ans :
// true
// false

// false
// true

// ( true  true)

// false
// false

// ...................... Questions No : 8 ......................
// In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of numOne is greater than or equal the value of numTwo. It also checks whether the value of numTwo is greater than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.

// const numOne = 3;
// const numTwo = 4;
// const numThree = 2;
// console.log(numOne >= numTwo, numTwo >= numThree);

// Ans : 
// const numOne = 3;
// const numTwo = 2;
// const numThree = 2;
// console.log(numOne >= numTwo, numTwo >= numThree);

//(true , true)

// ...................... Questions No : 9 ......................
// In the console.log() statement below we use the Less Than Or Equal operator to check whether the value of numOne is less than or equal the value of numTwo. It also checks whether the value of numTwo is less than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.

// const numOne = 1;
// const numTwo = 4;
// const numThree = 2;
// console.log(numOne <= numTwo, numTwo <= numThree);

// Ans :

// const numOne = 1;
// const numTwo = 2;
// const numThree = 2;
// console.log(numOne <= numTwo, numTwo <= numThree);

// ...................... Questions No : 10 ......................
// Comparison operators - Strict Equality

//console.log(1 === 1);
// Ans : true

//console.log(1 !== 1);
// Ans : false

// console.log(1 == "1");
// Ans : true

// console.log('1' === 1);
// Ans : false

// console.log(1 === "1");
// Ans : false

// console.log('hello' === 'hello');
// Ans : true

// console.log(0 === false);
// Ans: false

// ...................... Questions No : 11 ......................
// Logical operators - logical AND

// true && true; // t && t returns true
// a2 = true && false; // t && f returns false
// a3 = false && true; // f && t returns false
// a4 = false && 3 === 4; // f && f returns false
// a5 = "Cat" && "Dog"; // t && t returns "Dog"
// a6 = false && "Cat"; // f && t returns false
// a7 = "Cat" && false; // t && f returns false
// a8 = "" && false; // f && f returns ""
// a9 = false && ""; // f && f returns false

// ...................... Questions No : 12 ......................
// Logical operators - logical OR

// true || true; // t || t returns true
// false || true; // f || t returns true
// true || false; // t || f returns true
// false || 3 === 4; // f || f returns false
// "Cat" || "Dog"; // t || t returns "Cat"
// false || "Cat"; // f || t returns "Cat"
// "Cat" || false; // t || f returns "Cat"
// "" || false; // f || f returns false
// false || ""; // f || f returns ""
// false || varObject; // f || object returns varObject
