// example of datatypes inference
// here the the data type is defined by the type Script
let fname = "dhruvin";

// here is the prefred method for the typescript

let lname: string;

lname = "Shiroya";

let newName = lname.toUpperCase();

console.log(newName);

// fname = 10 can not happen

// nubmer dataytpe
let age: number;

age = 23;
age = 25.5;

// boolean

let isAvailale: boolean = true;

console.log(isAvailale);

// ARRAY

let empList: string[];

empList = ["Shiroya", "Dan", "White"];

let anotherList: Array<number>;

anotherList = [1, 3, 4, 5, 6, 7, 8];

let greterList = anotherList.filter((num) => num > 4);
console.log(greterList);
let lesserList = anotherList.filter((num) => num <= 4);
console.log(lesserList);

let num = anotherList.findIndex((num) => num === 4);
console.log(num);

enum Color {
  Red,
  Green,
  Blue,
  White,
}

let c: Color = Color.White;

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(13, 14);

console.log(swapNumbs);
