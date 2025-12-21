//  Function(Block of code that perform a specific task, can be invoke whenever needed)
//  There are two type of function like console.log, toUpperCase(),push(),) are built in function 
//  User define function
//  Function Defination
//  function functionName() {
//  do some work
//  }
// Function call
// functionNamae();
//  function functionName (para1,para2,....){
// 
//  do some work
// }

// function myfunction(){
//     console.log("welcome to Apna college!");
//     console.log("we are learning js:");
// }
// myfunction();
// function myfunction(msg,n)
// {
//     // parameter->input the varaible inside the function defination 
//     console.log(mes);   
// }
//  myfunction("I love JS",100); // argunment 
//  function 2 number add
// function sum(x,y){
//     console.log(x+y);
// }
// sum(2,3);
//  return function
// function sum(x,y){ // Here x and y is local variable -> block scope
//     s=x+y;
//     return s; // one time we  write return after that we cannot return any thing inside a code
//     console.log("after return");
// }
// let val=sum(3,4);
// //  we can not write cosole.log(x);here because x is local variable
// console.log(val);
// Arrow functions(compact way of writing a function)
//  const functionName= (param1,param2...)->{
// do somework
// }
// function sum(a,b){
//     return a+b;
// }

// const arrowsum=(a,b)=>{
//     console.log(a+b);
// };
// arrowsum(3,4); // arrow function are used small code like sum mul 
//  create a function using the "function" keyword that take a string as an argument and return the number of vowel in the string 
// function countvowels(str) {
//     let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o"||char==="u"){
//             count++;}
//       }
//       console.log(count);
// }
//  create the function to perform the same tasks
// const countvow=(str)=>{
//      let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o"||char==="u"){
//             count++;}
//       }
//       console.log(count);

// }
//  For Each loop in Array(arr.forEach(callBackFunction)) callBack function: here it is a function to execute for each element in the array 
//  A callback is a function passed as an argument to another funtion.
//  we use three parameter in forEach loop value,arr and idx 
// let arr=[1,2,3,4];
// arr.forEach(function printval(val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });
//  Hifger oderfunction (ForEach loop(such function that take other function as a parameter))
//  For a given array numbers,print the square of each value using the forEach loop.
// let num=[1,2,3,,5,6];
// num.forEach((num)=>{
//     console.log(num*num);
// });
//  Some more Array Methods
//  Map(create a new array with the result of some operation. The value its callback are used to form new array)
// let num=[1,2,3,,5,6];
// num.map((val)=>{
//     console.log(val);
// });
// let num=[1,2,3,,5,6];
// let newArr=num.map((val)=>{
//     return val*2;
    
// });
//  console.log(newArr);
//  filter ( create a new array of element that given true for a conditionfitter) e.g all even element
// let arr=[1,2,3,4];
// let EvenArr=arr.filter((val)=>{
//     return val%2===0;


// });
// console.log(EvenArr);
//  for odd we can write return val%2!==0;
//  for value greater than 3return value>3
//  Reduce method (perform some operation and reduces the array to a single value. it return that single value)
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output); // 1+2+3+4=10  res is first element(1) and curr is second element(2)when 1+2=3 then 3 is store in 
//  the res and curr point to 3 so 3+3=6 the res =6 and curr point to 4 and 6+4=10
//  find the largest number using the reduce method
//  const output=arr.reduce((prev,curr)=>{
//     return prev > curr ?prev:curr;
// });
// console.log(output);
// //  we are given array of marks of students. filter our of the marks of student that scored 90+
// let marks=[97,98,34,23,99];
// let toppers=marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);
//  Take a number n as input from user. create an array of numbers from 1 to n. use the reduce method to calculate sum of all number in the array. Use the reduce method to calculate sum of all numbers in the array. 
//  Use the reduce method to calculate product of all numbers in the array. 
let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum=",sum);
let factorial=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial=",factorial);

