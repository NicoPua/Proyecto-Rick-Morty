import './App.css'

import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/Search/SearchBar.jsx'
import characters from './data.js'


function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
      </div>
      
      <Cards characters={characters}/>     
      
    </div>
  )
}

export default App;
