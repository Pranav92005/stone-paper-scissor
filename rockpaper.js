let userScore=0;
let compScore=0;
let userscorepara=document.querySelector("#user-score")
let compscorepara=document.querySelector("#comp-score")
 const msg=document.getElementById("msg")

const choices=document.querySelectorAll(".choice");


//winner score 
const showwinner=(userwin ,userchoice,compchoice)=>{
if(userwin){
    userScore++;
    userscorepara.innerHTML=userScore;

    msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compscorepara.innerHTML=compScore;
    msg.innerText=`You lose.  ${compchoice} beats  your ${userchoice}`;
    msg.style.backgroundColor="red";
}
}


const drawgame=()=>{
    
    msg.innerText="game draw";
    msg.style.backgroundColor="#081b31"
}
//generating computer choice
const genCompchoice=()=>{
    const options=["rock","paper","scissors" ];
    const randIDX=Math.floor(Math.random()*3);
    return options[randIDX];

}



//game logic
const playgame=(userchoice)=>{
// console.log("userchoice=", userchoice);
const compchoice=genCompchoice();
// console.log("compchoice=", compchoice);

if(userchoice===compchoice){
drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
}
else if(userchoice==="paper"){
    userwin=compchoice==="scissors"?false:true;

}else if(userchoice==="scissors"){
userwin=compchoice==="rock"?false:true;
}showwinner(userwin ,userchoice,compchoice);
}
}





//taking users choice
choices.forEach((choice)=>{

 choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice)


 })

})
