// how to write function
// funciton name ( parameters : typeof parameter) : return type{ return codehere}
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(2, 4));

const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(3, 2));

const mul = function (num1: number, num2: number): number {
  return num1 * num2;
};

// how to add opitonal parameters
function add1(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

// how to add paramter with default value

function add2(num1: number, num2: number, num3 = 10): number {
  return num1 + num2 + num3;
}

// how to add rest parameter in the funciton

function add4(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((x, y) => x + y, 0);
}

// hwo to create generic function

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let getResult = getItems([1, 2, 3, 4, 0, 6, 7, 8, 9]);

let getString = getItems(["a", "b", "c", "d", "e"]);

console.log(getResult);
console.log(getString);
