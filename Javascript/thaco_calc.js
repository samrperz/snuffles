function thacoCalc(){
    var x = 0 + parseInt(document.getElementById("thacoX").value);
    var y = 0 + parseInt(document.getElementById("armorY").value);
    
    document.getElementById("answer").value = x - y;
    
}