import {Carta,Boton,Imagen,Datos,Nombre} from "./Card.js";

export default function Card({name,species,gender,image}) {
   const OnClose = () => window.alert('Emulamos que se cierra la card')
   return (
      <Carta>
         <Boton onClick={OnClose}>X</Boton>
         <Imagen  src={image} alt="" />
         <Nombre>Nombre: {name}</Nombre>
         <Datos>Especie: {species}</Datos>
         <Datos>Género: {gender}</Datos>
         
      </Carta>
   );
}
