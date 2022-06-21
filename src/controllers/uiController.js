
import WebSocket from "ws"; 
var exampleSocket  = new WebSocket("ws://bubble-machine-api-dummy.herokuapp.com/action"); 

exampleSocket.onopen = function (event) { 
    exampleSocket.send(JSON.stringify({ "id": 1})); 
}; 
let socketData = "";
exampleSocket.onmessage = function (event) { 
    socketData = JSON.stringify(event.data);
    console.log(event.data); 
} 

export const renderLogin = (req, res) => {
  res.render('home', {data:socketData})
}

export const renderOnboarding = (req, res) => {
  res.render('onboarding')
}

