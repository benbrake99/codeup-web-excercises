
var pickNum = prompt("Pick any odd number between 1-50");
var selected = parseInt(pickNum);
console.log("The number to skip is " + selected);
console.log(' odd number are ');
for(var i = 1; i < 50; i += 2) {
    if(i === selected){
        console.log("This number is selected " + selected);
    }
    console.log("Here is an odd number " + i);
}