// ================== Booleans ==================

// ...................... Questions No : 1 ......................
// The same way we can reassign variables with numbers, we can also reassign variables with Booleans. Let's try it:

// let isOnSale = true;
// console.log(isOnSale);
// isOnSale = false;
// console.log(isOnSale);

// Ans : true , false

// ...................... Questions No : 2 ......................
// Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code.

// let isTrue;
// console.log(isTrue);

// Ans : 
// let isTrue;
// isTrue = true;
// console.log(isTrue);

// ...................... Questions No : 3 ......................
// Here's a list of numbers. What do you think? Which of them become true and which become false?

// console.log(Boolean(100)); 
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(-5));

// Ans : true, true, false, true

// ...................... Questions No : 4 ......................
// Right, all numbers except 0 are truthy.

// const price = 10;
// console.log(Boolean(price));

// Ans : (True) , false 

// let price;
// console.log(Boolean(price));

// Ans : True , (false) 

// ...................... Questions No : 5 ......................
// Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean representation of num.
// Extend the code such that the console.log() statement logs false

// let num = 5;

// const bool = Boolean(num);
// console.log(bool);

// Ans :
// let num = 5;
// num = 0;
// const bool = Boolean(num);
// console.log(bool);

// ===================== Test Javascript in Booleans =====================

// ............. What will be the output? .............

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(-1));

// Ans : 
// true , true , true
// false , false , false
// true , false , false
// (true , false , true)

// ............. What will be the output? .............
// const name = 'james';
// console.log(Boolean(name));

// Ans : undefined , (true) , false

// ............. What will be the output? .............
// let isTrue = true;
// console.log(isTrue);

// Ans : (true) , false

// ............. What will be the output? .............
// const price = 10;
// console.log(Boolean(price));

// Ans : true , false

// ............. false and true .............
// Every single value in JavaScript can be transformed to a boolean value.

// Ans : (ture) , false