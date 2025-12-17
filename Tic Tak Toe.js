let boxes=document.querySelectorAll(".box");
let ResetBtn=document.querySelector("#Resetbtn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true; 
const winPatterns=[
    [0,2,3],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const ResetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classlist.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked ");
        box.innerText="ABCD";
        if (turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
msg.innerText=`Congrations,Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner=()=>{
    for (let pattern of winPatterns){
        // console.log(pattern [0],pattern [1],pattern [2]);
    
    //   console.log(boxes[pattern [0]].innerText,boxes[pattern [1]].innerText,boxes[pattern [2]].innerText);
    let posi1Val=boxes[pattern[0]].innerText;
    let posi2Val=boxes[pattern[1]].innerText;
    let posi3Val=boxes[pattern[2]].innerText;
        if(posi1Val!="" && posi2Val!="" && posi3Val!=""){
            if(posi1Val===posi2Val&& posi2Val===posi3Val){
                console.log("winner",posi1Val);
                showWinner(posi1Val);
            }

    }
}
};
newGameBtn.addEventListener("click",ResetGame);
ResetBtn.addEventListener("click",ResetGame);


