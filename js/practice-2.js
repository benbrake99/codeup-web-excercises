
/*
function multiplyNumbers(x,y){
    return x * y;
}
var result = multiplyNumbers(5, 10);
console.log(result);*/

let a = prompt("put in a positive or negative number.")
function testNum (a){
    var result;
    if (a > 0){
        result = 'positive'
    } else {
        result = 'negative'
    }
    return result;

}
    console.log(testNum(a));


