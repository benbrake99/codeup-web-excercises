"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(randomColor);
//
// function analyzeColor (colorToCheck){
//     var result;
//
//    if(colorToCheck == 'blue'){
//        alert("blue is the color of the sky.");
//    } else if (colorToCheck == 'red') {
//        alert("red is the color of strawberries");
//    } else {
//        alert("I don't know anything that color")
//    }
//
// }
// console.log(analyzeColor(randomColor));
//



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// var colorPick = prompt("pick a color. blue, red, cyan");
// console.log(colorPick);
// switch(colorPick){
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "red":
//         alert("roses are red");
//         break;
//     case "cyan":
//         alert("I don't know anything that color");
//         break;
//     default:
//         alert("That color is not a choice")
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


var luckyNumber = Math.floor(Math.random() * 6);
var price = prompt("Enter the total amount of your purchase ");
var disPrice = (luckyNumber, price);
var myDisc = (price - disPrice);
var totalAmt =

function calculateTotal(luckyNumber, totalAmt){

    var myResult = luckyNumber;
    console.log(myResult);

    if (luckyNumber === 0){
        return (0 * totalAmt);
    } else if (luckyNumber === 1){
        return (.10 * totalAmt);
    }else if (luckyNumber === 2){
        return (.25 * totalAmt);
    }else if (luckyNumber === 3){
        return (.35 * totalAmt);
    }else if (luckyNumber === 4){
        return (.50 * totalAmt);
    }else if (luckyNumber === 5){
        return (1 * totalAmt);
    }

    return myResult;
        }
console.log(myDisc);
alert("The original purchase price was:  $" + price);
alert("your total discount is: $" + (price - myDisc))
alert("final cost is: $" + myDisc);



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6


//uncomment random
//
/*

 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
*/

confirm("Would you like to pick a number?");
var myNumber = prompt("enter a number: ");
var plus100 = (myNumber + 100);
var result;
parseInt(myNumber);


if(myNumber % 2 == 0){
    console.log("the number is even");
} else {
    console.log ("the number is odd");
}
if(myNumber > 0) {
    console.log("the number is positive.");
} else {
    console.log("the number is negative");
}

console.log(plus100);





