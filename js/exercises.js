// Primitive Data Type Exercises
//
// 99.9 = number
// "false" = string
// false = boolean
// '0' = string
// 0 = number
// true = boolean
// 'true' = string
//
// What data type would best represent:
//     - A term or phrase typed into a search box? = string
//     - If a user is logged in? = boolean
//     - A discount amount to apply to a user's shopping cart? = boolean, number, string
//     - Whether or not a coupon code is valid? = boolean
//     - An email address typed into a registration form? = boolean
//     - The price of a product? = number


//         Operators Exercise
//
// ## Exercises
//
// For each of the following code blocks, read the expression and predict what the result of evaluating it would be, then execute the expression in the Chrome console.
//
//     `'1' + 2` = '12'
//     `typeof '1' + 2` = "string2"
//     `6 % 4` = 2
//     `'3 + 4 is ' + 3 + 4  = '3 + 4 is 34' = string
// // how could you make this produce the correct output?`

 // `// how could you make this produce the correct output?`
 //        `0 <= 0`    = true 'adding ='
 //        `'false' === false` = true 'adding ='
 //        `true !== 'true'` = true 'adding !'
 //        `5 >= -5` = true 'if remove the equal sign'
 //        `!false || false` = true 'cange to true || !false'
 //        `'true' || "42"` = true 'adding '' if isString'
 //        `!true && !false`= true 'if remove ! from either side'
 //        `6 % 5`   true 'if you add = 1'
 //        `5 < 4 && 1 === 1` = true 'if you change to > to front portion'
 //        `typeof 'codeup' === 'string' both are strings
 //        `'codeup' === 'codeup' && 'codeup' === 'Codeup' '= both = strings''
 //        `4 >= 0 && 1 !== '1'` = "both are true"
 //        `6 % 3 === 0` = "true"
 //        `5 % 2 !== 0` = "true"


           // Working With Data Types, Operators, and Variables Exercise
//
// 1.1. For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.
//
//     `var a = 1;             a = 1
//     var b = a++;            b = 1
//     var c = ++a;            c = 3
//     // what is the value of a, b, and c?`
//
//     `var d = "hello";       = "hello"
//     var e = false;          = false
//
//     d++;                    =NaN
//     e++;`                   =0
//
//
//     `var perplexed; // perplexed is undefined (no value is assigned)
//     perplexed + 2;`         =NaN
//
//     `var price = 2.7;       = 2.7
//     price.toFixed(2);`      = 2.70
//
//
// `var price = "2.7";         = "2.7"
//     price.toFixed(2);`      = error
//
//     `isNaN(0)               = false
//
//     isNaN(1)                = error
//
//     isNaN("")               = false
//
//     isNaN("string")         = true
//
//     isNaN("0")              = false
//
//     isNaN("1")              = false
//
//     isNaN("3.145")          = false
//
//     isNaN(Number.MAX_VALUE) = true
//
//     isNaN(Infinity)         = false
//
//     isNaN("true")           = true
//
//     isNaN(true)             = false
//
//     isNaN("false")          = true
//
//     isNaN(false)            = false
//
//     // to illustrate why the isNaN() function is needed:
//     NaN == NaN`             = because this only clarifies that they have the same value.
//
//     `!true                  = to clarify boolean doesn't clarify type
//
//     !false                 = to clarify boolean doesn't clarify type
//
//     !!true                  = to clarify boolean doesn't clarify type
//
//     !!false                 = to clarify boolean doesn't clarify type
//
//     !!0                     = to clarify boolean doesn't clarify type
//
//     !!-0                    = to clarify boolean doesn't clarify type
//
//     !!1                     = to clarify boolean doesn't clarify type
//
//     !!-1                    = to clarify boolean doesn't clarify type
//
//     !!0.1                   = to clarify boolean doesn't clarify type
//
//     !!"hello"               = to clarify boolean doesn't clarify type
//
//     !!""                    = to clarify boolean doesn't clarify type
//
//     !!''                    = to clarify boolean doesn't clarify type
//
//     !!"false"               = to clarify boolean doesn't clarify type
//
//     !!"0"`                  = to clarify boolean doesn't clarify type

The previous was from variables section that was completed in google chrome and asked to run again in "working with data types, operators, and variables.."


