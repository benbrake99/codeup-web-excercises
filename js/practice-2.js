// //
// // /*
// // function multiplyNumbers(x,y){
// //     return x * y;
// // }
// // var result = multiplyNumbers(5, 10);
// // console.log(result);*/
// //
// // /*let a = prompt("put in a positive or negative number.")
// // function testNum (a){
// //     var result;
// //     if (a > 0){
// //         result = 'positive'
// //     } else {
// //         result = 'negative'
// //     }
// //     return result;
// //
// // }
// //     console.log(testNum(a));*/
// //
// // var a = prompt("enter number between 1-100 for 'A'.");
// // var b = prompt("enter another number between 1-100 for 'B'.");
// // function multiply(a,b){
// //     var result;
// //     if(a > b){
// //         result = "a is greater than b"
// //     } else {
// //         result = "b is greater than a"
// //     }
// //     return result;
// // }
// // console.log(multiply(a,b));
//
// // var pizzaPref = prompt("what kind of pizza would you like? 1. pineapple and hot sauce? 2. cheese 3. other");
// // switch (pizzaPref){
// //     case "pineapple and hot sauce":
// //         console.log("That's a great choice!");
// //         break;
// //     case "cheese":
// //         console.log("good choice, but very vanilla");
// //         break;
// //     default:
// //         console.log(pizzaPref + "looks like you want to pick your own!");
// //         break;
// // }
// // var increment = function (x){
// //     return x + 1;
// //
// // };
// // var two = increment(1);
//
// // function sum(a, b){
// //     var result = a + b;
// //     var result2 = a * b;
// //     console.log(result)
// //     console.log(result2)
// //     return result;
// //
// // }
// // sum(7,5);
// // sum(47, 4);
// //
// // function sum(x,y){
// //     var result = x * x;
// //     console.log(result);
// //     var result2 = y * y;
// //     console.log(result2);
// //     var result3 = x * y;
// //     console.log(result3);
// //     var result4 = result2 * result;
// //     console.log(result4);
// //
// // }
// // sum(4,5);
// //
// //
// // function myFunction(x,y){
// //     var x = "hello";
// //     var y = "world";
// //
// //     return x + y;
// // }
// // myFunction(6,5)
// //
// //
// // function go(){
// //     alert('hi');
// //     alert('hey there')
// // }
// // go();
// //
// // function go(name,age){
// //     alert(name);
// //     alert(age);
// // }
// // go(Ben,56);
// // go(Tim, 22);
// // go(Frank,18);
// //
// //
// // var name = 'Ben';
// // var age = 56;
// // function go(){
// //     alert (name);
// //     alert (age);
// // }
// // go();
// //
// // function add(first,second){
// //     return first + second;
// // }
// // var sum = add(1,2);
// // console.log(sum);
// //
// //
// // function go(name,age){
// //     if(age < 21){
// //         return name + " you are too young to drink!"
// //     }else {
// //         return name + " drink responibly"
// //     }
// // }
// // console.log(go(Will, 34));
// //
// // var age = 16;
// // if (age <= 15){
// //     return age + "you are too young to drive"
// // } else {
// //     return "you have probably been drinving for awhile"
// // }
//
// // function go() {
// //     alert("hello")
// // }
// // var myList ['car','truck','house','boat'];
// //
// // myList.forEach(function(value,index) {
// //     console.log(value, index)
// // })
// //
// // go();
// //
// // var = myArray['boat', 'house', ['Tom',Frank']];
//
// //
// // function someName(name1,name2){
// //     var a = name1 + " said to " + name2 + "what are you up to?";
// //     return a;
// // }
// // someName("Larry", "Tim");
//
// // function addOne(num1,num2) {
// //     if (num1 < num2) {
// //         console.log((num1) + " the first number is less than " + (num2))
// //     } else {
// //         console.log((num2) + " the second number is less than " + (num1))
// //     }
// // }
// //     addOne(42,18)
//
// // for (var i = 0; i < 5; i++) {
// //     text += "The number is" + i + "<br>";
// // }
//
// // for (statement 1, statement 2, statement 3){
// //     var a = statement 1, statement 2; statement 3;
// //     return a;
// // }
// // a("I like dogs", "I don't like cats", "horses are too big");
//
// // var i = 0;
// // for (i = 0; i < 10; i++){
// //     console.log(i);
// // }
//
// // for (var i = 10; i > 0; i--){
// //     console.log(i);
// // }
//
//
//
// //LESSON
//
//
// /**
//  * TODO:
//  * Write some code that uses a for loop to log every item in the names
//  * array.
//  */
// /**
//  * TODO:
//  * Refactor your above code to use a `forEach` loop
//  */
//
// /**
//  * TODO:
//  * Create the following three functions, each will accept an array and
//  * return an an element from it
//  * - first: returns the first item in the array
//  * - second: returns the second item in the array
//  * - last: returns the last item in the array
//  *
//  * Example:
//  *  > first([1, 2, 3, 4, 5]) // returns 1
//  *  > second([1, 2, 3, 4, 5]) // returns 2
//  *  > last([1, 2, 3, 4, 5]) // return 5
//  */
// // var names = ['Jim','Bob', 'Frank', 'Tom','Henry'];
// // console.log(names.length);
// // console.log(names);
// //  console.log (names[0]);
// //  console.log (names[1]);
// //  console.log (names[2]);
// //  console.log (names[3]);
// //
// //  for(var element of names) {
// //      console.log(element);
// //  }
// //
// // for(var element of names) {
// //     console.log(element);
// // }
// // names.forEach(element => console.log(element));
// //
// // var numbers = [1,2,3,4,5];
// // numbers.forEach(function (elem){
// //     if(elem === 1){
// //         console.log(elem + " return 1 ");
// //     } if(elem === 2){
// //         console.log(elem + " return 2 ");
// //     } if(elem === 5){
// //         console.log(elem + " return 5 ");
// //     }
// // });
//
// /**
//  * TODO:
//  * Read each console log below, and write some javascript code to perform
//  * the step that it describes
//  */
// //
// // var planets = [
// //     'Mercury',
// //     'Venus',
// //     'Earth',
// //     'Mars',
// //     'Jupiter',
// //     'Saturn',
// //     'Uranus',
// //     'Neptune'
// //
// //
// //
// // ];
// //
// // planets.unshift('sun');
// // planets.push('Pluto');
// // console.log(planets);
// // console.log('Removing "The Sun" from the beginning of the planets array.');
// // planets.shift();
// // console.log(planets);
// // planets.pop();
// // console.log(planets);
// // console.log('Finding and logging the index of "Earth" in the planets array.');
// // var index = planets.indexOf('Earth');
// // console.log("Earth is located " + index);
// // console.log("Reversing the order of the planets array.");
// // planets.reverse();
// // console.log(planets);
// // console.log("Sorting the planets array.");
// // planets.sort();
// // console.log(planets);
// // Imagine the supplied array is like a pack of cards. Write a function to shuffle an array in to a completely new and entirely random order, much like shuffling a pack of cards.
// //     example input: [2,4,6,8]
// // expected output: [4,2,8,6];
//
//
// // var numShuffle = [2,4,6,8];
// // var shuffleArray = numShuffle.sort((a,b) => 0.5 - Math.random());
// // console.log(numShuffle);
//
//
// //Write a function that returns the reading status of each of following books
//
// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];
// function myLibrary(){
//
//     for(var i = 0,library.length + 1, i++)
//
// }
//

//
// Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]

function myArray[12,2,3,4,5,6,7,8,9] {

    for(i = 0, myArray(%2)); i++;

}




// function showBookInfo(book) {
//     console.log("Title: " + book.title);
//     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
//     console.log("----")
// }
//
// for (let i = 0; i < books.length; i++) {
//     console.log("Book # " + i);
//     showBookInfo(books[i]);
// }











