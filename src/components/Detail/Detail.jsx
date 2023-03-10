import {useState,useParams} from 'react'

const Detail = () =>{
  const [character,setCharacter] = useState([]);

  const URL = 'https://be-a-rym.up.railway.app/api';
  const KEY = 'ab609bfc7704.d3a36031c2ddc6820402';

  useEffect(() => {
      fetch(`${URL}/character/detail/${detailId}?key=${KEY}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return setCharacter({});
  }, [id]);
  
  return (
    <div>
      
    </div>
  )
}

export default Detail;