// ## Exercises
//
// 1. Execute the following statement in the Chrome JavaScript console and then follow the directions below.
//
//     `var sample = "Hello Codeup";`
//
// - Use `.length` to find the number of characters in the string. = 12
//
// - Try to make the sample string all upper or all lower case.
// =   sample.toUpperCase();'HELLO CODEUP'
//
// - Update the variable sample via concatenation so that it contains "Hello Codeup Students".
//     sample = sample + " Students" 'Hello Codeup Students'
//
// - Replace "Students" with "Class". console.log(sample.replace('Students', 'Class'));  Hello Codeup Class
//
// - Find the index of "c" using `.indexOf()`. What do you observe? console.log(sample.indexOf('c'));  -1
//
//     - Find the index of "C" using `.indexOf()`. console.log(sample.indexOf('C'));    6
//
// - Retrieve a substring that contains only the word "Codeup" by using `indexOf()` and `substring()`.
// console.log(sample.substring(6,13));     Codeup


// 3. Exercise

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother
// Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going
// to like it). If price for a movie per day is $3, how much will you have to pay?

// var lilMerm = 3 * 3;
// var brownBear = 5 * 3;
// var herc = 1 * 3;
// var sum = lilMerm + brownBear + herc;
// console.log(lilMerm);
// console.log(brownBear);
// console.log(herc);
// console.log(sum);
// 9
// 15
// 3
// 27

Suppose you're working as a contractor for 3 companies: Google, Amazon and ' +
'Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380,' +
' and Facebook $350. How much will you receive in payment for this week? You ' +
'worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

//     var google = 400 * 6;
//     var amazon = 380 * 4;
//     var facebook = 350 * 10;
//     var workSum = google + amazon + facebook;
//     console.log(google + " google pay");
//     console.log(amazon + " amazon pay");
//     console.log(facebook + " facebook pay");
//     console.log(workSum + " total pay");
//
// 2400 google pay
// 1520 amazon pay
// 3500 facebook pay
// 7420 total pay

//
// A student can be enrolled in a class only if the class is not full and the class schedule
// does not conflict with her current schedule.


// alert("click ok, to see if there is enough seats to enroll in class.");
// for (var i = 1; i <= 25; i++) {
//     var ranNum = Math.floor(Math.random() * 25);
// } console.log(ranNum);
// if(ranNum >=25) {
//     console.log("Sorry, there are no seats available to enroll.")
// }
// var availSchedule = prompt ("Please enter 'yes' if you have a sceduling conflict with class times from 10am - 11am. Enter 'no' if you do not have a sceduling problem between those times. ")
// if(availSchedule == "yes"){
//     console.log("please try back next semester.")
// } else {
//     console.log("We look forward to seeing you the first day of class.")
// }



//Next problem


// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
//
// var premMem = prompt("Are you a 'Premium Member'?  Enter 'yes' or 'no'.");
// if(premMem == "yes") {
//     console.log("Thank you for being a valued customer and enjoy your special discount")
// break;
// }else if (premMember == 'no'){
//     alert("Premium Members always enjoy greater discounts.");
//     var nonPrem = prompt("Are you purchasing 2 or more items before July 1, 2022?")
// } if(nonPrem == 'yes'){
//     console.log("Thank you for your multiple item purchase and enjoy your discount.")
// } else {
//     console.log("Sorry, your item will be full price.")
// }

//
// Next Problem
//
// Use the following code to follow the instructions below:
//
//
//
// Create a variable that holds a boolean value for each of the following conditions:
//     the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
//
//
// var username = 'codeup';
// var password = 'notastrongpassword';
// username.trim ();
// password.trim ();
//
// if(username.length <=  4 || >= 20) {
//     return false;
// }else if((username == password){
//     return false;
// }
// else if(username )


//Next section Functions

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


// **
// * TODO:
// * Call the function 'sayHello' and pass your name as a string literal argument.
// * Store the result of the function call in a variable named 'helloMessage'.
// *
// * console.log 'helloMessage' to check your work
// */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// function sayHello(name){
//     var howdy = "Hello " + name;
//     return howdy;
//
// }
// sayHello("Codeup");

// function sayHello(yourName){
//     var helloMessage = "Hello " + yourName;
//     return helloMessage;
//
// }
// sayHello("Ben");

// var myName = "Ben";
//
// function sayHello(myName){
//     var helloMessage = "Hello " + myName;
//     return helloMessage;
//
// }
// sayHello(myName);
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random


