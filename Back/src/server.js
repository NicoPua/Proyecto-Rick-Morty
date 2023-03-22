const characters = require("./utils/data.js");
const http = require("http");
const PORT = 3001;

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {URL} = req;

    if(URL.includes('rickandmorty/character')){
       const id = URL.split("/");        //agregar NUMBER ()
       const character = characters.find((char) => char.id == id)

       if(character){
        res.writeHead({"Content-Type": "application/json"});
        return res.end(JSON.stringify(character));
       }else{
        res.writeHead(404, {"Content-Type": "application/json"});
        return res.end(JSON.stringify({ error: "Character not found" }));
       }
    }
    
}).listen(PORT,"localhost");
