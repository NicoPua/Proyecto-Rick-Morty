import Card from '../Card/Card.jsx';
import {ContainerCards} from "./Cards.js";      //CSS
//import {getFavorites} from "../../redux/actions"
//import { useDispatch } from "react-redux";
//import { useEffect } from 'react';

export default function Cards({characters, onClose}) {
   
   /*NO SÉ PARA QUÉ ES
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFavorites());
    }, [])*/
   
   return (
      <ContainerCards>
         {characters.map(({id,name,species,gender,image}) => {
            return (
               <Card 
                  key = {id}
                  id = {id}
                  name = {name} 
                  species = {species}
                  gender = {gender}
                  image = {image}
                  onClose = {onClose}
               />
            );
         } )}
      </ContainerCards>);
}
