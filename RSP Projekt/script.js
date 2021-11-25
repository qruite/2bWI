const valid = [];
const item = [0];
var player;
var validNumber = 0;
var playerItem = document.getElementById('player_item');
var botItem = document.getElementById("bot_item");
var botSelecion;
var playerSelecion;

function restart() {
    validNumber = 0;
    playerItem.innerHTML = "";
    botItem.innerHTML = "";
}

function addItem(element) {
    let dataIndex = element.attributes["data-index"].value;
    index = dataIndex;
    valid.push(validNumber);
    checkIfValid();
}

function checkIfValid(){
    if (validNumber <= 7){
        validNumber ++;
        changeHtml();
    } else {
        alert("please clear the field");
    }
}

function changeHtml(){
    playerPick();

    setTimeout(function () {
        botPick();
        
        document.getElementById("result").innerHTML = "Loading";

        setTimeout(function() {
            checkWhoIsWinner();
        }, 1000)

    }, 500);    
}

function checkWhoIsWinner(){
    if (botSelecion == playerSelecion) {
        document.getElementById("result").innerHTML = "Draw"
    } 


}

function playerPick() {
    if (index == 0) {
        playerSelecion = 0;
        playerItem.innerHTML += addImgRock();
   } else if (index == 1) {
        playerSelecion = 1;
        playerItem.innerHTML += addImgPaper();
   } else if (index == 2){
        playerSelecion = 2;
        playerItem.innerHTML += addImgScissors();
   }
}

function botPick(){
    let a = Math.floor(Math.random() * 3);
        if(a == 0){
            botSelecion = 0;
            document.getElementById("bot_item").innerHTML += addImgRock();
        }else if (a == 1) {
            botSelecion = 1;
            document.getElementById("bot_item").innerHTML += addImgPaper();
        } else if (a == 2) {
            botSelecion = 2;
            document.getElementById("bot_item").innerHTML += addImgScissors();
        }
}

function addImgRock(){
    let html = "";
    item.forEach(element => {
        html = "<div class='player_item_inner' id='playerItem'><img src='bilder/stein.png' alt='schere' width='30px' height='30px'></div>";
    }); 
    return html;    
}

function addImgPaper(){
    let html = "";
    item.forEach(element => {
        html = "<div class='player_item_inner' id='playerItem'><img src='bilder/papier.png' alt='schere' width='30px' height='30px'></div>";
    });     
    return html;    
}

function addImgScissors(){
    let html = "";
    item.forEach(element => {
        html = "<div class='player_item_inner' id='playerItem'><img src='bilder/schere.png' alt='schere' width='30px' height='30px'></div>";
    });     
    return html;    
}

