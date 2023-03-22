const characters = require("./utils/data.js");

var http = require("http");
var fs = require("fs");

const PORT = 3001;

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {URL} = req;

    if(URL.includes('rickandmorty/character')){
       const id = Number(URL.split("/").at(-1));
       const character = characters.find((char) => char.id === id)

       if(character){
        res.writeHead({"Content-Type": "application/json"});
        return res.end(JSON.stringify(character));
       }else{
        res.writeHead(404, {"Content-Type": "application/json"});
        return res.end(JSON.stringify({ error: "Character not found" }));
       }
    }
}).listen(PORT,"localhost");
