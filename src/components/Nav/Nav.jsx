import SearchBar from '../Search/SearchBar.jsx'
import {Link} from 'react-router-dom'

export default function Nav({onSearch}) {
   return (
    <div>
        <Link to='/home'>
            <p>Home</p>
        </Link>
            
        <Link to='/about'>
            <p>About</p>
        </Link>
        <SearchBar onSearch={onSearch}/>
    </div>
   );
}