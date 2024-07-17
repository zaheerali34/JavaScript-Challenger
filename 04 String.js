// ================== String ==================

// ...................... Questions No : 1 ......................
// We can use the typeof operator to find out the type of a value or variable. Try it out:

// console.log(typeof 1);
// const num = 1;
// console.log(typeof num);

// Ans : Number , Number

// ...................... Questions No : 2 ......................
// Great! But what if we do not want to store a number but some text in a variable?
// Let's try it:

// const text = hello;
// console.log(text);

// Ans : ReferenceError: hello is not defined

// ...................... Questions No : 3 ......................
// As you can see, this doesn't work. The browser thinks that hello is a variable.

// If we want to store text, we must enclose it in single or double quotes or in backticks.

// let text = "hello";
// console.log(text);
// text = 'hi';
// console.log(text);
// text = `bye`;
// console.log(text);

// Ans : hello , hi , bye

// ...................... Questions No : 4 ......................
// Let's check the type of a variable that stores text.

// let text = "hello";
// console.log(typeof text);

// Ans : string

// ...................... Questions No : 6 ......................
// In this exercise the existing console.log() statement logs the value of the variable text. The v ariable text has already been declared with an empty string – as indicated by the two single quotes.
// Fill in the string with some characters and run the code to see if the string is being logged

// const text = '';
// console.log('The value of text is: ' + text);

// Ans : 

// const text = 'Hello';
// console.log('The value of text is: ' + text);

// ...................... Questions No : 7 ......................
// Here, we have declared 3 variables textOne, textTwo, and textThree. An empty string is assigned to all of them.
// Do you see how in each case different symbols are used to create the string? All three of them are valid methods to create a JavaScript string.
// Fill in all 3 strings with some characters and run the code to see if the values get logged.


// const textOne = '';
// const textTwo = "";
// const textThree = ``;
// console.log(textOne, textTwo, textThree);

// Ans :

// const textOne = 'One';
// const textTwo = "Two";
// const textThree = `there`;
// console.log(textOne, textTwo, textThree);

// ...................... Questions No : 8 ......................
// After we have learnt how to create JavaScript strings, we will now connect 2 strings together. In the code below we use the Addition (+) operator to concatenate textOne and textTwo. The console.log() statement logs the resulting string. Currently, the result would be HelloWorld.
// Change the code below so that the value of res is (Hello World)

// const textOne = 'Hello';
// const textTwo = 'World';
// const combined = textOne + textTwo;
// console.log(combined);

// Ans :

// const textOne = 'Hello';
// const textTwo = 'World'; 
// const combined = `${textOne} ${textTwo}`;
// console.log(combined);

