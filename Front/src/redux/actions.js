import router from "../../../Back/src/routes";

const URL = "http://localhost:3001";

//Action types
export const ADD_CHAR = 'ADD';
export const DEL_CHAR = 'DELETE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const CLEAN_DETAIL = "CLEAN_DETAIL";

//Action creators
export const addCharacters = (character) =>{
    router.post(`${URL}/rickandmorty/fav`, (req,res) => {
        res.status(200).json(character);
    })
    //return { type: ADD_CHAR, payload: character }
}

export const delCharacters = (id) =>{
    

    //return { type: DEL_CHAR, payload: id }
}

export const filterCards = (gender) => { return { type: FILTER, payload: gender } }

export const orderCards = (id) => { return { type: ORDER, payload: id } }

export const cleanDetail = () => { return { type: CLEAN_DETAIL } };