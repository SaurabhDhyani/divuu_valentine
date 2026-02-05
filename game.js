let messages=[
    "You are my peace 💕",
    "You make my bad days disappear 😌",
    "You are the reason I smile randomly",
    "My heart feels safe with you",
    "You are my favorite thought",
    "You make life beautiful",
    "I love how you exist",
    "You are my comfort",
    "You are my forever crush",
    "You are my Divuu 💖"
    ];
    
    let gifs=[
        "https://tenor.com/bxZUiKkI4sJ.gif",
        "https://tenor.com/biu4r.gif",
        "https://tenor.com/dSsrPRJ8uXB.gif",
        "https://tenor.com/bAlzx.gif",
        "https://tenor.com/f2ZszDsgZ89.gif",
        "https://tenor.com/pV2Fw2slQ1l.gif",
        "https://tenor.com/jGNURdg1KdY.gif",
        "https://tenor.com/l8Jgd2zjYp5.gif",
        "https://tenor.com/b0rfY.gif",
        "https://tenor.com/suOLUlC9CYE.gif"
    ];
    
    let count=0;
    
    function startGame(){
    document.getElementById("startScreen").style.display="none";
    document.getElementById("gameScreen").style.display="block";
    dropHeart();
    }
    
    function dropHeart(){

    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="💖";
    
    heart.style.left=Math.random()*85+"%";
    heart.style.animationDuration="7s";
    
    document.getElementById("gameScreen").appendChild(heart);
    
    heart.addEventListener("click",()=>{
    showMessage();
    heart.remove();
    });
    
    heart.addEventListener("animationend",()=>{
    heart.remove();
    dropHeart();
    });
    
    }        
    
    function showMessage(){
    document.getElementById("msgText").innerText=messages[count];
    document.getElementById("gifImg").src=gifs[count];
    count++;
    
    if(count<10){
    dropHeart();
    }else{
    let btn=document.createElement("button");
    btn.id="nextBtn";
    btn.innerText="Next Cutie 💕";
    btn.onclick=()=>window.location="proposal.html";
    document.body.appendChild(btn);
    btn.style.display="block";
    }
    }
    
