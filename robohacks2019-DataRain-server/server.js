const fetch = require("node-fetch");
const express = require('express');
const decoder = require('./decoder');
const app = express();

const csvFilePath='./Data/mote_20-17-06-13-1A-00-00-32_data.csv'
const csv=require('csvtojson')
let decodedWeatherData = [];
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    jsonObj.forEach(function(item){
        var decodedItem = decoder(item.Data);
        decodedWeatherData.push(decodedItem);
    })
   // console.log(decodedWeatherData);
})

//Initializing API key
var openWeatherMapKey = "64a8dd54f92d410f926ac2808c2711a4";
var requestString = "http://api.openweathermap.org/data/2.5/weather/id=2172797"
+ "&APPID=" + openWeatherMapKey;

/*fetch(requestString)
.then(function(data){
   console.log(data);
})
.catch(function(error){
   console.log(error);
})

var getWeather = function() {
   gettingData = true;
  
   request = new XMLHttpRequest();
   request.onload = proccessResults;
   request.open("get", requestString, true);
   request.send();
 };
 // Take the JSON results and proccess them
 var proccessResults = function() {
  
   var results = JSON.parse(this.responseText);
   console.log(results);
  
 };*/

 fetch(requestString)
 .then((resp) => resp.json()) // Transform the data into json
 .then(function(data) {
   console.log(data);
   });

var i = 0;
app.get('/', function(req, res){
   //getWeather();
    if(i >= decodedWeatherData.length){
        i = -1;
    }
    i++;
        
        res.send(decodedWeatherData[i]);
    })

app.listen(3000);