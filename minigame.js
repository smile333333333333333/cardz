let packTickets = 0;

const startButton = document.getElementById("startPackGame");
const openButton = document.getElementById("openPack");
const miniGame = document.getElementById("miniGame");
const target = document.getElementById("targetButton");
const gameMessage = document.getElementById("gameMessage");
const status = document.getElementById("packStatus");

openButton.disabled = true;

// ----------------------------
// Start Game
// ----------------------------

startButton.addEventListener("click", () => {

    if (packTickets > 0) {
        status.textContent = "You already earned a pack. Open it first!";
        return;
    }

    miniGame.style.display = "block";
    gameMessage.textContent = "Get ready...";

    target.style.display = "none";

    setTimeout(startRound, 1000);

});


// ----------------------------
// Spawn Smiley
// ----------------------------

function startRound() {

    gameMessage.textContent = "CLICK THE SMILE!";

    target.style.display = "inline-block";

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * 300;

    target.style.position = "relative";
    target.style.left = x + "px";
    target.style.top = y + "px";

    loseTimer = setTimeout(loseRound, 1500);

}


// ----------------------------
// Win
// ----------------------------

let loseTimer;

target.addEventListener("click", () => {

    clearTimeout(loseTimer);

    target.style.display = "none";

    packTickets = 1;

    openButton.disabled = false;

    gameMessage.textContent = "Security Check Passed!";
    status.textContent = "Pack Ready!";

});


// ----------------------------
// Lose
// ----------------------------

function loseRound() {

    target.style.display = "none";

    gameMessage.textContent = "Employee Escaped. Try Again.";

}


// ----------------------------
// Stop Pack Opening
// ----------------------------

openButton.addEventListener("click", function(e){

    if(packTickets <= 0){

        e.preventDefault();

        alert("Complete the minigame before opening another pack!");

        return;

    }

    packTickets--;

    openButton.disabled = true;

    status.textContent = "Complete the minigame to earn another pack.";

});
