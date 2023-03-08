import styled from "styled-components"

const Carta = styled.div`
   border-radius: 20px;
   border-color: white;
   
   box-shadow: -8px 9px 14px -3px rgba(0,0,0,0.75);
   -webkit-box-shadow: -8px 9px 14px -3px rgba(0,0,0,0.75);
   -moz-box-shadow: -8px 9px 14px -3px rgba(0,0,0,0.75);


   background-image: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg');
   background-size: cover;
   background-repeat: no-repeat;

   padding-top: 1%;
   margin-bottom: 2%;
   width: 15%;


`
/*
   display:flex;
   flex-direction: column;
   aling-items: center;
*/



const Boton = styled.button`
   width: 15%;
   height: 10%;
   border-style: solid;
   border-radius: 50%;
   color: white;
   background-color: #9C1E03;
   
   display: flex;
   justify-content: center;
`

const Imagen = styled.img`
   width: 50%;
   border-radius: 50%;

   box-shadow: 0px 3px 28px 0px rgba(255,255,255,1);
   -webkit-box-shadow: 0px 3px 28px 0px rgba(255,255,255,1);
   -moz-box-shadow: 0px 3px 28px 0px rgba(255,255,255,1);
   
`
const Datos = styled.h2`
   font-size: small;
`

const Nombre = styled.h2`
   border-radius: 20px;
   font-size: medium;
   font-family: papyrus;
   text-decoration: underline;
`

export {Carta,Boton,Imagen,Datos,Nombre};