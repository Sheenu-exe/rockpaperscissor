var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissor"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click",selectChoice)
        document.getElementById("choices").append(choice);
    }
}


function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";
    document.getElementById("your-choice").classList="game";
    document.getElementById("opp-choice").classList="game"
    opponent = choices[Math.floor(Math.random()*3)] 
    document.getElementById("opp-choice").src = opponent + ".png";
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    }
    else {
        if (you == "rock") {
            if (opponent == "scissor") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (you == "scissor") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissor") {
                opponentScore += 1;
            }
        }
    }
 
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}

    
