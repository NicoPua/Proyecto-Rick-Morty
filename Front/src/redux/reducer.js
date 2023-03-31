import { ADD_CHAR,DEL_CHAR,FILTER,ORDER, GET_CHARACTER_DETAIL, CLEAN_DETAIL, GET_FAVORITES } from "./actions"

const initialState = {
    myFavorites: [],
    //allCharacters: [],
    characterDetail: {}
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_CHAR: return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload ],
            //allCharacters: [...state.allCharacters, action.payload ]
        }

        case DEL_CHAR: return {
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload )    //allChar
        };  

        case FILTER: return {
            ...state,
            myFavorites: state.myFavorites.filter((char)=> char.gender === action.payload)  //allChar      
        };

        case ORDER: 
            const allCharacters2 = state.myFavorites; //allChar

            const Sort = (state.payload === 'Ascendente'? allCharacters2.sort((a,b) => {    //allChar
                if (a.id > b.id) {
                    return 1;
                }
                if (b.id > a.id) {
                    return -1;
                }
                return 0;
            }) : allCharacters2.sort((a,b) => {         //allChar
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
        
        case GET_FAVORITES: return {
            ...state,
            myFavorites: action.payload
        }
        
        case GET_CHARACTER_DETAIL : return { 
            ...state, 
            characterDetail: action.payload
        }

        case CLEAN_DETAIL: return {
            ...state,
            characterDetail: {}
        }

        default: return {...state}
    }
}

export default rootReducer;