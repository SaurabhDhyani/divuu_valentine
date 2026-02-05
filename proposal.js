const no=document.getElementById("no");
const yes=document.getElementById("yes");
const gif=document.getElementById("reactGif");

let texts=[
"are you sure?",
"really sure?",
"think again",
"you might regret this",
"give it another thought",
"are you absolutely sure?",
"dont be so cold"
];

let gifs=[
"assets/gifs/1.gif",
"assets/gifs/2.gif",
"assets/gifs/3.gif",
"assets/gifs/4.gif",
"assets/gifs/5.gif"
];

let gifIndex=0;

no.addEventListener("mouseover",()=>{

let x=Math.random()*70;
let y=Math.random()*60;

no.style.position="absolute";
no.style.left=x+"%";
no.style.top=y+"%";

no.innerText=texts[Math.floor(Math.random()*texts.length)];

gif.src=gifs[gifIndex];
gifIndex++;
if(gifIndex>=gifs.length) gifIndex=0;

});

// Ambient floating emojis (BOTTOM → UP)

setInterval(()=>{
spawn("❤️","heart");
spawn("😊","blush");
spawn(["💖","🥰","😍"][Math.floor(Math.random()*3)],"fun");
},800);   // slowed down

function spawn(txt,cls){

let e=document.createElement("div");
e.className=cls;
e.innerHTML=txt;

// random X
e.style.left=Math.random()*100+"%";

// random size
e.style.fontSize=(20+Math.random()*25)+"px";

// add to page
document.body.appendChild(e);

// remove after animation
setTimeout(()=>e.remove(),6000);
}


yes.onclick=()=>{
window.location="celebrate.html";
};








