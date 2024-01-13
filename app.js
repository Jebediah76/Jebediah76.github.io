const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let score = 0;
let gamePlay = false;
button.addEventListener("click", function () {
    if (!gamePlay) {
        gamePlay = true;
        score = 0;
        gameArea.innerHTML = "";
        maker(5);
        message.innerHTML = "Gebt die Kombination ein";
        button.innerHTML = "Kombination prüfen";
    }
    else {
        score++;
        message.innerHTML = "Anzahl Versuche: " + score;
        const numbers = document.querySelectorAll(".numb");
        let winCondition = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor ="#03fc39";
                numbers[i].style.color = "white";
                winCondition++;
            }
            else {
                let color = (numbers[i].value < numbers[i].correct) ? "#03adfc" : "#ed2724";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
            if (winCondition == numbers.length) {
                gameEnd();
            }
        }
    }
})

function gameEnd() {
    message.innerHTML = "Ihr habt die Kombination in " + score + " Versuch(en) geknackt";
    message.style.marginTop =  + "px";
    gamePlay = false;
    button.innerHTML = "Neu starten";
}

function maker(num) {
    for (let x = 0; x < num; x++) {
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "50px";
        el.classList.add("numb");
        el.order = x;
        if (x == 0) {
            el.correct = 4;
        }
        if (x == 1) {
            el.correct = 5;
        }
        if (x == 2) {
            el.correct = 9;
        }
        if (x == 3) {
            el.correct = 7;
        }
        if (x == 4) {
            el.correct = 3;
        }          
        el.value = 0;
        gameArea.appendChild(el);
    }
}