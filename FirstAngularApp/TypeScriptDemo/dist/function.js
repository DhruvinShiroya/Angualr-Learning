"use strict";
// how to write function
// funciton name ( parameters : typeof parameter) : return type{ return codehere}
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 4));
const sub = (num1, num2) => num1 - num2;
console.log(sub(3, 2));
const mul = function (num1, num2) {
    return num1 * num2;
};
// how to add opitonal parameters
function add1(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// how to add paramter with default value
function add2(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
// how to add rest parameter in the funciton
function add4(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((x, y) => x + y, 0);
}
// hwo to create generic function
function getItems(items) {
    return new Array().concat(items);
}
let getResult = getItems([1, 2, 3, 4, 0, 6, 7, 8, 9]);
let getString = getItems(["a", "b", "c", "d", "e"]);
console.log(getResult);
console.log(getString);
