const express = require("express");
const server = express();
const PORT = 3001;

const router = require("./routes/index.js")

server.use(express.json());
server.use("/", router);


server.listen(PORT, () =>{
    console.log('Server raised in port ' + PORT);
})


/* SERVER 2----------------------------------------------------------------
const getCharById = require("./controllers/getCharById.js");
const getCharDetail = require("./controllers/getCharDetail.js");


const http = require("http");
const PORT = 3001;

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes("onsearch")){
        const id = Number(url.split("/").at(-1));
        getCharById(res,id);
    }

    if(url.includes("detail")){
        const id = Number(url.split("/").at(-1));
        getCharDetail(res,id)
    }
}).listen(PORT,"localhost");*/

/* SERVER 1 ------------------------------------------------------------------

const characters = require("./utils/data.js");
const http = require("http");
const PORT = 3001;

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req);
    const {url} = req;
    console.log(url);
    if(url.includes('rickandmorty/character')){
       const id = Number(url.split("/").at(-1));       
       const character = characters.find((char) => char.id === id)

       if(character){
        res.writeHead(200,{"Content-Type": "application/json"});
        return res.end(JSON.stringify(character));
       }else{
        res.writeHead(404, {"Content-Type": "application/json"});
        return res.end(JSON.stringify({ error: "Character not found" }));
       }
    }
}).listen(PORT,"localhost");
*/