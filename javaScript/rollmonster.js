var monster = 0;

function generateMonster(){
    var monsterRoll = Math.floor(Math.random() *(12 - 1 + 1)+1);
    console.log(monsterRoll)
    switch(monsterRoll){
        case 1:
        case 2:
             console.log("Owlbear");
             document.getElementById("encounter-result-monster").innerHTML = "Owlbear";
            break;
        case 3:
        case 4:
            console.log("Goblins");
            document.getElementById("encounter-result-monster").innerHTML = "Goblins";
            break;
        case 5:
        case 6:
            console.log("Hobgoblin");
            document.getElementById("encounter-result-monster").innerHTML = "Hobgoblins";
            break;
        case 7:
        case 8:
            console.log("Orcs");
            document.getElementById("encounter-result-monster").innerHTML = "Orcs";
            break;
        case 9: 
        case 10:
            console.log("Wolfs");
            document.getElementById("encounter-result-monster").innerHTML = "Wolfs";
            break;     
        case 11:
            console.log("Ogres");
            document.getElementById("encounter-result-monster").innerHTML = "Ogres";
            break;
        case 12:
            console.log("Bandits");
            document.getElementById("encounter-result-monster").innerHTML = "Bandits";
            break;
    }

    console.log(d20())

}
