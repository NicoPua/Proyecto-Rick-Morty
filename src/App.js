import { useState } from 'react'
import './App.css'

import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
//import characters from './data.js'


function App () {
  const [characters,setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL = 'https://be-a-rym.up.railway.app/api';
    const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';

    fetch(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((oldChar) => [...oldChar, data]); //Recibo el estado viejo y retorno el estado nuevo.
      } else {
        alert('No hay personajes con ese ID');
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <Cards characters={characters} onClose={onClose}/>         
    </div>
  )
}

export default App;
