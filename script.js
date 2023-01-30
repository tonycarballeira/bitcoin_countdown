const request = new XMLHttpRequest();
request.open("GET","https://blockchain.info/stats?format=json");
request.send();

var jsonObject = {};

var secondsLeft = 0;

//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// next bitcoin halving occurs at the block height of 840,000. 
//subtract current total blocks to get blocks left until halving.

request.onload = function(){
    jsonObject = JSON.parse(request.response);
    const blocksLeft = 840000 - jsonObject.n_blocks_total;
    const minsBetween = jsonObject.minutes_between_blocks;
    const minsLeft = blocksLeft * minsBetween;
    secondsLeft = minsLeft * 60;
}

//modulus operator % gives remainder of the division of two integers.

function callIt(){
    secondsLeft = secondsLeft - 1;
    
    const days = Math.floor(secondsLeft / 3600 / 24);
    const hours = Math.floor(secondsLeft / 3600) % 24;
    const minutes = Math.floor(secondsLeft / 60) % 24;
    const seconds = Math.floor(secondsLeft) % 60;

    console.log(days, hours, minutes, seconds);
}

    callIt();

    setInterval(callIt, 1000);


function clicker() {
    console.log(jsonObject);
}