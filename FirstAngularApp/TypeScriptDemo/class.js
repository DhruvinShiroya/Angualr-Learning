"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    Employee.getRandomNum = function () {
        return 5 / 4;
    };
    Employee.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " stays at ").concat(this.address);
    };
    Employee.prototype.GetId = function () {
        return this.id;
    };
    Employee.prototype.login = function () {
        return true;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, address, experience) {
        var _this = _super.call(this, id, name, address) || this;
        _this.experience = experience;
        return _this;
    }
    Manager.prototype.getExperience = function () {
        return this.experience;
    };
    Manager.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " manager stays at ").concat(this.address);
    };
    return Manager;
}(Employee));
var dhruvin = new Manager(4, "Dhruvin", "39 mouth", 5);
console.log(dhruvin);
console.log(dhruvin.getNameWithAddress());
var john = new Employee(5, "John", "e-12");
console.log(john.GetId());
var addresss = john.getNameWithAddress();
// john.id = 1;
// john.address = "E-12";
// john.name = "John";
console.log(john);
console.log(addresss);
console.log(Employee.getRandomNum());
var sunil = {
    name: "Umang",
    age: 23,
    line1: "34th ",
    line2: "",
    pincode: "L4M RR8",
    district: "Barrie",
    street: "jong street"
};
console.log(sunil);
console.log(john.login());
// you can use the obnject property as varaible
console.log(sunil.district);
// object destructuring
