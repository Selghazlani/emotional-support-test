const container=document.getElementById('container');
function start(){
    container.innerHTML=`
    <h1>how are you feeling today twin?</h1>
    <button onclick="imokay()">i'm okay</button>
    <button onclick="imsad()">i'm sad</button>`
    ;
}
function imokay(){
    container.innerHTML=`
    <h1>sorry twin,can't help</h1>
    <button onclick="retake()">retake test</button>
    `
}
function imsad(){
    container.innerHTML=`
    <h1>do you need mommy to comfort you ?</h1>
    <button onclick="need(true)">neeeed</button>
    <button onclick="non(false)">no</button>
    `
}
function need(wantsbaddie){
    if (wantsbaddie){
    container.innerHTML= `
    <h1>here you go twin </h1>
    <video controls autoplay>
    <source src="v.mp4" type="video/mp4">
    </video>
    <br>
    <button onclick="retake()">retake test</button>
    `
    }else{
        container.innerHTML=`
        <h1>sorry ,can't help you</h1>
        <button onclick="retake()">retake test </button>
        `
    }
}
function retake(){
    container.innerHTML=`
    <h1>do you need emotional support ?<h1>
    <button onclick="start()">start test </button>
    `
}
function non(){
    container.innerHTML=`
    <h1>Are you gay?<h1>
    <button onclick="isgay()">yes</button>
    <button onclick="isgay()">yes</button>
    `
}
function isgay(){
     container.innerHTML=`
     <h1>WE GOT A FAGGOT RIGHT HERE </h1>
     <button onclick="retake()">retake test</button>
     `
}