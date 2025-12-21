//  Window object (The window object an open window in a browser. it is browser object (not javascript's) and is automatically created by browser ) it is a global object with lost of  properties and method
//  window.console.log("hello");
//  what is DOM (When a web page is located the browser creates a Document Object Model of the page it is a tree of object created by browser it represen
// js access automaticaly HTML code and stroe in js as a document that document called DOM 
//  for window object console.dir(document.body);
// document.body.style.background="red"; // change dynamically 
//  DOM Manipulation(selecting with id) document.getElementByld("myid")
// let heading=document.getElementById("heading");
// console.dir(heading);
//  selecting with class name document.getElementsByClassName("myclass")
//  let heading=document.getElementsByClassName(heading);
//  console.dir(heading);
//  console.log(heading);
// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);
//   selecting with Query selector
//  let first=document.querySelector("p");
//  console.dir(first); // return first element
//    let firstAll=document.querySelectorAll("p");
//  console.dir(firstAll); // return a Nodelist
//  Dom Manipulation properties 
//  tagName: return tag for element nodes
// innerHTML: return html content of element nodes and its children
// innerText: return text content of element nodes and its children 

// Textcontent : return text content of element nodes and all its decendents
//   let div=document.querySelector("div");
//  console.dir(div); 
//  create a H2 heading element with Text -"Hello javascript ". Append from Apna college student to this text using js
// let h2=document.createElement("h2");
// console.dir(h2.innerText);
// h2.innerText==h2.innerText+" Apna college student";
//  create 3 div with common class name-"box". Access them and add some unique text text to each of them
//  let div =document.querySelector("div");
//  console.log(div(0));
//  div(0).innerText="new unique value 1";
//  DoM Manipulation
//  Attritube (getAttribute (attr) to get the attribute value )
//  setAttribute (attr.value) the set the attribute val 
// let div=document.querySelector("div");
// console.log(div.setAttribute("id","new-div"));
// let id=div.getAttribute("id");
// console.log(id); 
//  style 
//  node.style
//  let div=document.querySelector("div"); 

// DOM Manipulation (insert elements)
//  node.append(el) add at the end of node(inside)
//  node.prepend(el) add at the started of node (inside)
//  node.before(el) add before the node (outside)
//  node.affter(el) add after the node (outside)
// let newBtn=document.createElement("button");
// newBtn.innerText="click me"
// console.log(newBtn);
// let div=document.querySelector("div");
// div.append(newBtn);
//  Delete element 
//  node.remove()  remove  the node 
//  practise question create a new element . give it is a text " click me"background color of red and text color of white
//  insert the button at the first element inside the body tag


