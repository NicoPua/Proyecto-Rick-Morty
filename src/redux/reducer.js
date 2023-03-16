import { ADD_CHAR,DEL_CHAR,FILTER,ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_CHAR: return {
            ...state,
            myFavorites: [...state.allCharacters, action.payload ],
            allCharacters: [...state.allCharacters, action.payload ]
        }

        case DEL_CHAR: return {
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload )    //DUDA
        };  

        case FILTER: return {
            ...state,
            myFavorites: state.allCharacters.filter((char)=> char.gender === action.payload)        //DUDA
        };

        case ORDER: 
            const allCharacters2 = state.allCharacters;

            const Sort = (state.payload === 'Ascendente'? allCharacters2.sort((a,b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (b.id > a.id) {
                    return -1;
                }
                return 0;
            }) : allCharacters2.sort((a,b) => {
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
        
        default: return {...state}
    }
}

export default rootReducer;