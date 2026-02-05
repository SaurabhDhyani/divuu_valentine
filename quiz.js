let questions=[
{
q:"Who is the boss of this relationship?",
a:["Saurabh","Divuu","Both","Netflix"],
c:1
},
{
q:"Who is cuter?",
a:["Divuu","Both","Saurabh","Teddy"],
c:0
},
{
q:"Who owns Saurabh’s heart?",
a:["Pizza","Divuu","Sleep","Phone"],
c:1
},
{
q:"Who deserves unlimited hugs?",
a:["Divuu","Saurabh","Both","Nobody"],
c:0
},
{
q:"Final: Who is always right?",
a:["Divuu","Google","Mom","Nobody"],
c:0
}
];

let cuteCorrect=[
"Hehe correct cutie 😌💖",
"See? You know us so well 🥹",
"Good job baby 💕",
"Obviously Divuu wins 😏",
"You’re too smart 😌"
];

let i=0;

function load(){
document.getElementById("cute").innerText="";
document.getElementById("question").innerText=questions[i].q;

let a=document.getElementById("answers");
a.innerHTML="";

questions[i].a.forEach((x,n)=>{
let b=document.createElement("button");
b.innerText=x;
b.onclick=()=>check(n);
a.appendChild(b);
});
}

function check(n){
if(n===questions[i].c){

document.getElementById("cute").innerText=
cuteCorrect[Math.floor(Math.random()*cuteCorrect.length)];

setTimeout(()=>{
i++;
if(i<questions.length){
load();
}else{
showPassed();
}
},900);

}else{
document.getElementById("cute").innerText="Hehe wrong cutie 😌 try again";
}
}

function showPassed(){
document.querySelector(".quizCard").innerHTML=`
<h1 class="passText">You Passed Divuu 🥹💖</h1>
<p>You officially own Saurabh now 😌</p>
<button onclick="location.href='something.html'">Go Back</button>
`;
}

load();
