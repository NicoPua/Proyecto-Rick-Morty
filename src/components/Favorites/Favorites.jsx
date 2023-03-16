import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import Card from "../Card/Card.jsx";

const Favorites = () => {
    const favorites = useSelector((state)=> state.myFavorites)
    const dispatch = useDispatch();

    const ordenamiento = (event) =>{
        dispatch(orderCards(event.target.value));
    }
    
    const filtro = (event) =>{
        dispatch(filterCards(event.target.value));
    }

    return(
    <div>
        <select name="Order" onChange={ordenamiento}>
            <option value="Ascendente">Ascendente</option>

            <option value="Descendente">Descendente</option>
        </select>
        <select name='Filter' onChange={filtro}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>

        {favorites.map(({id,name,species,gender,image})=>{
            return (
                <Card 
                key = {id}
                id = {id}
                name = {name} 
                species = {species}
                gender = {gender}
                image = {image}
                />
            )
        })}
    </div>
    )
}

export default Favorites;