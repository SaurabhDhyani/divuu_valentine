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

// Ambient floating emojis on proposal page (BOTTOM → UP)

setInterval(()=>{
spawn("❤️");
spawn("😊");
spawn(["💖","🥰","😍"][Math.floor(Math.random()*3)]);
},600);

function spawn(txt){

let e=document.createElement("div");
e.className="ambient";
e.innerHTML=txt;

// Random horizontal position
e.style.left=Math.random()*100+"%";

// Start at bottom
e.style.bottom="-40px";
e.style.position="fixed";

e.style.fontSize=Math.random()*20+20+"px";

document.body.appendChild(e);

e.animate(
[
{ transform:"translateY(0)", opacity:1 },
{ transform:"translateY(-110vh)", opacity:0 }
],
{
duration:6000,
easing:"ease-out"
}
);

setTimeout(()=>e.remove(),6000);
}




yes.onclick=()=>{
window.location="celebrate.html";
};






