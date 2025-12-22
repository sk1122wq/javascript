//  prototype (A javascript object is an entity having state and behaviour (properties and method)). JS object 
//  have a special property called prototype. we can set prototype using----proto---
// //  if object and prototype(object inside object) have the same method. object method will be used.
// const student={
//     fullname:"ali",marks:80,
//     printMarks:function(){ // method
//         console.log("marks=",this.marks); // this indicate student here
//     }
// }
// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     }

// };
// const karanArjun1={
//     salary:50000,
//      calcTax(){
//         console.log("tax rate is 20%");
//      },
// };
// const karanArjun2={
//     salary:50000,
// };
// const karanArjun3={
//     salary:50000,
// };
// karanArjun1.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
//  classes in js(Class is a program-code template for creating objects. Thoses object will have some state (variable) and some behaviour (function) inside it)
//  class MyClass{
// constructor(){....}
//  myMethod(){....}
// }
// let myobj=newMyClass();
// class ToyotaCar{
//     start(){
//         constructor(){
//             console.log("creating an object");
//         }
//         console.log("car started");
//     }
//     stop(){
//         console.log("car stopped");
//     }
//     setBrand(brand){
//         this.brandName=brand;
//     }
// }
// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus=new ToyotaCar();
//constructor in js(Constructor() method is: 1) automatically invoked by new 2) initialized object constructor() .The main purpose of constructor is to initialized the object.
//  inheritance in js(inheritance is passing down properties and method from parent class to child class)
//  class parent{
//  }
//  class child exxtend parent{
//  }
//  if child and parent have same method, child's method will be used[method overloading]
// class person{
//     eat(){
//         console.log("eat")
//     }
//     sleep(){
//         console.llog("sleep")
//     }
//      work(){
//         console.log("do nothing");
//      }
// }
// class Engineer extends person {
//     work(){
//         console.log("solve problems,build something");
//     }
// }
// let ibrahimobj=new Engineer();
//  when we have same function in parent and child class than child class invoke and that is called method overloading 
//  sper keyword(The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.)
//  super(args)// call parent constructor
//  super.parentmethod(args)
// class person{
//     constructor(){
//         this.species="homo sapiense";
//     }
//     eat(){
//         console.log("eat")
//     }

// }
// class Engineer extends person {
//     constructor(branch){
//         super(); // to invoke parent class constructor 
//         this.branch=branch;
//     }
//     work(){
//         console.log("solve problems,build something");
//     }
// }
// let ibrahimobj=new Engineer("chemical engg");
//  Qno.1 you are creating a website for your college. create a class User with 2 properties, name and email. it also has a method called viewData() that allows user to view data. 
// let Data="secrete information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     ViewData(){
//         console.log("data=",Data);
//     }
// }
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         Data="some new value";
//     }
// }
// let student1=new User("ali","abc@gail.com");
// let student2=new User("ahmad","efg@gmail.com");
// let admin1=new Admin("shamim","shamim@gmail.com");
//  Qno.2 create a new class Admin which inherit from User. Add a new method called editData to Admin that allow it to edit website data.
//  Error Handling
//  try{
// ....normal code} catch(err){//err is error object
// .....handling console.error();
// }
let a=5;
let b=6;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
try{console.log("a+b=",a+c);
}
    catch(err){
        console.log(err);
    }
    


console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);