// Create a JavaScript file and name it assignment-2.js. Inside this file, write JavaScript code solving the two challenges below. Also include an explanation of what your code is doing in your own words.
// You can write plain English in JavaScript files using multi-line comments.


//Write a loop that logs the following triangle to the console:
//Diving Deeper: Are you using `console.log()` multiple times for each line? Can you do it with one call for all 7 lines of hashes?


// Write a function that takes in an integer (number) as a parameter. The function must log `"the number is even"` if the given parameter is an even number, and log `"the number is odd"` if it is odd.
// Diving Deeper: What happens if the given parameter is not a number at all?



// Challenge 2

function isEven(number); {
    if (typeof num !== 'number')
        throw new Error('not a number')
    else return (num % 2) == 0;
}

const printEvenOrOdd = num;

console.log(isEven(num) ? 'the number is even' : 'the number is odd');
printEvenOrOdd(1);
printEvenOrOdd(2);
printEvenOrOdd(3);
  
  //I started by setting the parameter to take in an integer(number). Then writing an if/else statement with return, and a non-identity
  //operator to return true if the (number) IS even, IS NOT odd, and is not "not a number". Also, declaring a constant variable for the local block
  //and prompting the console to log the events (1, 2, and 3) I was able to allow the function to display: When the number is even, when the number is odd, and when there is an error(when (number) is not a number)
  //I am new to coding and especially javascript; The syntax, commands, and overall problem took me a while to learn and configure!


