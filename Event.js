//  Event (The change in the state of an object is known as an Event) Event are fired to notify code of "intersting change" that may affect code execution.
//  Mouse event (click, doubleclick etc). Keyboard events(keypress,keyup,keydown).Form event (submit etc).print event and many more.
//  Event Handling in js
//  node.event=()=>{
    // handle here  
    // } 
    let modeBtn=document.querySelector("#mode");
    let currentmode="light";
//     btn1.onclick=(evt)=>{
//     //     console.log("btn1 was clickeds");
//     //     let a=25;
//     //     a++;
//     //     console.log(a);
//     // }
//     //  Event object (it is a special object that has details abbout the event) All event handles have access to the Event object's properties and methods.
//     // node.event=(e)=>{
//         //  handle here

// console.log  (evt);
//   console.log  (evt.type);
//     console.log  (evt.target);
// }
//  Event listeners
//  node.addEventlisteners(event,callback)
//  node.removeEventlisteners(event,callback)
//  note: the callback reference should be same to remove
// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked using event listener");
// });

//  create a tpggle button that changes the screen to dark mode when clciked and light mode when clicked again
// modeBtn.addEventListener("clicked",() =>{
//     if(currentmode=="light"){
//         currentmode="dark";
//     }
//     else{
//         currentmode="light";
//     }

// console.log("currentmode");
// }
// );