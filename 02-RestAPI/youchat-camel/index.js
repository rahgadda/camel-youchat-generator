// Variables
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const updateDotenv = require('update-dotenv');
const regex = /`{3}([\s\S]+?)`{3}/;

// Initialize variables
var app = express();
app.use(bodyParser.json());
require('dotenv').config();

// Load Environment Variables
let URL = process.env.URL;
let API_KEY = process.env.API_KEY;
let txt = "write camel dsl in yaml to ";

// Get you.com/chat
console.log("Started Application Server");

// POST WS to updated API Key
app.post('/apiKey', function(request, response){   
    updateDotenv({
        API_KEY: request.body.apiKey,
        URL: 'https://api.betterapi.net/youdotcom/chat?message='
    }).then((newEnv) => console.log('Updated API Key - ', newEnv.API_KEY))
    
    API_KEY = process.env.API_KEY;
})
// POST WS to get yaml data
.post('/camel-dsl', function(request, response){ 
    txt = "write camel dsl in yaml to "+request.body.text;
    
    console.log('Input Text -> '+request.body.text);
    console.log('Updated Input Text -> '+txt);
    txt=encodeURIComponent(txt);
    console.log('Encoded Input Text -> '+txt);

    axios.get(URL+txt+"&key="+API_KEY)
         .then(resp => {
            let str = resp.data.message;
            // let m;
            // if ((m = regex.exec(str)) !== null) {
            //     console.log(m[0]);
            //     // m.forEach((match, groupIndex) => {
            //     //     console.log(`Found match, group ${groupIndex}: ${match}`);
            //     // });
            // }
            console.log('Chatbot Message -> '+str)
            console.log('Extracted Message -> '+ regex.exec(str)[1]);
          });
});

app.listen(3000);