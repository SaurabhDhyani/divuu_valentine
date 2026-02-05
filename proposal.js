const no=document.getElementById("no");
const yes=document.getElementById("yes");
const gif=document.getElementById("reactGif");
const audio=document.getElementById("yesAudio");

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
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3lhY2xoaHN2cjRhY2F0Z2k5c3Bkam9nMWFhcDB3NGxldG92ZWl2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/901mxGLGQN2PyCQpoc/giphy.gif",
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmwybTdmYmQ1NDd6eWZrYzhsc2thaDNqa2JscXUzZWMwaHk5M3ZlbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mi4ec226vjAkehSLk0/giphy.gif",
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWduZXNqY2lsMHFmejYyaHA3bXBkb21mY2Eybmg2OHF1cWJ6aGFmdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EhmTZVtUAiddGVhfTP/giphy.gif",
"https://tenor.com/tMyhWVXe05H.gif",
"https://tenor.com/nldhlZ9LXIz.gif"
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

yes.onclick=()=>{
audio.play();
setTimeout(()=>{
window.location="celebrate.html";
},1000);
};
