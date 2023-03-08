import Card from '../Card/Card.jsx';
import {ContainerCards} from "./Cards.js";


export default function Cards(props) {
   const { characters } = props;
   return (
      <ContainerCards>
         {characters.map( ({name,species,gender,image}) => {
            return (
               <Card 
                  name = {name} 
                  species = {species}
                  gender = {gender}
                  image = {image}
               />
            );
         } )}
      </ContainerCards>);
}
