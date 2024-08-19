let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpoint=document.querySelector("#your-score");
const compoint=document.querySelector("#com-score");
const resbtn=document.querySelector("#reset-btn");
resbtn.addEventListener("click",() =>{
   userscore=0;
   comscore=0;
   userpoint.innerText=userscore;
   compoint.innerText=comscore;
});
const gencomchoice=()=>{
    const list=["Rock","Paper","Scissor"];
    return list[Math.floor(Math.random()*3)];
}
 const showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
        userscore++;
        userpoint.innerText=userscore;
        msg.innerText=`You win!, your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        comscore++;
        compoint.innerText=comscore;
        msg.innerText=`You lost, ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }   
    }
const playgame=(userchoice)=>{
    const comchoice=gencomchoice();
    if(userchoice===comchoice){
       msg.innerText="Game was draw!, play again";
       msg.style.backgroundColor="rgb(21, 5, 200)";
    }
    else{
        let userwin=true;
        if(userchoice==="Rock"){
          userwin= comchoice==="Paper"?false:true; 
        }
        else if(userchoice==="Scissor"){
          userwin= comchoice==="Rock"?false:true;
        }
        else{
            userwin= comchoice==="Scissor"?false:true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});