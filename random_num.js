var int;
var x = 1;
function roll4() {
    int = Math.ceil(Math.random() * 4);
    document.getElementById("result").value = int;
    
}
function roll6() {
    int = Math.ceil(Math.random() * 6);
    document.getElementById("result").value = int;
}
function roll8() {
    int = Math.ceil(Math.random() * 8);
    document.getElementById("result").value = int;
}
function roll10() {
    int = Math.ceil(Math.random() * 10);
    document.getElementById("result").value = int;
}
function roll12() {
    int = Math.ceil(Math.random() * 12);
    document.getElementById("result").value = int;
}
function roll20() {
    int = Math.ceil(Math.random() * 20);
    document.getElementById("result").value = int;
}
function roll100() {
    int = Math.ceil(Math.random() * 100);
    document.getElementById("result").value = int;
}
function rollClear() {
    document.getElementById("result").value = "";
}



function rollMega(diceValue, numberOfDice) {
    switch(diceValue) {
        case 4:
            int += Math.ceil(Math.random() * 4);
            document.getElementById("result").value = int;
            break;
        case 6:
            int += Math.ceil(Math.random()*6);
            document.getElementById("result").value = int;
            break;
        case 8:
    }
}