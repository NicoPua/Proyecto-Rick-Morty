import Card from '../Card/Card.jsx';
import {ContainerCards} from "./Cards.js";      //CSS


export default function Cards({characters, onClose}) {
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
