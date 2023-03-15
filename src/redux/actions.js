export const ADD_CHAR = 'ADD';
export const DEL_CHAR = 'DELETE';

export const addCharacters = (character) =>{
    return { type: ADD_CHAR, payload: character }
}

export const delCharacters = (id) =>{
    return { type: DEL_CHAR, payload: id }
}