var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Variable
var names = "Hello TS";
var count = 5000;
var strstatus = true;
var aName = true; //use any type
console.log("Hello World");
console.log(names);
console.log(count);
console.log(strstatus);
var aa = "aaa"; //
document.getElementById("id1").innerHTML = names;
document.write("Count is Type: " + typeof (count) + "<br>");
document.write("names is Type: " + typeof (names) + "<br>");
document.write("strstatus is Type: " + typeof (strstatus) + "<br>");
//chap 3 Array
var employee = ["A", "B", "C"];
employee.push("D");
employee.push("GG");
employee.push("500");
var employee2 = ["A", "B", "C"];
employee2.push(1000);
console.log(employee.toString());
var p1 = {
    realName: "bonbonpa",
    hp: 2000,
    weapon: "Hammer",
    attack: function () {
        return "player attack";
    }
};
console.log(p1.realName);
console.log(p1.hp);
console.log(p1.attack());
//chapter 5 Enumerations
//
var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["green"] = 15] = "green";
    Color[Color["blue"] = 20] = "blue";
})(Color || (Color = {}));
console.log(Color.red);
console.log("Status " + Color.green);
var numberConst;
(function (numberConst) {
    numberConst[numberConst["pi"] = 3.14] = "pi";
    numberConst[numberConst["e"] = 2.71] = "e";
})(numberConst || (numberConst = {}));
console.log(numberConst.pi * (6 * 6));
//chapter 6 Optional Parameter function
function showMessage() {
    console.log("Typescript Hello");
}
showMessage();
//optional parameter  => ? send or not send 
function addProduct(id, name, price) {
    console.log("ID : " + id);
    console.log("Name : " + name);
    if (price != undefined) {
        console.log("Price : " + price);
    }
}
addProduct(104, "FF");
addProduct(301, "EGG", 10);
//chapter 7 Rest Parameter Function
//Basic Function
function addNumber(num1, num2) {
    var sum = 0;
    sum = num1 + num2;
    console.log(sum);
}
addNumber(1200, 7);
//Rest Parameter Function 
function addNumber2() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    var i;
    for (i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log("Summary :" + sum);
}
addNumber2(23, 45);
addNumber2(1, 2, 3, 4, 5, 6, 7, 8, 9);
//Chapter 8  Class Object OOP Programming
var Employee = (function () {
    //constructor
    function Employee() {
        console.log("create object");
    }
    return Employee;
}());
var emp1 = new Employee;
//Chapter 9 Constructor & Method
var Employee2 = (function () {
    //constructor
    function Employee2(id, name, sex, salary) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.salary = salary;
        console.log("create object");
    }
    //method
    Employee2.prototype.display = function () {
        console.log("Id :" + this.id);
        console.log("Name :" + this.name);
        console.log("Sex :" + this.sex);
        console.log("Saraly :" + this.salary);
    };
    return Employee2;
}());
var emp2 = new Employee2(105, "bonbonpa", 1, 40000);
emp2.display();
var emp3 = new Employee2(107, "dvp", 0, 20000);
emp3.display();
//Chapter 10 Getter Setter
var Employee3 = (function () {
    //constructor
    function Employee3(id, name, sex, salary) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.salary = salary;
        console.log("create object");
    }
    //method
    Employee3.prototype.display = function () {
        console.log("Id :" + this.id);
        console.log("Name :" + this.name);
        console.log("Sex :" + this.sex);
        console.log("Saraly :" + this.salary);
    };
    //method getter 
    Employee3.prototype.setDepartment = function (dep) {
        this.department = dep;
    };
    //method setter
    Employee3.prototype.getDepartment = function () {
        return this.department;
    };
    return Employee3;
}());
var emp4 = new Employee3(105, "bonbonpa", 1, 40000);
emp4.setDepartment("Developer");
emp4.display();
console.log(emp4.getDepartment());
//let emp5 = new Employee3(107,"dvp",0,20000);
//emp3.display();
//chapter 11 Extends
var Animal = (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.disp = function () {
        console.log("My Name is " + this.name);
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var obj = new Cat("Cat Obj");
obj.disp();
//chapter 12 Override Method
var AnimalXO = (function () {
    function AnimalXO(n) {
        this.name = n;
    }
    AnimalXO.prototype.disp = function () {
        console.log("My Name is " + this.name);
    };
    return AnimalXO;
}());
var Catx = (function (_super) {
    __extends(Catx, _super);
    function Catx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Catx.prototype.disp = function () {
        console.log("My Name is " + this.name);
    };
    return Catx;
}(AnimalXO));
var objx = new Catx("Catx Obj");
objx.disp();
