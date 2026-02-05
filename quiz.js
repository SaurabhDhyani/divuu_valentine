let q=[
    {
    q:"Who is the boss?",
    a:["Saurabh","Divuu"],
    c:1
    },
    {
    q:"Who is cuter?",
    a:["Divuu","Both"],
    c:0
    },
    {
    q:"Who deserves unlimited hugs?",
    a:["Divuu","Saurabh"],
    c:0
    },
    {
    q:"Who owns Saurabh’s heart?",
    a:["Divuu","Netflix"],
    c:0
    },
    {
    q:"Final: Who is always right?",
    a:["Divuu","Nobody"],
    c:0
    }
    ];
    
    let i=0;
    
    function load(){
    document.getElementById("question").innerText=q[i].q;
    let a=document.getElementById("answers");
    a.innerHTML="";
    
    q[i].a.forEach((x,n)=>{
    let b=document.createElement("button");
    b.innerText=x;
    b.onclick=()=>check(n);
    a.appendChild(b);
    });
    }
    
    function check(n){
    if(n==q[i].c){
    i++;
    if(i<q.length) load();
    else{
    alert("Passed 😌 Divuu is supreme.");
    location.href="something.html";
    }
    }else{
    document.getElementById("cute").innerText="Hehe wrong cutie 😌 try again";
    }
    }
    
    load();
    