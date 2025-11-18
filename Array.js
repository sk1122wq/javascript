//  Array (Collection of items) 
//  create Array
// let Marks=[96,75,85,96];
// //  in Array we can store different data type
// // let info=["rahul",86,"lahore"]; 
// console.log(Marks);
// console.log(Marks.length); 
// //  property give some value and method do some work 
// let heroes=["ali","ahmad","mosa","khan"];
// console.log(heroes);
//  Array is a speical type of object 
//  in object key:value pair but in array idx:value pair 
//  Array indices arr[0],arr[1],arr[2]...... the value are store in a linear 
//  string are immmutable but array are mutable like heroes[2]="ali" can change 
//  looping over an Array (print all element of an array) loop-> iteration(string, object, array)
 let heroes=["ali","ahmad","mosa","Ehan"];
// //  for loop
// // for (let idx=0;idx<=heroes.length;idx++){
// //     console.log(heroes[idx]);
// // }
// for(let hero of heroes){
//     console.log(hero);
// }
// //  For a given array with marks of student-> [85,97,44,37,76,60] find the average marks of the entire class
// let Marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of Marks){
//     sum+=val;
// }
// let avg=sum/Marks.length;
// console.log(`avg marks of the class = ${avg}`);
//  For a given array with price of 5 item -> [250,645,300,900,50] All item have an offer of 10% off on them. Change the aarraay to store final price after applying offer 
// let item=[250,645,300,900,50];
// let idx=0;
// for(let val of item){
//     console.log(`value at index ${idx}=${val}`);
//     let offer=val/10;
//     item[idx]=item[idx]-offer;
//     console.log(`value of offer=${item[idx]}`);
//     idx++;

// }
//  Array Method (push(),pop( delete from end),tostring(convert array to string))
let fooditem=["potayo","apple","lichi","tomato"];
// hi', 'tomato']
// fooditem.push("chips");
// 5
// fooditem
// (5) ['potayo', 'apple', 'lichi', 'tomato', 'chips'] (push function add the item at a last)
// console.log(fooditem);

// let deleteditem=fooditem.pop();
// console.log(fooditems);
// console.log("deleted",deleteditem);
// convert Array to string 
// console.log(fooditem);
// console.log(fooditem.toString());
//  concat(): join multiple array and returns result 
//  unshift() add to start 
//  shift(): delete from start and return 
// let Heroes=heroes.concat(fooditem);
// console.log(Heroes);
// fooditem.unshift("orange");
// let val=Heroes.shift();
// console.log("delete",val);
//  Slice(): return a piece of the array slice(startidx,endidx)
//  splice: change original array (add, remove, replace) splice(startidx,delcount.newE...)
// console.log(fooditem.slice(1,2));
// let arr=[1,2,3,4];
// arr.splice(20,0,102);
//  Delete Element
// arr.splice(3,1);
//  Replace Element 
//  arr.splice(3,1,101);
//  create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflex"
// a) Remove the first company from the array
//  b) Remove Uber and Add Ola in its place
//  c) Add Amazone at the end 
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflex"];
// // companies.shift();
// // companies.splice(2,1,"ola");
// companies.push("Amazone");














