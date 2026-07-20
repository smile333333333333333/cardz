const cards = [

{
    name:"Employee RE",
    rarity:"Legendary",
    strength:70,
    intelligence:98,
    stability:75,
    luck:80,
    speed:88,
    description:"Reported things he shouldn't have."
},

{
    name:"Clicker",
    rarity:"Rare",
    strength:95,
    intelligence:20,
    stability:85,
    luck:35,
    speed:60,
    description:"Hears everything. Sees nothing."
},

{
    name:"Arthur Morgan",
    rarity:"Legendary",
    strength:90,
    intelligence:82,
    stability:84,
    luck:65,
    speed:76,
    description:"Just needs one more ride."
},

{
    name:"Dutch",
    rarity:"Epic",
    strength:68,
    intelligence:92,
    stability:72,
    luck:85,
    speed:70,
    description:"Has a plan. Probably."
},

{
    name:"Joel",
    rarity:"Legendary",
    strength:92,
    intelligence:80,
    stability:95,
    luck:50,
    speed:72,
    description:"Would rather use a brick."
},

{
    name:"Factory Worker",
    rarity:"Common",
    strength:55,
    intelligence:50,
    stability:62,
    luck:42,
    speed:54,
    description:"Smiles through every shift."
},

{
    name:"The Factory",
    rarity:"Impossible",
    strength:100,
    intelligence:100,
    stability:100,
    luck:100,
    speed:100,
    description:"No one knows what happens inside."
},

{
    name:"Coffee Machine",
    rarity:"Common",
    strength:25,
    intelligence:40,
    stability:80,
    luck:90,
    speed:15,
    description:"Runs entirely on duct tape."
},

{
    name:"Rubber Duck",
    rarity:"Common",
    strength:12,
    intelligence:65,
    stability:50,
    luck:100,
    speed:30,
    description:"Morale increased."
},

{
    name:"Audrey II",
    rarity:"Epic",
    strength:88,
    intelligence:55,
    stability:82,
    luck:48,
    speed:60,
    description:"Feed me."
}

];

const fighter1 = document.getElementById("fighter1");
const fighter2 = document.getElementById("fighter2");

cards.forEach(card=>{

    fighter1.innerHTML += `<option value="${card.name}">${card.name}</option>`;
    fighter2.innerHTML += `<option value="${card.name}">${card.name}</option>`;

});

function showStats(selectId,statsId){

    const chosen=document.getElementById(selectId).value;

    const card=cards.find(c=>c.name===chosen);

    if(!card){
        document.getElementById(statsId).textContent="No card selected.";
        return;
    }

    document.getElementById(statsId).innerHTML=`

<b>${card.name}</b>

Rarity: ${card.rarity}

Strength: ${card.strength}

Intelligence: ${card.intelligence}

Stability: ${card.stability}

Luck: ${card.luck}

Speed: ${card.speed}

${card.description}

`;

}

fighter1.addEventListener("change",()=>showStats("fighter1","stats1"));
fighter2.addEventListener("change",()=>showStats("fighter2","stats2"));
