const getCharById = (req,res) => {
    const URL = 'https://be-a-rym.up.railway.app/api';
    const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';    
    const {id} = req.params;

    fetch(`${URL}/character/${id}?key=${KEY}`)
    .then(response => response.json)
    .then(({id, name, species, image, gender}) => {
        res.status(200).json({id, name, species, image, gender});
    })
    .catch((reason) => {
        res.status(500).json(reason.message);
    }) 
}

/*getCharByID 1-------------------------------------------------

const success = ({id,image,name,gender,species}, res) =>{
    const save = {
        id,
        image,
        name,
        gender,
        species
    }
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify(save));
}

const errorH = (reason,res) =>{
    res.writeHead(500,{"Content-Type": "text/plain"});
    res.end(reason.message);
}

const URL = 'https://be-a-rym.up.railway.app/api';
const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';  
const getCharById = (res,id) => {

    //const URL = 'https://be-a-rym.up.railway.app/api';
    //const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';  
    //`${URL}/character/${id}?key=${KEY}`
    fetch(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => success(data,res))
    .catch((reason) => errorH(reason,res))     
}

module.exports = getCharById; */