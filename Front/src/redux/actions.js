import axios from 'axios';

//Action types
export const ADD_CHAR = 'ADD';
export const DEL_CHAR = 'DELETE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL'
export const GET_FAVORITES = "GET_FAVORITES";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

//Action creators
export const addCharacters = (character) =>{
    return function (dispatch) {
        axios.post("http://localhost:3001/rickandmorty/fav", character)
        .then((response) => {
            return dispatch({ type: ADD_CHAR, payload: character });
        })  
    }
    //return { type: ADD_CHAR, payload: character }
}

export const delCharacters =  (id) =>{  
    return async function  (dispatch) {
        await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        dispatch({ type: DEL_CHAR, payload: id });
        alert("Eliminado con éxito");
    }  
    //return { type: DEL_CHAR, payload: id }
}

export const getFavorites = () => {
    return async function (dispatch) {
        const URL = "http://localhost:3001";
        const response = await axios.get(`${URL}/rickandmorty/fav`);
        dispatch({ type: GET_FAVORITES, payload: response.data });
      };
} 

export const getCharacterDetail = (id) =>{
    return async function (dispatch) {
        const URL = "http://localhost:3001";
        const response = await axios.get(`${URL}/detail/${id}`);
        dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
    };
}

export const filterCards = (gender) => { return { type: FILTER, payload: gender } }

export const orderCards = (id) => { return { type: ORDER, payload: id } }

export const cleanDetail = () => { return { type: CLEAN_DETAIL } };