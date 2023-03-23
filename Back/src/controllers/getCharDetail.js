export const getCharDetail = (res,id) => {
    //image, name, gender, status, origin y species.
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
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