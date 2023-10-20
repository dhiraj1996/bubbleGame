
var counter = 60;
let score = 0;
let hitrn = 0;



function generateScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function gameOver(){
    var ammo = `<div><h3>game over</h3></div><div><h3>Your Score is ${score}</h3></div>`;
    document.querySelector("#pbtm").innerHTML = ammo;
}

function generateCounter() {
    var interval = setInterval(function(){
        if(counter > 0 ){
            counter--;
            document.querySelector("#timerval").textContent = counter;
        }else{
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
}

function generateHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}




function generateBubble () {
    var clutter = "";

for(let i = 0; i < 144; i++){
    let bubblern = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble"><h3>${bubblern}</h3></div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}



document.querySelector("#pbtm").addEventListener("click", function(details){
    let contentNumber = Number(details.target.textContent);
    
    if(contentNumber === hitrn){
        generateScore();
        generateBubble();
        generateHit();
    }
});

generateCounter();
generateHit();
generateBubble();
