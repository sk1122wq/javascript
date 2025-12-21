// loop are used to execute a piece of code again and again
// for(let i=1;i<=5;i++){
//     console.log("apna college");
// }
//  calculate sum of 1 to 5 
// let sum=0;
// for(i=1;i<=5;i++){
//     sum=sum+i;

// }
// console.log("sum=",sum);
// console.log("Loop has ended");
// let sum=0;
// let n=7;
// for(i=1;i<=n;i++){
//     sum=sum+i;

// }
// console.log("sum=",sum);
// console.log("Loop has ended");
//  infinite loop 
// for(let i=1; i>=0;i++){
//     console.log("i=",i);
// }
// while(condition){
//  do some work} 
// let i=1;
// while(i<=10){
//     console.log("i=",i)
//  console.log("Apna college")
//     i++;
// }
// let i=20; 
//     while(i<=10){
//   console.log("Apna college")
//      i++;
//  }
//   do while loop 
//   in while loop the condition check at the started and in do while loop the condition check at last atleast one time execute do while loop
// let i=20;
//     do{
//   console.log("Apna college");
//      i++;
// }
// while(i<=10);
// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// } while(i<=5);
//  For -of loop(it help to iterate a loop a some special data type) like string and Array 
//  for (let val of strvar){ do some work}  the updation ,stope, and initilize are automatically happened
// let str="Apna college";
// for(let i of str){
//     console.log("i=",i);
// }
//  string size 
// let str="Apna college";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size",size);
//  for-in loop
// for (let key in objVar){ do some work} it is used for object
// let student={
//     name:"ali",
//     age:20,
//     cgpa:7.5,
//     ispass:true

// };
// for(let i in student){
//     // console.log(i);
//     console.log("i=",i,"value",student[i]);
// }
//  print all even number from 0 to 100

// for(i=0;i<=100;i++){
//     if(i%2==0)
//     console.log("i=",i);
// }
//  create a game where you start with any random game number . Ask the user to keep guessing the game number until the user enter correct value.
// let gamenum=63;
// let usernum=prompt("Guess the game number:");
// // console.log(usernum);
// while(usernum !=gamenum){
//     usernum=prompt("you enter wrong number,Guess again:");

// }
// alert("Congratulation, you enter the right number");
//  String in js( string is a sequence of character used to represent text)
//  creating string 
// let str="Apna college";
//  inbult properties(string length str.length(str.len),string indices(str[0],str[1]))
//  Template Literals in js 
//  A way to have embeded expression in string'this is a template literal'
//  string interpolation (to create string by doing substitution of placeholders)'string text$(expression)string text'
//  Template Literals in js  
// let specialstring='This is a tempalte literal';
// console.log( typeof specialstring);
// let obj={
//     item:"open",
//     price:10,
// };
// let output='the cost of ${obj.item} is ${obj.price} rupees';
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price,"rupees");
// Template literals
// console.log("Apna\ncollege");
// console.log("Apna\tcollege");
// console.log(structuredClone.length);// escape character take a single value 
//  String Method in js(These are built in function to manipulate a string) like str.toupperCase,str.toLowerCase(),str.trim() remove whitespace

// let str="Apnacollege";
// str=str.toUpperCase();
// // let newstr=toUpperCase();
//  console.log(str); // method does not change the original string these method alwys return a new value
//   console.log(newstr); 
//  str.trim() remove Whitespaces at begining and starting 
// let str="     Apna  college  js ";
// console.log(str.trim());
//  str.slice(start,end)  return part of string 
// let str="0123456";
// console.log(str.slice(1,3));
//  concatination
//  strstr.concat(str2) join str2 with str1
// let str1="apna";
// let str2="college";
// let res =str1.concat(str2);
// console.log(res); 
//  Replace Method 
//  str.replace(searchVal,newVal)
// let str="hello";
// console.log(str.replace("h","y"));
// console.log(str.replaceAll("h","y")); repeatly repeatly
// structuredClone.CharAt(idx);
// let str="I lovejs";
// console.log(str.charAt(0));
//  Qno.1 prompt the user to enter their full name. Generate a username for them based on the input start username with @ followed by their name="ali",username should "be@ali13"
let fullname=prompt("enter your fullname without space");
let username="@"+fullname+fullname.length;
console.log(username);