const btn = document.getElementById("button");

function diceGame() {

    // Two Different Random Number Generator
    const player1Roll = Math.floor(Math.random()* 6 + 1);
    const player2Roll = Math.floor(Math.random()*6 + 1);

    // Selecting random Images
    const dice1Img = document.querySelectorAll("img")[0];
    const dice2Img = document.querySelectorAll("img")[1];

    dice1Img.setAttribute("src", `images/dice${player1Roll}.png`);
    dice2Img.src = `images/dice${player2Roll}.png`;

    if (player1Roll === player2Roll) {

        const winnerText = document.getElementById("winnerText");

        winnerText.innerHTML = "🤝 It's draw! 🤝";
        const style = winnerText.style;
        style.color = "grey";
    }
    else if (player1Roll > player2Roll) {

        const winnerText = document.getElementById("winnerText");
        
        if (winnerText) {

            winnerText.innerHTML = "🏆 Player 1 Wins! 🏆";
            const style = winnerText.style;
            style.color = "green";
        
        }
    }
    else if (player1Roll < player2Roll) {
        const winnerText = document.getElementById("winnerText");
        winnerText.innerHTML = "🏆 Player 2 Wins! 🏆";
        winnerText.style.color = "green";
    }

    // toggle 👉 run skip and run
    dice1Img.classList.toggle("rotate");
    dice2Img.classList.toggle("rotate");

}

btn.addEventListener("click", diceGame)