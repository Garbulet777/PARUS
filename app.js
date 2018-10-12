const express = require('express'),
io = require('socket.io');
const path = require('path');
const app = express();
const fs = require('fs'),
server = app.listen(3000);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/*',express.static(path.join(__dirname, '../JS/main.js')));
app.use('/*',express.static(path.join(__dirname, './JS/dialog-polyfill.js')));
console.log("Running server...");
     

    let socket = io.listen(server);
    socket.on('connection', (client)=>{
        
        if(fs.existsSync('UserData.json'))
        {          
            console.log("Exists!");
            const contents = fs.readFileSync('UserData.json', 'utf8');
            let s = [];
            s = JSON.parse(contents);
            client.send(s);
        }

        client.on('message', (data)=>{
            console.log(data);
            fs.writeFile("UserData.json", JSON.stringify(data), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
         }); 
        });
    });