const URL = 'https://be-a-rym.up.railway.app/api';
const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';  

const getCharDetail = (res,id) => {
    //image, name, gender, status, origin y species.

    //const URL = 'https://be-a-rym.up.railway.app/api';
    //const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';  
    //`${URL}/character/${id}?key=${KEY}`
    fetch(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then(({image,name,gender,status,origin,species}) => {
        const save = {
            id,
            image,
            name,
            gender,
            status,
            origin,
            species,
        }
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify(save));
    })
    .catch((reason) => {
        res.writeHead(500,{"Content-Type": "text/plain"});
        res.end(reason.message);
    })   
}  

module.exports = getCharDetail;