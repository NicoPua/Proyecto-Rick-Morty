import { Link } from "react-router-dom";
import {Carta,Boton,Imagen,Datos,Nombre} from "./Card.js";  //CSS

export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <Carta>
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
