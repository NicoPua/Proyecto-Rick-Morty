import {Carta,Boton,Imagen,Datos,Nombre} from "./Card.js";  //CSS

export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <Carta>
         <Boton onClick={() => onClose(id)}>X</Boton>
         <Imagen src={image} alt=""/>
         <Nombre>Nombre: {name}</Nombre>
         <Datos>Especie: {species}</Datos>
         <Datos>Género: {gender}</Datos>
      </Carta>
   );
}