// var random = Math.floor((Math.random() * 3) + 1);
// console.log(random);
// var num = random;
//
// function isTwo(num){
//
//     if(random === 2){
//         alert("returns 'true'")
//     } if (random !== 2) {
//         alert("returns 'False'")
//     }
// }
// isTwo(random);
//
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip(tBill,percent){
//
// var tipAmt = tBill * percent;
//
// console.log("Your total bill is: $" + tBill + " percent of bill for tip: " + percent +  " your tip amount is $" + tipAmt)
//
// }
// calculateTip(20,.20);
// calculateTip(25.50,.25);
// calculateTip(33.42,.15);




/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// var x = prompt("Enter your bill amount $20, $25.50, or $33.42.");
// var y = prompt("Enter the percent of bill for your tip: .15, .20, .25 percent.");
//
//
// function calculateTip(tBill,percent){
//     var tBill = parseInt(x);
//     var percent = parseInt(y);
// var tipAmt = tBill * percent;
// alert("Your tip amount is: $" + tipAmt);
// console.log("Your total bill is: $" + tBill + " percent of bill for tip: " + percent +  " your tip amount is $" + tipAmt)
//
// }
// calculateTip();





/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


// function tipCalc(){
//     alert("your bill is $20")
//     var sumBillTip1 = bill1 * tip1;
//     var sumBillTip2 = bill1 * tip2;
//     var sumBillTip3 = bill1 * tip3;
//     var billTip1 =prompt("Please enter the gratuity amount you would like to add to your bill of $20"<br> + sumBillTip1 + " is 15% of your bill"<br> + sumBillTip2 + " is 20% of your bill"<br> + sumBillTip3 + " is 25% of your bill");
//     console.log(sumBillTip1, sumBillTip2, sumBillTip3);
//     console.log("The customer entered:" + billTip1)
//
//     console.log(bill1 * tip1 + " tip1 amount");
//     console.log(bill2 * tip2 + " tip2 amount");
//     console.log(bill3 * tip3 + " tip3 amount");
//     return sumBillTip1, sumBillTip2, sumBillTip3;
//
// }
// var tipTotal = tipCalc();
// console.log(tipTotal);



//**** Conditionals (if/else if/ else)


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
// var color = ['blue', 'red', 'cyan'];
//
// function analyzeColor(input) {
//
//     var result;
//
//     if(input == blue){
//         alert("blue is the color of the sky")
//     } else if(input == red){
//         alert("red is the color of a rose")
//     } else {
//         alert("I don't know anything that is cyan")
//     }
//     return result;
// }
// var input = prompt("What color would you like? blue, red, cyan");





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

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


// Generate a random number between 0 and 6
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
// var luckyNumber = Math.floor(Math.random() * 6);
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

 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



- whether the number is even or odd
- what the number plus 100 is
- if the number is negative or positive

var text = window.confirm("Press a button! \nEither Ok or Cancel.");
var pickNum = window.prompt("pick a number");


function numPicked(pickNum) {
    console.log(parseInt(pickNum));
    var result = pickNum %2;
    console.log(result);

    if (result === 0) {
        console.log("number is even")
    }else {
        console.log("number is negative")
    }
    console.log(pickNum + 100);
}
numPicked();


***************Loops********************
Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

For example, showMultiplicationTable(7) should output


7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


// const number = parseInt(prompt('Enter a number'));

for(var i = 1; i <= 10; i++){
    const result = i * number;
    console.log('${number} * ${i} = ${result}');
}



    123 is odd
80 is even
24 is even
199 is odd
...
Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999
Create a for loop that uses console.log to create the output shown below.


100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
Break and Continue
Create a file named break_and_continue.js in the js directory.
    Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
    Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
    Your output should look like this:


Number to skip is: 27

Here is an odd number: 1
Here is an odd number: 3
Here is an odd number: 5
Here is an odd number: 7
Here is an odd number: 9
Here is an odd number: 11
Here is an odd number: 13
Here is an odd number: 15
Here is an odd number: 17
Here is an odd number: 19
Here is an odd number: 21
Here is an odd number: 23
Here is an odd number: 25
Yikes! Skipping number: 27
Here is an odd number: 29
Here is an odd number: 31
Here is an odd number: 33
Here is an odd number: 35
Here is an odd number: 37
Here is an odd number: 39
Here is an odd number: 41
Here is an odd number: 43
Here is an odd number: 45
Here is an odd number: 47
Here is an odd number: 49
While Loops
Create a file named while.js in the js directory.

    Create a while loop that uses console.log() to create the output shown below.


2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
Do While Loop
An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

    5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones



















