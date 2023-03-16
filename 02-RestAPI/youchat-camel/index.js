// Variables
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const updateDotenv = require('update-dotenv')
require('dotenv').config();

// Load Environment Variables
let URL = process.env.URL;
let API_KEY = process.env.API_KEY;

// Get you.com/chat
console.log("Started Application Server");

// POST WS to updated API Key
var app = express();
app.use(bodyParser.json());
app.post('/apiKey', function(request, response){   
    updateDotenv({
        API_KEY: request.body.apiKey,
        URL: 'https://api.betterapi.net/youdotcom/chat'
    }).then((newEnv) => console.log('Updated API Key - ', newEnv.API_KEY))
    
    let API_KEY = process.env.API_KEY;
});  
app.listen(3000);