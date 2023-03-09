import SearchBar from '../Search/SearchBar.jsx'

export default function Nav({onSearch}) {
   return (
    <div>
        <SearchBar onSearch={onSearch}/>
    </div>
   );
}