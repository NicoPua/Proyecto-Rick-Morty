import { useState } from "react";
import {BoxSearch, Input,Boton} from "./SearchBar.js"; //CSS

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value);
   }

   return (
      <BoxSearch>
          <Input type='search' onChange={handleChange} />
         <Boton onClick={() => onSearch(id)} >Agregar</Boton>
      </BoxSearch>
   );
}
