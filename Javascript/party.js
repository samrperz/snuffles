var partylist;
var party = [];

party[0] = {name: "Name", race: "Race", hp: "HP", ac: "AC", str: "Str", dex: "Dexterity", con: "Constitution", int: "Inteligence", wis: "Wisdom", chr: "Charisma", xp: "Experience"};

function readFile() {
    partylist = party;
}
function displayParty() {
    window.onload(readFile());
}
function newMember() {
    
}