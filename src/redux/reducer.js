import { ADD_CHAR,DEL_CHAR } from "./actions"

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_CHAR: return {...state, myFavorites: [...state.myFavorites, action.payload ] }
        case DEL_CHAR: return {...state,myFavorites: state.myFavorites.filter((char) => char.id !== action.payload )}
        default: return {...state}
    }
}

export default rootReducer;