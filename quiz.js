let questions=[
{
q:"Who is the boss of this relationship?",
a:["Saurabh","Divya","Both","No one"],
c:1
},
{
q:"If Divuu texts “I miss you”, what happens?",
a:["Saurabh smiles like idiot","Heart goes boom boom","Immediate reply","ALL OF THE ABOVE 💖"],
c:3
},
{
q:"Who owns Saurabh’s heart?",
a:["Pizza","Divya","Sleep","Phone"],
c:1
},
{
q:"Where do I plan to spend the rest of my life",
a:["Paris","In your heart 💖","Germany","Japan"],
c:1
},
{
q:"Final: Who is always right?",
a:["Divya","Google","Me","Nobody"],
c:0
}
];

let cuteCorrect=[
"Hehe correct cutie 😌💖",
"Good job baby 💕",
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
<h1 class="passText">You Passed Baby 💕💕</h1>
<p>You officially own Saurabh now 😌</p>
<button onclick="location.href='something.html'">Go Back</button>
`;
}

load();

// let q=[
//     {
//     q:"Who is the boss?",
//     a:["Saurabh","Divuu"],
//     c:1
//     },
//     {
//     q:"Who is cuter?",
//     a:["Divuu","Both"],
//     c:0
//     },
//     {
//     q:"Who deserves unlimited hugs?",
//     a:["Divuu","Saurabh"],
//     c:0
//     },
//     {
//     q:"Who owns Saurabh’s heart?",
//     a:["Divuu","Netflix"],
//     c:0
//     },
//     {
//     q:"Final: Who is always right?",
//     a:["Divuu","Nobody"],
//     c:0
//     }
//     ];
    
//     let i=0;
    
//     function load(){
//     document.getElementById("question").innerText=q[i].q;
//     let a=document.getElementById("answers");
//     a.innerHTML="";
    
//     q[i].a.forEach((x,n)=>{
//     let b=document.createElement("button");
//     b.innerText=x;
//     b.onclick=()=>check(n);
//     a.appendChild(b);
//     });
//     }
    
//     function check(n){
//     if(n==q[i].c){
//     i++;
//     if(i<q.length) load();
//     else{
//     alert("Passed 😌 Divuu is supreme.");
//     location.href="something.html";
//     }
//     }else{
//     document.getElementById("cute").innerText="Hehe wrong cutie 😌 try again";
//     }
//     }
    
//     load();
    



