import axios from 'axios';

//Action types
export const ADD_CHAR = 'ADD_CHARACTER';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL'
export const GET_FAVORITES = "GET_FAVORITES";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const FILTER_FAVORITES = 'FILTER_FAVORITES';
export const ORDER_FAVORITES = 'ORDER_FAVORITES';

//Action creators

export const addFavorite = (character) =>{
    return function() {
        axios.post("http://localhost:3001/rickandmorty/fav", character)         //GUARDO la información de "character" en la URL/fav
        .then((res) => console.log("Personaje Agregado"));
    }
 }

export const removeFavorite = (id) =>{
    return async function (dispatch) {
        await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)      //Pido BORRAR el character según la ID
        dispatch(getFavorites());                                               //Actualizo los favoritos.
        alert("Eliminado con éxito");                                           //Mando una alerta.
    }
                                             
 }

export const getFavorites = () => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/rickandmorty/fav`);
        dispatch({ type: GET_FAVORITES, payload: response.data });
      };
} 

export const getCharacterDetail = (id) =>{
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/detail/${id}`);
        dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
    };
}

export const filterCards = (gender) => { return { type: FILTER_FAVORITES, payload: gender } }

export const orderCards = (id) => { return { type: ORDER_FAVORITES, payload: id } }

export const cleanDetail = () => { return { type: CLEAN_DETAIL } };