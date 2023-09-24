var obj0 = "piedra";
var obj1 = "papel";
var obj2 = "tijeras";

let scoreuser = 0;
let scorecpu = 0;

//Array de scope global con las opciones, accedidas por el indice
var opciones = ["piedra","papel","tijeras"];

function writeScore(){
    document.getElementById('score-user').innerHTML=scoreuser;
    document.getElementById('score-cpu').innerHTML=scorecpu;
}

function userWin(){
    console.log("User Win");
}

function cpuWin(){
    console.log("cpu Win");
}

function empate(){
    console.log("Empate total");
}

//Selecciona de un arrays la utilizando el indice, este ultimo se genera de forma aleatora de 0 al 2
function cpuChoise() {
    var cpurandon = Math.floor(Math.random() * 3);
    return opciones[cpurandon];
}

function juegoppt(userselect){
    var cpuselect = cpuChoise();
    var userselecttext = opciones[userselect];

    switch (userselecttext + cpuselect) {
        case "piedratijeras":
        case "papelpiedra":
        case "tijeraspapel":
            scoreuser++;
            writeScore();
            userWin();
            break;
        case "tijeraspiedra":
        case "piedrapapel":
        case "papeltijeras":
            scorecpu++;
            writeScore();
            cpuWin();
            break;
        case "tijerastijeras":
        case "papelpapel":
        case "piedrapiedra":
            empate();
            break;
    }
  
}

function restartElementos() {
    scoreuser = 0;
    scorecpu = 0;
    writeScore();
    console.log("Se restablecieron los valores")
}

restart.addEventListener("click", restartElementos);