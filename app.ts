

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

//Basic Function
function addNumber(num1:number,num2:number){
    let sum:number = 0;
    sum = num1 + num2;
    console.log(sum);
}

addNumber(1200,7);

//Rest Parameter Function 
function addNumber2(...num:number[]){
   let sum:number=0;
   let i ;
   for(i=0 ; i<num.length; i++)
   {
       sum += num[i];
   }
   console.log("Summary :" + sum );
}


addNumber2(23,45);
addNumber2(1,2,3,4,5,6,7,8,9);

//Chapter 8  Class Object OOP Programming
class Employee{
    //Property
    private id:number;
    private name:string;
    private sex:number;
    private saraly:number;
    //constructor
    constructor(){
        console.log("create object");
    }
}

let emp1 = new Employee


//Chapter 9 Constructor & Method

class Employee2{
    //Property
    private id:number;
    private name:string;
    private sex:number;
    private salary:number;
    //constructor
    constructor(id:number,name:string,sex:number,salary:number){
        this.id = id ;
        this.name = name ; 
        this.sex = sex;
        this.salary = salary;
        console.log("create object");
    }
    //method
    display():void{
        console.log("Id :" + this.id);
        console.log("Name :" + this.name);
        console.log("Sex :" + this.sex);
        console.log("Saraly :" + this.salary);
    }
}

let emp2 = new Employee2(105,"bonbonpa",1,40000);
emp2.display();

let emp3 = new Employee2(107,"dvp",0,20000);
emp3.display();

//Chapter 10 Getter Setter

class Employee3{
    //Property
    private id:number;
    private name:string;
    private sex:number;
    private salary:number;
    private department:string;
    //constructor
    constructor(id:number,name:string,sex:number,salary:number){
        this.id = id ;
        this.name = name ; 
        this.sex = sex;
        this.salary = salary;
        console.log("create object");
    }
    //method
    display():void{
        console.log("Id :" + this.id);
        console.log("Name :" + this.name);
        console.log("Sex :" + this.sex);
        console.log("Saraly :" + this.salary);
    }
    
    //method getter 
    setDepartment(dep:string):void{
        this.department = dep;
    }
    //method setter
    getDepartment():string{
        return this.department;
    }
    
}

let emp4 = new Employee3(105,"bonbonpa",1,40000);
emp4.setDepartment("Developer");

emp4.display();
console.log(emp4.getDepartment());

//let emp5 = new Employee3(107,"dvp",0,20000);
//emp3.display();

//chapter 11 Extends

class Animal{
    public name:string;
    
    constructor(n:string){
        this.name= n ;
    }
     disp():void{
        console.log("My Name is " + this.name);
    }
}

class Cat extends Animal {
   
}

var obj = new Cat("Cat Obj");
obj.disp();

