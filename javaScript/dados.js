var addBonus = 0;
var withdrawBonus = 0;

function diceRoll(diceType){
    for(i = 0; i < 10; i++){
        setTimeout(function(){
            var diceRoll = Math.floor(Math.random() *(diceType - 1 + 1)+1);
            var diceRollBonus = diceRoll + addBonus - withdrawBonus;

            if(diceRollBonus < 0){
                document.getElementById("dice-roll").innerHTML = 1;
            }else{
                document.getElementById("dice-roll").innerHTML = diceRollBonus;
            }
            
            console.log("DiceRoll " + diceRoll);
            console.log("diceRollBonus " + diceRollBonus);
        }, 100 * i);
    }
}

function add(){
    addBonus = parseInt(document.getElementById('bonus-input-add').value);
    console.log(addBonus);
}

function withdraw(){
    withdrawBonus = parseInt(document.getElementById('bonus-input-withdraw').value);
    console.log(withdrawBonus);
}

function d2(){
    diceRoll(2);   
}

function d4(){
    diceRoll(4);
}

function d6(){
    diceRoll(6);
}

function d8(){
    diceRoll(8);
}

function d10(){
    diceRoll(10);
}

function d12(){
    diceRoll(12);
}

function d20(){
    diceRoll(20);
}

function d100(){
    diceRoll(100);
}