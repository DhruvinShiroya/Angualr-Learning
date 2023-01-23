import { isJsxOpeningElement } from "typescript";
import { Login, UserDefinedDatatype } from "./interface";

class Employee implements Login {
  private id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.id = id;
    this.name = name;
  }

  static getRandomNum(): number {
    return 5 / 4;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }

  GetId(): number {
    return this.id;
  }

  login(): boolean {
    return true;
  }
}

class Manager extends Employee {
  private experience: number;

  constructor(id: number, name: string, address: string, experience: number) {
    super(id, name, address);
    this.experience = experience;
  }

  getExperience(): number {
    return this.experience;
  }

  getNameWithAddress(): string {
    return `${this.name} manager stays at ${this.address}`;
  }
}

let dhruvin: Manager = new Manager(4, "Dhruvin", "39 mouth", 5);

console.log(dhruvin);
console.log(dhruvin.getNameWithAddress());

let john: Employee = new Employee(5, "John", "e-12");
console.log(john.GetId());
let addresss = john.getNameWithAddress();
// john.id = 1;
// john.address = "E-12";
// john.name = "John";

console.log(john);
console.log(addresss);

console.log(Employee.getRandomNum());

let sunil: UserDefinedDatatype = {
  name: "Umang",
  age: 23,
  line1: "34th ",
  line2: "",
  pincode: "L4M RR8",
  district: "Barrie",
  street: "jong street",
};

console.log(sunil);
console.log(john.login());

// you can use the obnject property as varaible

console.log(sunil.district);

// object destructuring
