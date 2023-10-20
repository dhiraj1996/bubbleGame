let timer = 60;
// var clutter = ""; Isko bahar rakha tha to while clicking the correct option bubble was not reloading
let score = 0; // But isko function ke andar rakhne se score ek hi baar badhta hai.
let hitrn = 0;


function increaseScore(){
    
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function hitNumber(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn; 
}

function generateBubbles() {
    var clutter = "";
    for (let i=0;i<144;i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

//I tried this one also but to run timer in real time
//we have to create in setInterval functions

// var timer = 6;
// function runTimer(){
//     if(timer > 0){
//         timer--;
//         document.querySelector("#timerval").textContent = timer;
//     }
// }

function runTimer() {
    var time = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{

            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<div>
            <h1>Game Over</h1>
            <h1>Your Score is ${score}</h1>
        </div>`
        }
    }, 1000);
}

//Event Bubbling
//Jispe click karoge wo particular element mai event raise hoga.
//If Event listener us element mai nahi hoga to wo element ke parent mai search karega.
//If parent mai na mile to parent ke parent mai search karega and so on.

// Same thing we are doing here we are not adding Listener to bubble multiple time rather than we are adding to
// the bubble parent one time.
// So when event is raising on the bubble when it will not able to find it in bubble element
// it will search to its parent element which is #pbtm 

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent)
    if(clickedNum === hitrn){
        increaseScore();
        generateBubbles();
        hitNumber();
    }
});



hitNumber()
runTimer();
generateBubbles();
// increaseScore();