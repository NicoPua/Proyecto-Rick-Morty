import SearchBar from '../Search/SearchBar.jsx'
import {Link} from 'react-router-dom'
import {AllBar,LinksBar,Buscador} from './Nav.js'; //CSS

export default function Nav({onSearch}) {
    
  return (
    <AllBar>

      <LinksBar>
        <Link to='/home'>
          <p>Home</p>
        </Link>
      
        <Link to='/about'>
          <p>About</p>
        </Link>
      
        <Link to='/favorites'>
          <p>Favorites</p>
        </Link>
      
        <Link to='/'>
          <p>Log Out</p>
        </Link>
      </LinksBar>  

      <Buscador>
        <SearchBar onSearch={onSearch}/>
      </Buscador>
    </AllBar>
    );
}