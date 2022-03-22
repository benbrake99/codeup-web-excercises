
// var pickNum = prompt("Pick any odd number between 1-50");
// var selected = parseInt(pickNum);
// console.log("The number to skip is " + selected);
// console.log(' odd number are ');
// for(var i = 1; i < 50; i += 2) {
//     if(i === selected){
//         console.log("This number is selected " + selected);
//     }
//     console.log("Here is an odd number " + i);
// }



do{
    var userInput= prompt("Please enter an odd number between 1 and 50.")
} while (userInput % 2 ===0|| userInput <1 || userInput > 50 || isNaN(userInput));

for (var i = 1; i <= 50; i++) {
    if (i == userInput ){
        console.log("yikes! skipping number: " + userInput)
    }else if (i % 2 !==0) {
        console.log ("this is an odd number " + i)
    }else{
        continue;
    }
}