

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
console.log(p1.attack());


//chapter 5 Enumerations
//
enum Color{
    red=10,
    green=15,
    blue=20,
}
console.log(Color.red);
console.log("Status " + Color.green);

enum numberConst{
    pi=3.14,
    e=2.71
}

console.log(numberConst.pi * (6*6));

//chapter 6 Optional Parameter function

function showMessage(){
    console.log("Typescript Hello");
}

showMessage();

//optional parameter  => ? send or not send 
function addProduct(id:number,name?:string,price?:number){
    
    console.log("ID : " + id );
    console.log("Name : " + name);
    if(price != undefined)
    {
    console.log("Price : " + price);
    }
}

addProduct(104,"FF");
addProduct(301,"EGG", 10);


//chapter 7 Rest Parameter Function

function addNumber(num1:number,num2:number){
    let sum:number = 0;
    sum = num1 + num2;
    console.log(sum);
}

addNumber(1200,7);