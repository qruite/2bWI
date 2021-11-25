const valid = [];
const item = [0];
var player;
var bot;
var index;
var validNumber = 0;
var playerItem = document.getElementById('player_item');
var botItem = document.getElementById("bot_item");
var resultHtml = false;

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
    checkIndex();
    setTimeout(function () {
        botPick();
    }, 1000);    
}

function checkIndex() {
    if (index == 0) {
       player = 0;
       playerItem.innerHTML += addImgRock();
   } else if (index == 1) {
       player = 1;
       playerItem.innerHTML += addImgPaper();
   } else if (index == 2){
       player = 2;
       playerItem.innerHTML += addImgScissors();
   }
}


function firstFunction(){
    console.log("piiiiiska");
    alert("errrrrror ballet");
};

function botPick(){
    let a = Math.floor(Math.random() * 3);
    resultHtml = true;
    for(i=0;i<x;i++){
        if(a == 0){
            bot = 0;
            document.getElementById("bot_item").innerHTML += addImgRock();
        }else if (a == 1) {
            bot = 1;
            document.getElementById("bot_item").innerHTML += addImgPaper();
        } else if (a == 2) {
            bot = 2;
            document.getElementById("bot_item").innerHTML += addImgScissors();
        }
        resultHtml = false;
    }
    
    firstFunction();
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

