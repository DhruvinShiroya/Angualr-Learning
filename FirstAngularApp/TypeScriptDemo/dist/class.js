"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    id;
    name;
    address;
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    static getRandomNum() {
        return 5 / 4;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    GetId() {
        return this.id;
    }
    login() {
        return true;
    }
}
class Manager extends Employee {
    experience;
    constructor(id, name, address, experience) {
        super(id, name, address);
        this.experience = experience;
    }
    getExperience() {
        return this.experience;
    }
    getNameWithAddress() {
        return `${this.name} manager stays at ${this.address}`;
    }
}
let dhruvin = new Manager(4, "Dhruvin", "39 mouth", 5);
console.log(dhruvin);
console.log(dhruvin.getNameWithAddress());
let john = new Employee(5, "John", "e-12");
console.log(john.GetId());
let addresss = john.getNameWithAddress();
// john.id = 1;
// john.address = "E-12";
// john.name = "John";
console.log(john);
console.log(addresss);
console.log(Employee.getRandomNum());
let sunil = {
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
