import { useState, useEffect } from 'react';
import './App.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './views/About.jsx';
import Detail from './views/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


function App () {
  const [characters,setCharacters] = useState([]);

  //FUNCION PARA BUSCAR----------------------------------------------
  const onSearch = (id) => {
    
    const URL = 'http://localhost:3001/rickandmorty'; //FALTA http://localhost:3001/rickandmorty/onsearch/
    //const URL = 'https://be-a-rym.up.railway.app/api';
    //const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';  
    //`${URL}/character/${id}?key=${KEY}`

    if (characters.find((char) => char.id == id)) {
      return alert('El Personaje ya fue añadido');
    }

    fetch(`${URL}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          setCharacters((oldChar) => [...oldChar, data]); //Recibo el estado viejo y retorno el estado nuevo.
        } else {
          alert('No hay personajes con ese ID');
        }
    });  
  }
  //----------------------------------------------------------------------------

  //LOGIN ----------------------------------------------------------------------
  const [access, setAccess] = useState(false);
  const username = 'nicopua7@gmail.com';
  const password = 'asd1234';
  
  const navigate = useNavigate();
  const login = (userData) => {
    if (userData.username == username && userData.password == password) {
      setAccess(true);
      navigate('/home');    //Te lleva a '/home' y el access  es 'true'.
    }  
  }

  useEffect(() => {           //Esto no dejará navegar por la aplicación, al menos que ingrese la información correcta.
    !access && navigate('/');
  }, [access]);
  //------------------------------------------------------------------------
  
  //FUNCION CerrarCARD--------------------------------------------------------------
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }
  //------------------------------------------------------------------------

  const location = useLocation(); 
 
  return (
    <div className='App' style={{ padding: '25px' }}>
      {
        location.pathname!=='/' && <Nav onSearch={onSearch}/>
      } 
      <Routes>
        <Route path='/' element={<Form login={login}/>} /> 
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>     
    </div>
  )
} 

export default App;
