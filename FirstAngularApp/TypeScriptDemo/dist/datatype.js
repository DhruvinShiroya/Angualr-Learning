"use strict";
// example of datatypes inference
// here the the data type is defined by the type Script
let fname = "dhruvin";
// here is the prefred method for the typescript
let lname;
lname = "Shiroya";
let newName = lname.toUpperCase();
console.log(newName);
// fname = 10 can not happen
// nubmer dataytpe
let age;
age = 23;
age = 25.5;
// boolean
let isAvailale = true;
console.log(isAvailale);
// ARRAY
let empList;
empList = ["Shiroya", "Dan", "White"];
let anotherList;
anotherList = [1, 3, 4, 5, 6, 7, 8];
let greterList = anotherList.filter((num) => num > 4);
console.log(greterList);
let lesserList = anotherList.filter((num) => num <= 4);
console.log(lesserList);
let num = anotherList.findIndex((num) => num === 4);
console.log(num);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
})(Color || (Color = {}));
// tuple datatype
let c = Color.White;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(13, 14);
console.log(swapNumbs);
// do not use any anywhere
let department;
