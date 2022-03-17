
/*
function multiplyNumbers(x,y){
    return x * y;
}
var result = multiplyNumbers(5, 10);
console.log(result);*/

/*let a = prompt("put in a positive or negative number.")
function testNum (a){
    var result;
    if (a > 0){
        result = 'positive'
    } else {
        result = 'negative'
    }
    return result;

}
    console.log(testNum(a));*/

var a = prompt("enter number between 1-100 for 'A'.");
var b = prompt("enter another number between 1-100 for 'B'.");
function multiply(a,b){
    var result;
    if(a > b){
        result = "a is greater than b"
    } else {
        result = "b is greater than a"
    }
    return result;
}
console.log(multiply(a,b));


