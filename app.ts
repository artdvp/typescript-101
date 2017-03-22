

//Variable
var names:string = "Hello TS";
var count:number = 5000;
var strstatus:boolean = true;

let aName:any = true ; //use any type

console.log("Hello World");
console.log(names);
console.log(count);
console.log(strstatus);

let aa = "aaa"; //

document.getElementById("id1").innerHTML= names ; 
document.write("Count is Type: " + typeof(count) + "<br>");
document.write("names is Type: " + typeof(names) + "<br>");
document.write("strstatus is Type: " + typeof(strstatus) + "<br>");



//chap 3 Array
var employee:string[] =  ["A", "B", "C"];
employee.push("D");
employee.push("GG");
employee.push("500");


var employee2:any[] =  ["A", "B", "C"];
employee2.push(1000);
console.log(employee.toString());

//chap 4 Interface Basic
// structure is make you only assign data every pattern
interface Player{
    realName : string;
    hp:number;
    weapon: string;
    attack:()=>string
}

let p1:Player={
    realName : "bonbonpa",
    hp: 2000,
    weapon: "Hammer",
    attack: ():string=>{
        return "player attack";
    }
}

console.log(p1.realName);
console.log(p1.hp);
console.log(p1.attack);


//chapter 5 Enumerations
//
enum Color{
    red=10,
    green,
    blue,
}
console.log(Color.red);