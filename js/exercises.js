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


**
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


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
console.log(random);

function isTwo(num){
var num = random;
    if(num === 2){
        console.log("yes, the number is " + num)
    } if(num !== 2) {
        console.log("The random number is not two, it is: " + num)
    }
}



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













