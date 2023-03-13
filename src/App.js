import { useState, useEffect } from 'react'
import './App.css'

import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './views/About.jsx'
import Detail from './views/Detail.jsx'
import Form from './components/Form/Form.jsx'

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'


function App () {
  const [characters,setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL = 'https://be-a-rym.up.railway.app/api';
    const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';

    if (characters.find((char) => char.id === id)) {
      alert('Personaje Repetido')
    }

    fetch(`${URL}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
      if (data.name ) {
        setCharacters((oldChar) => [...oldChar, data]); //Recibo el estado viejo y retorno el estado nuevo.
      } else {
        alert('No hay personajes con ese ID');
      }
    });  
  }

  //App.js
  const [access, setAccess] = useState(false);
  const username = 'nicopua7@gmail.com';
  const password = 'asd1234';
  const navigate = useNavigate();

  //LOGIN
  const login = (userData) => {
    if (userData.username == username && userData.password == password) {
      setAccess(true);
      navigate('/home');
    }  
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  //---------------------------------------------

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  const location = useLocation(); 

  return (
    <div className='App' style={{ padding: '25px' }}>
      {
        location.pathname!=='/'? <Nav onSearch={onSearch}/>:('')
      } 
      <Routes>
        <Route path='/' element={<Form login={login}/>} /> 
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>     
    </div>
  )
} 

export default App;
