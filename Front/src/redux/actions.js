//Action types
export const ADD_CHAR = 'ADD';
export const DEL_CHAR = 'DELETE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

//Action creators
export const addCharacters = (character) =>{
    return { type: ADD_CHAR, payload: character }
}

export const delCharacters = (id) =>{
    return { type: DEL_CHAR, payload: id }
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id }
}