const {Router} = require("express")
const getCharById = require("../controllers/getCharById.js")
const getCharDetail = require("../controllers/getCharDetail.js")
//const getCharFav =
let favs = require("../utils/favs.js");

const router = Router();

router.get("/onsearch/:id", getCharById);               //PIDO INFORMACION resumida de un personaje segun ID.

router.get("/detail/:id", getCharDetail);               //PIDO INFORMACION detallada de un personaje segun ID.

router.post("/rickandmorty/fav", (req,res) => {         //GUARDO INFORMACION de un FAV
    favs.push(req.body);
    res.status(200).json(favs);
})

router.get("/rickandmorty/fav", (req,res) => {          //PIDO INFORMACION de las FAVs
    res.status(200).json(favs);
});                        

router.delete("/rickandmorty/fav/:id", (req,res) => {   //BORRA INFORMACION segun el ID
    const {id} = req.params;
    if(!id) res.status(402).send({"error": "Falta ingresar la ID"});

    const newFavs = favs.filter((fav) => fav.id !== id);
    res.status(200).json(newFavs);
});

module.exports = router;