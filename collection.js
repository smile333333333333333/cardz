// ======================================
// H.E.E. CARD COLLECTION
// ======================================

const packButton = document.getElementById("openPack");
const packArea = document.getElementById("packCards");
const collectionArea = document.getElementById("collection");
const packStatus = document.getElementById("packStatus");

let unlocked = ["Factory Worker"];

// ----------------------------

function isUnlocked(name){
    return unlocked.includes(name);
}

// ----------------------------

function unlock(name){

    if(!isUnlocked(name)){
        unlocked.push(name);
        return true;
    }

    return false;
}

// ----------------------------

function refreshDropdowns(){

    fighter1.innerHTML =
    '<option value="">Choose Card</option>';

    fighter2.innerHTML =
    '<option value="">Choose Card</option>';

    cards.forEach(card=>{

        if(isUnlocked(card.name)){

            fighter1.innerHTML +=
            `<option value="${card.name}">
            ${card.name}
            </option>`;

            fighter2.innerHTML +=
            `<option value="${card.name}">
            ${card.name}
            </option>`;

        }

    });

}

// ----------------------------

function refreshCollection(){

    collectionArea.innerHTML = "";

    cards.forEach(card=>{

        const div = document.createElement("div");

        div.style.display="inline-block";
        div.style.width="170px";
        div.style.margin="8px";
        div.style.padding="10px";
        div.style.background="#222";
        div.style.border="2px solid #555";
        div.style.verticalAlign="top";

        if(isUnlocked(card.name)){

            div.innerHTML=`
            <h3>${card.name}</h3>

            <b>${card.rarity}</b>

            <hr>

            ${card.description}
            `;

        }else{

            div.innerHTML=`
            <h3>?????</h3>

            <hr>

            Locked
            `;

        }

        collectionArea.appendChild(div);

    });

}

// ----------------------------

function randomCard(){

    return cards[
        Math.floor(Math.random()*cards.length)
    ];

}

// ----------------------------

refreshDropdowns();
refreshCollection();

// ======================================
// OPEN PACK
// ======================================

function openPack(){

    if(typeof packTickets === "undefined" || packTickets <= 0){

        alert("Complete the minigame before opening a pack!");
        return;

    }

    packTickets--;

    if(packStatus){
        packStatus.textContent =
        "Complete the minigame to earn another pack.";
    }

    packButton.disabled = true;

    packArea.innerHTML = "";

    for(let i=0;i<5;i++){

        const card = randomCard();

        const newCard = unlock(card.name);

        const cardDiv = document.createElement("div");

        cardDiv.style.display="inline-block";
        cardDiv.style.width="180px";
        cardDiv.style.margin="10px";
        cardDiv.style.padding="10px";
        cardDiv.style.background="#222";
        cardDiv.style.border="2px solid #666";
        cardDiv.style.borderRadius="8px";
        cardDiv.style.verticalAlign="top";

        cardDiv.innerHTML=`
        <h3>${card.name}</h3>

        <b>${card.rarity}</b>

        <hr>

        Strength: ${card.strength}<br>
        Intelligence: ${card.intelligence}<br>
        Stability: ${card.stability}<br>
        Luck: ${card.luck}<br>
        Speed: ${card.speed}

        <br><br>

        ${card.description}

        <hr>

        <b style="color:${newCard ? "#66ff66" : "#ffcc55"}">
        ${newCard ? "★ NEW CARD!" : "Duplicate"}
        </b>
        `;

        packArea.appendChild(cardDiv);

    }

    refreshCollection();
    refreshDropdowns();

}

packButton.addEventListener("click", openPack);
