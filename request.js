const request = new XMLHttpRequest();
request.open("GET","https://blockchain.info/stats?format=json");
request.send();
request.onload = ()=>{
    console.log(request.response);
}