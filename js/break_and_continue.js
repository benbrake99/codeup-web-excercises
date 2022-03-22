
var pickNum = prompt("Pick any odd number between 1-50");
var selected = pickNum;
console.log(' odd number are ');
for(var i = 1; i < 50; i += 2) {
    if(i === selected){
        console.log(selected + "This number is skipped");
    }
    console.log("Here is an odd number " + i);
}