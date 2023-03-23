export const getCharById = (res,id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then(({id,image,name,gender,species}) => {
        const save = {
            id,
            image,
            name,
            gender,
            species
        }
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify(save));
    })
    .catch((reason) => {
        res.writeHead(500,{"Content-Type": "text/plain"});
        res.end(reason.message);
    })     
}