import { Link } from "react-router-dom";
import { Carta,Boton,Imagen,Datos,Nombre } from "../Card/Card.js";  //CSS
import { addCharacters, delCharacters } from "../../redux/actions.js";

import { connect } from "react-redux";
import { useState, useEffect } from "react";



function Card({id,name,species,gender,image,onClose,addCharacters, delCharacters,myFavorites}) {
   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         delCharacters(id);
      }else{
         setIsFav(true);
         addCharacters({id,name,species,gender,image,onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id,myFavorites]);

   return (
      <Carta>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <Boton onClick={() => onClose(id)}>X</Boton>
         <Imagen src={image} alt=""/>

         <Link to={`/detail/${id}`}>
            <Nombre>Nombre: {name}</Nombre>
         </Link>
         
         <Datos>Especie: {species}</Datos>
         <Datos>Género: {gender}</Datos>
      </Carta>
   );
}

//Estas funciones SIEMPRE arriba del export.
//mapStateToProps me TRAE EL ESTADO GLOBAL y lo que RETORNO lo envío a las props con el "connect(mapStatetoProps, null)()"
//mapDispatchToProps me otorga la funcion DISPATCH y lo que RETORNO lo envío a las props con el "connect(null,mapDispatchToProps)()"
const mapDispatchToProps = (dispatch) =>{
   return {
      addCharacters: (char) => {
         dispatch(addCharacters(char))
      },
      delCharacters: (id) => {
         dispatch(delCharacters(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);