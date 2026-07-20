const result = document.getElementById("result");

const victoryQuotes = {

    "Employee RE":[
        "I told you the truth.",
        "They're watching...",
        "Don't trust H.E.E."
    ],

    "Clicker":[
        "*loud clicking noises*",
        "SKREEEEEE!",
        "It heard you."
    ],

    "Arthur Morgan":[
        "You're alright, boah.",
        "I gave it everything I had.",
        "Maybe this was the plan after all."
    ],

    "Dutch":[
        "I HAVE A PLAN!",
        "Just one more victory!",
        "Have some faith!"
    ],

    "Joel":[
        "That'll do.",
        "Brick beats everything.",
        "Keep moving."
    ],

    "Factory Worker":[
        "Back to work.",
        "Smile for the cameras.",
        "Break time denied."
    ],

    "The Factory":[
        "COME INSIDE.",
        "THE DOOR IS OPEN.",
        "SMILE."
    ],

    "Coffee Machine":[
        "Coffee wins again.",
        "Please refill water.",
        "Error 404: Beans Missing."
    ],

    "Rubber Duck":[
        "Quack.",
        "QUACK!",
        "Victory quack."
    ],

    "Audrey II":[
        "Feed me!",
        "I'm still hungry!",
        "More!"
    ]

};

document.getElementById("fightButton").addEventListener("click",runBattle);

function runBattle(){

    const card1 = cards.find(c=>c.name===fighter1.value);
    const card2 = cards.find(c=>c.name===fighter2.value);

    if(!card1 || !card2){

        result.innerHTML="Choose two cards first.";

        return;
    }

    let score1 = 0;
    let score2 = 0;

    let log = "";

    compareStat("Strength",card1.strength,card2.strength);
    compareStat("Intelligence",card1.intelligence,card2.intelligence);
    compareStat("Stability",card1.stability,card2.stability);
    compareStat("Luck",card1.luck,card2.luck);
    compareStat("Speed",card1.speed,card2.speed);

    function compareStat(name,a,b){

        if(a>b){

            score1++;

            log += `${card1.name} wins ${name}!\n`;

        }

        else if(b>a){

            score2++;

            log += `${card2.name} wins ${name}!\n`;

        }

        else{

            log += `${name} ends in a tie.\n`;

        }

    }

    let winner;

    if(score1>score2){

        winner = card1;

    }

    else if(score2>score1){

        winner = card2;

    }

    else{

        winner = Math.random()<0.5 ? card1 : card2;

        log += "\nThe judges couldn't decide...\n";
        log += "A coin flip determines the winner!\n";
    }

    const quotes = victoryQuotes[winner.name];
    const quote = quotes[Math.floor(Math.random()*quotes.length)];

    result.innerHTML =

`${log}

----------------------------

${card1.name}: ${score1} points

${card2.name}: ${score2} points

🏆 WINNER: ${winner.name}

"${quote}"`;

}
