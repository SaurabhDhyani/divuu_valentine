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
        "assets/gifs/g1.gif",
        "assets/gifs/g2.gif",
        "assets/gifs/g3.gif",
        "assets/gifs/g4.gif",
        "assets/gifs/g5.gif",
        "assets/gifs/g6.gif",
        "assets/gifs/g7.gif",
        "assets/gifs/g8.gif",
        "assets/gifs/g9.gif",
        "assets/gifs/g10.gif"
    ];
    
    let count=0;
    
    function startGame(){
    document.getElementById("startScreen").style.display="none";
    document.getElementById("gameScreen").style.display="block";
    dropHeart();
    }
    
    function dropHeart(){

    let heart=document.createElement("div");
    heart.className="heartMain";
    heart.innerHTML="💖";
    
    heart.style.left=Math.random()*85+"%";
    heart.style.animationDuration="15s";
    
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
    

