import { REMOVE_FAVORITE,FILTER_FAVORITES,ORDER_FAVORITES, GET_CHARACTER_DETAIL, CLEAN_DETAIL, GET_FAVORITES } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail: {}
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_FAVORITES: return {
            ...state,
            myFavorites: action.payload,
            //allCharacters Está para no hacer filtros de otros filtros (la suma de filtros vacía todo)
            allCharacters: action.payload
        }

        case REMOVE_FAVORITE: return {
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload )    //allChar
        };  

        case GET_CHARACTER_DETAIL : return { 
            ...state, 
            characterDetail: action.payload
        }

        case FILTER_FAVORITES: return {
            ...state,
            myFavorites: (action.payload !== "Filters")?
                state.allCharacters.filter((char)=> char.gender === action.payload) : state.allCharacters
        };

        case ORDER_FAVORITES: 
            const allFavs = state.allCharacters; //allChar

            const Sort = (action.payload === 'Ascendente'? allFavs.sort((fav1,fav2) => {    //allChar
                    if (fav1.name < fav2.name) {
                        return 1;
                    }
                    if (fav1.name > fav2.name) {
                        return -1;
                    }
                    return 0;
                }) : (action.payload === 'Descendente')? allFavs.sort((fav1,fav2) => {         //allChar
                    if (fav1.name < fav2.name) {
                        return -1;
                    }
                    if (fav1.name > fav2.name) {
                        return 1;
                    }
                    return 0;
                }) : allFavs
            )
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