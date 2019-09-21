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
    console.log(decodedWeatherData);
})
 

var i = 0;
app.get('/', function(req, res){
    if(i >= decodedWeatherData.length){
        i = -1;
    }
    i++;
        
        res.send(decodedWeatherData[i]);
    })

app.listen(3000);