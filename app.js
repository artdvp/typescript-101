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
var emp1 = new Employee();
