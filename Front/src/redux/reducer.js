import { ADD_CHAR,DEL_CHAR,FILTER,ORDER,CLEAN_DETAIL } from "./actions"

const initialState = {
    myFavorites: [],
    //allCharacters: [],
    characterDetail: {}
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_CHAR: return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload ]
            //allCharacters: [...state.allCharacters, action.payload ]
        }

        case DEL_CHAR: return {
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload )    
        };  

        case FILTER: return {
            ...state,
            myFavorites: state.myFavorites.filter((char)=> char.gender === action.payload)        
        };

        case ORDER: 
            const allCharacters = state.myFavorites;

            const Sort = (state.payload === 'Ascendente'? allCharacters.sort((a,b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (b.id > a.id) {
                    return -1;
                }
                return 0;
            }) : allCharacters.sort((a,b) => {
                if (a.id > b.id) {
                    return -1;
                }
                if (b.id > a.id) {
                    return 1;
                }
                return 0;
            }))
        return{
            ...state,
            myFavorites: Sort
        }
        
        case CLEAN_DETAIL: return {
            ...state,
            characterDetail: {}
        }

        default: return {...state}
    }
}

export default rootReducer;