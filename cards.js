const cards = [

{
    name: "Night Janitor",
    rarity: "Common",
    strength: 4,
    intelligence: 5,
    stability: 8,
    luck: 3,
    speed: 4,
    description: "Cleans the halls after everyone leaves."
},
{
    name: "Intern",
    rarity: "Common",
    strength: 2,
    intelligence: 5,
    stability: 6,
    luck: 8,
    speed: 6,
    description: "Still believes this is a normal job."
},
{
    name: "Maintenance Worker",
    rarity: "Common",
    strength: 6,
    intelligence: 5,
    stability: 7,
    luck: 4,
    speed: 4,
    description: "Keeps every locked door locked."
},
{
    name: "Receptionist",
    rarity: "Common",
    strength: 3,
    intelligence: 7,
    stability: 8,
    luck: 5,
    speed: 5,
    description: "Answers every phone call with a smile."
},
{
    name: "Archive Clerk",
    rarity: "Common",
    strength: 3,
    intelligence: 8,
    stability: 6,
    luck: 5,
    speed: 3,
    description: "Files records that officially never existed."
},
{
    name: "Supply Runner",
    rarity: "Uncommon",
    strength: 5,
    intelligence: 5,
    stability: 6,
    luck: 7,
    speed: 9,
    description: "Knows every hallway by memory."
},
{
    name: "Security Officer",
    rarity: "Uncommon",
    strength: 8,
    intelligence: 6,
    stability: 7,
    luck: 3,
    speed: 6,
    description: "Never asks what's behind Door 7."
},
{
    name: "Containment Specialist",
    rarity: "Uncommon",
    strength: 7,
    intelligence: 8,
    stability: 7,
    luck: 3,
    speed: 5,
    description: "Responds when something escapes."
},
{
    name: "Radio Operator",
    rarity: "Uncommon",
    strength: 3,
    intelligence: 8,
    stability: 7,
    luck: 6,
    speed: 5,
    description: "Sometimes receives calls from empty rooms."
},
{
    name: "Courier",
    rarity: "Uncommon",
    strength: 5,
    intelligence: 6,
    stability: 6,
    luck: 8,
    speed: 8,
    description: "Delivers sealed envelopes without opening them."
},
{
    name: "Research Assistant",
    rarity: "Rare",
    strength: 4,
    intelligence: 9,
    stability: 6,
    luck: 4,
    speed: 5,
    description: "Writes reports nobody is allowed to read."
},
{
    name: "Hazmat Technician",
    rarity: "Rare",
    strength: 7,
    intelligence: 8,
    stability: 8,
    luck: 2,
    speed: 5,
    description: "Suit integrity: 99.9%."
},
{
    name: "Emergency Response",
    rarity: "Rare",
    strength: 8,
    intelligence: 7,
    stability: 8,
    luck: 3,
    speed: 7,
    description: "Arrives after the alarms stop."
},
{
    name: "Systems Engineer",
    rarity: "Rare",
    strength: 4,
    intelligence: 10,
    stability: 6,
    luck: 4,
    speed: 5,
    description: "Keeps every camera online."
},
{
    name: "Supervisor",
    rarity: "Rare",
    strength: 7,
    intelligence: 8,
    stability: 8,
    luck: 5,
    speed: 6,
    description: "Has access to every floor except one."
},
{
    name: "Facility Director",
    rarity: "Epic",
    strength: 8,
    intelligence: 10,
    stability: 9,
    luck: 5,
    speed: 6,
    description: "Knows the official version of every incident."
},
{
    name: "Elite Containment Unit",
    rarity: "Epic",
    strength: 10,
    intelligence: 8,
    stability: 8,
    luck: 4,
    speed: 8,
    description: "Called only when all other plans fail."
},
{
    name: "The Archivist",
    rarity: "Epic",
    strength: 5,
    intelligence: 10,
    stability: 10,
    luck: 6,
    speed: 4,
    description: "Remembers records that no longer exist."
},
{
    name: "Observation Team Leader",
    rarity: "Epic",
    strength: 8,
    intelligence: 9,
    stability: 9,
    luck: 4,
    speed: 7,
    description: "Watches without ever being seen."
},
{
    name: "Prototype Employee",
    rarity: "Epic",
    strength: 9,
    intelligence: 7,
    stability: 5,
    luck: 7,
    speed: 9,
    description: "Officially retired from testing."
},
{
    name: "Employee RE",
    rarity: "Legendary",
    strength: 9,
    intelligence: 10,
    stability: 2,
    luck: 8,
    speed: 8,
    description: "Personnel file permanently removed."
},
{
    name: "Factory Survivor",
    rarity: "Legendary",
    strength: 10,
    intelligence: 9,
    stability: 1,
    luck: 9,
    speed: 9,
    description: "Claims to remember what was inside."
},
{
    name: "Smiling One",
    rarity: "Legendary",
    strength: 10,
    intelligence: 6,
    stability: 0,
    luck: 8,
    speed: 10,
    description: "Do not maintain eye contact."
},
{
    name: "THE FACTORY",
    rarity: "Legendary",
    strength: 10,
    intelligence: 10,
    stability: 10,
    luck: 10,
    speed: 10,
    description: "Some things should never become collectible."
},
{
    name: "H.E.E. Director",
    rarity: "Legendary",
    strength: 9,
    intelligence: 10,
    stability: 10,
    luck: 7,
    speed: 7,
    description: "Every report ends with an approved signature."
},
    
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
