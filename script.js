let player1=document.querySelector("#playerX");
let player2=document.querySelector("#player0");
const startbt=document.querySelector("#start");
const startfield=document.querySelector("#startField");
const gamefield=document.querySelector("#gameField");
let player1Name="";
let player2Name="";
function st(){
    startfield.setAttribute("class","playerNamesHide");
    gamefield.removeAttribute("class","gameAreaHide");
    gamefield.setAttribute("class","gameArea");

}

startbt.addEventListener("click", st);
let stPlayer=Math.floor(Math.random()*2);
console.log(stPlayer);
const msg=document.querySelector("#message");
if(stPlayer==0){
    msg.innerHTML="Player 1 Turn";
}
else{
    msg.innerHTML="Player 2 Turn";
    
}
document.getElementById("playerX").addEventListener("change",()=>{
    player1Name=document.getElementById("playerX").value;
    player2Name=document.getElementById("player0").value;
});

document.querySelectorAll(".btn").forEach((btn)=>{ 
    btn.addEventListener("click",()=>{
        btn.disabled=true; 
        btn.innerHTML=stPlayer==0?"&#9587;":"&#9711;";
        msg.innerHTML=stPlayer==0?"Player 2 Turn":"Player 1 Turn";
        stPlayer=stPlayer==0?1:0;
    });
});

