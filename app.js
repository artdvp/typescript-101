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
console.log(p1.attack);