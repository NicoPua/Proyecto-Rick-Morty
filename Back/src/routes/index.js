const {Router} = require("express")
const getCharById = require("../controllers/getCharById.js")
const getCharDetail = require("../controllers/getCharDetail.js")

let favs = require("../utils/favs.js");

const router = Router();
    
router.get("/onsearch/:id", getCharById);   //FALTA APLICAR ASYNC AWAIT
         
router.get("/detail/:id", getCharDetail);   //FALTA APLICAR ASYNC AWAIT            

router.post("/rickandmorty/fav", (req,res) => {         //GUARDO INFORMACION de un FAV
    favs.push(req.body);
    res.status(200).json(favs);
})

router.get("/rickandmorty/fav", (req,res) => {          //PIDO INFORMACION de las FAVs
    res.status(200).json(favs);
});                        

router.delete("/rickandmorty/fav/:id", (req,res) => {   //BORRA INFORMACION segun el ID
    const {id} = req.params;
    favs = favs.filter((fav) => fav.id !== id);
    res.status(200).json({status: "ok"});
});

module.exports = router;