var int = 0;
var modInt = 0;
function rollClear() {
    document.getElementById("result").value = "";
    document.getElementById("numrolled").value = "";
}

function rollCounter(diceValue,numberOfDice) {
    var i = document.getElementById("numrolled").value;
    var modInt = parseInt(document.getElementById("modifier").value);
    do {
        rollMega(diceValue);
        i --;
    } while(i > 0);
    document.getElementById("result").value = int + modInt;
    int = 0;
}
function rollMega(diceValue) {
    switch(diceValue) {
        case 4:
            int += Math.ceil(Math.random() * 4);
            break;
        case 6:
            int += Math.ceil(Math.random()*6);
            break;
        case 8:
            int += Math.ceil(Math.random()*8);
            break;
        case 10:
            int += Math.ceil(Math.random()*10);
            break;
        case 12:
            int += Math.ceil(Math.random()*12);
            break;
        case 20:
            int += Math.ceil(Math.random()*20);
            break;
        case 100:
            int += Math.ceil(Math.random()*100);
            break;
    }
}