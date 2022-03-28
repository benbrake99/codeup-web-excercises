
//
// const number = parseInt(prompt('Enter a number'));
//
// for(var i = 1; i <= 10; i++){
//     const result = i * number;
//     console.log('${number} * ${i} = ${result}');
// }

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// function showMultiplicationTable(input){
//
//     console.log(input + " x 1 = " + input * 1);
//     console.log(input + " x 2 = " + input * 2);
//     console.log(input + " x 3 = " + input * 3);
//     console.log(input + " x 4 = " + input * 4);
//     console.log(input + " x 5 = " + input * 5);
//     console.log(input + " x 6 = " + input * 6);
//     console.log(input + " x 7 = " + input * 7);
//     console.log(input + " x 8 = " + input * 8);
//     console.log(input + " x 9 = " + input * 9);
//     console.log(input + " x 10 = " + input * 10);
//
// }
// showMultiplicationTable(7);
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// 3.Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:





    // for (var i = 1; i <= 10; i++) {
    //     var ranNum = Math.floor(Math.random() * 200)+ 20;
    //     if (ranNum % 2 === 0) {
    //         console.log(ranNum + " is even");
    //     } else {
    //         console.log(ranNum + "is odd");
    //     }
    // }

// function getRandomInt(min, max) {
//     min = Math.ceil(20);
//     max = Math.floor(200);
//     return Math.floor(Math.random() * (max - min) + min);
// }

//
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// 4. Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var i = 1; i < 10; i++){
//
//     var outputString = i;
// //     console.log(outputString);
//
// }

for(var i=1; i<=9; i++){
    var Num='';
    for(var j=0; j<i; j++){
        Num += i;
    }
    console.log(Num) }

// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
//
// for (var i = 100; i > 1; i = i - 5) {
//     console.log(i);
// }

// Break and Continue
// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:

//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


//
// EXAMPLE OF LOOOP IN A LOOP


for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("----------------");
}
