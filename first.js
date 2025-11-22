// console.log("apna college"); // console.log are used to print something 
// console.log("tumhara college");
// alert("Apna college"); // are used to pop something on screen and semi colon are used to terminate one line
//  variable in JS (varaible are containers for data)
// Name="Tony stark";
// console.log("Nmae");
// console.log(Name);
// x=null;
// y=undefined;
// isfollow=false;// boolean value
// console.log(x);
// console.log(y);
// console.log(isfollow);
// //  java script are dynamically types 
// Name=25;
// console.log(Name);
// //  varable rules ( Varaible name are case sensitive;"a" and "A" is different)
// fullname="ibrahim";
// Fullname="ali";
// console.log(fullname);
// console.log(Fullname);
// //  only letters,digits,underscore(_),and $ is allowed.(not even space)
// fullname_="ibrahim";
// //  only a lette, underscore(_),or $ should be 1st character
// _fullname="ibrahim";
// //  Reverse words cannot be variable names.
// console="ali";
//   let const and var varaivle( variable can be re declared and update. but can be update. A block scope variable)
//  let (varable can not  be re declared but can be update. A block scope varible)
// let name="ali";
// var age=34;
// var age=34;
// var age=34; after 2015 let and const are come
// let name="ibrahim"
// console.log(name);
//  const ( variable cannot be re declared or update . A block scope variable)
// const p1=3.14;
// console.log(p1);
//  Data type in js( Number, string, Boolean, undefined, Null, Bright,symbol)(primitive data type (7)) and non primitive data types like object 
//  let price=100.5;
// let x;// undefine
//  let x=null; 
// let x=BigInt("123");
// let y=symbol("hello");
//  non- primitive (object(Array, functions))
// const student={
//     Name:"ali",
//     age:20,
//     cgpa:8.2,
//     ispass:true,
// };
// console.log(student.age); if we have object key in const then we can update the object key.
//  create a const object called "product" to store information shown in the  picture
// const product={
//     title:"Ball pen",
//     rating:4,
//     offer:5,
//     price:270,
// };
// console.log(product);
// Comments in js
// part of the code which is not executed
//  Operator
//  Arthematice operator (+,-,*,/,Modulus%,Exponential**,),uniary operator a++(a=+1,a=a-1) or a--,
// let a=5;
// let b=2;
// console.log("a+b=",a+b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);
//  uniary operator
// let a=5;
// let b=2;
// console.log("a=",a,"& b=",b);
// console.log("a++=",a++);
// console.log("++a=",++a);
// console.log("a=",a);
//  Assignemnt operator(=,+=,-=,*=,%=,**=)
// let a=5;
//  let b=2;
//   a+=4;  //a=a+4 =9
//  console.log("a=",a);
//  comparison operator(==(check only value(string->int)),===(check value as well as data type),!=,!==)
// let a=5;
//  let b=2;
//  console.log("5==2",a==b);
//  logical operators(Logical operator(&&),logical OR(||),logical(!))
//  let a=6;
//    let b=5;
//   let cond1=a>b; // true
//    let cond2=a===6; // true 
// //   console.log("cond1 && cond2=",cond1&&cond2);
// console.log("cond1 || cond2=",cond1||cond2);
// console.log(""!(6<5=",!(a===6)); true
//  Conditional statement (TO  implement some condition in the code)
// if statement
// let=age=25;
// if(age>18){
//     console.log("you can vote");
// }
//  if else statement 
// let mode="light";
// let color;
// if(mode==="dark-mode"){
//     color="black";}
//     else{
//         color="white";
//     }
//     console.log(color);
// let num=10;
// if(num%2===0){
//     console.log("even");
// }
// else{
//     console.log("odd");

// }
// else if(for multiple option)
//  let mode="dark";
//  let color;
//  if(mode==="dark"){
//      color="black";
//     }
//      else if(mode==="blue")     
//      {
//  color="blue";
//      }
//      else if(mode==="pink"){
//         color="pink";
//      }
//      else{
//         color="white";
//      }
//      console.log(color);
//  Ternary operator(condition?true output:false output(age > 18 ? "adult:"not adult";))
//  let age=25;
// let result=age>=18 ? "adult" :"not adult";
//  console.log(result);
//  MDN Docs
//  swithch it is the method to check the condition 
// practise question Get user to input using prompt("Enter a number:"). check if the number is a multiple of 5 or not

// let num=prompt("enter a number:");
// if(num%5===0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num," is not multiple of 5");

// }
//  write a code which can give grade to studdent according to their score
let grade;
let marks=prompt("Enter a student marks:");
if(marks>=80 && marks<100){
    console.log("grade of the stdudentnis A");
}
else if(marks>=70 && marks<80 ){
    console.log("grade of the student is B")
}
else if(marks>=60 && marks<70 ){
    console.log("grade of the student is c")
}
else if(marks>=50 && marks<60 ){
    console.log("grade of the student is D")
}else{
    console.log("grade of the student is F")
}




