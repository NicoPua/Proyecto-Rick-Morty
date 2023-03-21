import characters from "./utils/data.js";

var http = require("http");
var fs = require("fs");

const PORT = 3001;

module.exports = 
    http.createServer((req,res) => {
        console.log(`Server raised in port ${PORT}`);
        res.setHeader('Access-Control-Allow-Origin', '*');

        if(req.url = 'rickandmorty/character'){
            //FALTA EJERCICIO 3
        }
    })
