"use strict";


/*function addNumbers = (){
    var total = 4 + 19;
    return total;
    console.log(total);

}

var =

function addNumOne(name)*/

/*
var name = "Ben";


function sayHello (name){
    var helloMessage = name + " How are you?"
    console.log(helloMessage);
    return sayHello;
}
sayHello(name);
*/

// }
//1. name the function "sahHello"
//2. define parameter as "name"
//2. make var named helloMessage
//3. console.log()
//4. return

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
/*
var sayHello = "Hello, how are you";
function name = (){

    console.log(helloMessage);
}
name();
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
/*var myName = "Ben";
var helloMessage = sayHello(myName);
function sayHello (helloMessage) {
    return (helloMessage + " How are you?");

}
console.log(helloMessage)*/

/*
1. make variable named "myName"
2. pass the variable to the "sayHello" function
console log sayHello*/


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random


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
/*
var random = Math.floor((Math.random() * 3) + 1);
var myResult = isTwo(random);
function isTwo (random) {
    if (random == 2) {
        return true;

    } else {
        return false;
    }
}
console.log(random);
console.log(myResult);

*/


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
/*var bill1 = 20;
var tip1 = .20;
var tip1Total = bill1 * tip1
var bill2 = 25.50;
var tip2 = .25;
var bill3 = 33.42;
var tip3 = .15;

function tipCalc(){
    var sumTip1 = bill1 * tip1;
    var sumTip2 = bill2 * tip2;
    var sumTip3 = bill3 * tip3;
    console.log(bill1 * tip1 + " tip1 amount");
    console.log(bill2 * tip2 + " tip2 amount");
    console.log(bill3 * tip3 + " tip3 amount");
    return sumTip1, sumTip2, sumTip3;

}
var tipTotal = tipCalc();
console.log(tipTotal);*/


/*ar myTip20 = (.20);
/!*var myTip25 = (.25);
var myTip15 = (.15);*!/
var myBill20 = (20);
/!*var myBill25 = (25.50);
var myBill33 = (33.42);*!/

var tipTotal = (calculateTip);
console.log(tipTotal);*/

/*function calculateTip (myBill20, myBill25, myBill33){
   var tip1 = calculateTip * myTip20;
   var tip2 = calculateTip * myTip25;
   var tip3 = calculateTip * myTip15;
   console.log(tip1, tip2, tip3)
*/

//function calculateTip(myBill20){
//    var tip1 = calculateTip * myTip20

//}
//calculateTip(myBill20);


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
/*
var bill1 = 20;

var tip1Total = bill1 * tip1
var bill2 = 25.50;
alert("your bill is $25.50")

var bill3 = 33.42;*/
/*
alert("your bill is $33.42")

var tip1 = .15;
var tip2 = .20;
var tip3 = .25;




function tipCalc(){
    alert("your bill is $20")
    var sumBillTip1 = bill1 * tip1;
    var sumBillTip2 = bill1 * tip2;
    var sumBillTip3 = bill1 * tip3;
    var billTip1 =prompt("Please enter the gratuity amount you would like to add to your bill of $20"<br> + sumBillTip1 + " is 15% of your bill"<br> + sumBillTip2 + " is 20% of your bill"<br> + sumBillTip3 + " is 25% of your bill");
    console.log(sumBillTip1, sumBillTip2, sumBillTip3);
    console.log("The customer entered:" + billTip1)

    console.log(bill1 * tip1 + " tip1 amount");
    console.log(bill2 * tip2 + " tip2 amount");
    console.log(bill3 * tip3 + " tip3 amount");
    return sumBillTip1, sumBillTip2, sumBillTip3;

}
var tipTotal = tipCalc();
console.log(tipTotal);


*/

/** */
/** * TODO:
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


// TODO: write a conditional that prints "hey, she's my instructor" to the
//  console if the name provided is "Laura", but if the name provided
//  is "Kenneth", print out "oh, he's my instructor too!", if the name
//  is neither Laura nor Kenneth, print out "um I don't know them"

/*

var name = prompt(" " +
    what is your name?");
if (name == Laura){
    console.log("hey she's my instructor");
} else if (name == Kenneth){
    console.log("he's my instructor too");
} else {
    console.log("um I don't know them");
}
*/


