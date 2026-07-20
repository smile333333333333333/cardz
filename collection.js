// ======================================
// H.E.E. CARD COLLECTION
// Part 1 - Collection Setup
// ======================================

const PACK_SIZE = 5;

// Load unlocked cards
let unlockedCards =
JSON.parse(localStorage.getItem("heeUnlockedCards")) || [];

// First time playing
if(unlockedCards.length === 0){

    unlockedCards.push("Factory Worker");

    saveCollection();

}

// ----------------------------

function saveCollection(){

    localStorage.setItem(
        "heeUnlockedCards",
        JSON.stringify(unlockedCards)
    );

}

// ----------------------------

function isUnlocked(cardName){

    return unlockedCards.includes(cardName);

}

// ----------------------------

function unlockCard(cardName){

    if(!isUnlocked(cardName)){

        unlockedCards.push(cardName);

        saveCollection();

        return true;

    }

    return false;

}

// ----------------------------

function updateDropdowns(){

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

function updateCollection(){

    const collection =
    document.getElementById("collection");

    collection.innerHTML="";

    cards.forEach(card=>{

        const div=document.createElement("div");

        div.style.border="1px solid #555";
        div.style.padding="10px";
        div.style.margin="8px";
        div.style.display="inline-block";
        div.style.width="170px";
        div.style.background="#222";

        if(isUnlocked(card.name)){

            div.innerHTML=`

            <h3>${card.name}</h3>

            <b>${card.rarity}</b>

            <br><br>

            ${card.description}

            `;

        }

        else{

            div.innerHTML=`

            <h3>?????</h3>

            Locked

            `;

        }

        collection.appendChild(div);

    });

}

// ----------------------------

updateDropdowns();
updateCollection();
