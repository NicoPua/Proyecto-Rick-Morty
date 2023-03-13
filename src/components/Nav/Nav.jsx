import SearchBar from '../Search/SearchBar.jsx'
import {Link} from 'react-router-dom'

export default function Nav({onSearch}) {
    
  const logout = () =>{
    
  }
  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      <Link to='/home'>
        <p>Home</p>
      </Link>
        
      <Link to='/about'>
        <p>About</p>
      </Link>

      <Link to={logout}>
        <p>Log Out</p>
      </Link>
    </div>
    );
}