import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Detail = () =>{
    const {detailId} = useParams();         //useParams() DEVUELVE UN OBJ QUE TIENE EL VALOR DE ':detailId' en la URL.

    const [character,setCharacter] = useState({});

    const URL = "http://localhost:3001/rickandmorty"; //FALTA

    useEffect(() => {                           //SIEMPRE (cb'()=>{}', ARRAY'[]'). useEffect se ejecuta cuando se monta el componente.
        axios(`${URL}/detail/${detailId}`)
        .then(response=> setCharacter(response.data))   //SETEO character para igualarlo con la RESPUESTA de axios  
    },[])
    
    return (                    //SIEMPRE que se modifica el estado (character, en este caso), se vuelve a ejecutar el render() o return().
        <div>
            {
                character.name ? (<>
                    <h2>Nombre: {character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <img src={character.image} alt='img'/>
                </>) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
};

export default Detail;