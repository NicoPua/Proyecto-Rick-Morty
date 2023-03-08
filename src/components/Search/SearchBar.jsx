import {BoxSearch, Input,Boton} from "./SearchBar.js";

export default function SearchBar({OnSearch}) {
   return (
      <BoxSearch>
          <Input type='search' />
         <Boton onClick={(id) =>{OnSearch(id)}}>Agregar</Boton>
      </BoxSearch>
   );
}
