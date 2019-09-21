const express = require('express');
const decoder = require('./decoder');
const app = express();
const fetch =  require('node-fetch');
const apiKey = "";
const requestURL = "https://api.darksky.net/forecast/f3ae63da5317af2c53cd648547f94d61/45.4914,73.5605";
const csvFilePath='./Data/mote_20-17-06-13-1A-00-00-32_data.csv';
const fs = require('fs');
const csv=require('csvtojson');
let decodedWeatherData = [];


var liveDataBool = false;
var weatherData = null;
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    jsonObj.forEach(function(item){
        var decodedItem = decoder(item.Data);
        decodedWeatherData.push(decodedItem);
    })
    console.log(decodedWeatherData);
});

fetch(requestURL)
.then(function (response) {
    return response.json(); //transforming the response to a json object
 })
 .then(data => {
     weatherData = data;
     console.log(data);
 });


var i = 0;
app.get('/', function(req, res){
   if(liveDataBool==true){
        let ans = "temp="+weatherData.currently.temperature+" hum="+weatherData.currently.humidity+" pressure="+ weatherData.currently.pressure*100+ " pm=4/0/3ug uv="+weatherData.currently.uvIndex;
        res.send(ans);
 } 
   else 
   {
       if(i >= decodedWeatherData.length)
       {
        i = -1;
    }
        i++;
        res.send(decodedWeatherData[i]);}
    })


 app.get('/toggle', function(){
     liveDataBool = !liveDataBool;
 })
 app.get('*', function(req, res)
    {
       
        if(fs.existsSync(dirname + req.url))
        {
            res.sendFile(dirname + req.url)
        }
        else
        {
            res.status(404);
            res.render('404')
    
        }
    });  

app.listen(3000);