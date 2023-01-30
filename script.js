const request = new XMLHttpRequest();
request.open("GET","https://blockchain.info/stats?format=json");
request.send();

var jsonObject = {};

var secondsLeft = 0;

request.onload = function(){
    jsonObject = JSON.parse(request.response);
    const blocksLeft = jsonObject.n_blocks_total - 420000;
    const minsBetween = jsonObject.minutes_between_blocks;
    const minsLeft = blocksLeft * minsBetween;
    secondsLeft = minsLeft * 60;
}


function callIt(){
    secondsLeft = secondsLeft - 1;
    console.log(secondsLeft);
}

callIt();

setInterval(callIt, 1000);


function clicker() {
    console.log(jsonObject);
}

//NOTES

//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.