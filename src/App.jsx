import React, {useState,useEffect} from 'react';
import EmojiData from './Emoji.json';
import './app.css'

const App = () =>{
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
 const newData = EmojiData.filter(emoji => emoji.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setData(newData);
},[search])
  return (
    <>
    
     <center>
      <h1>Emoji Search</h1>
      <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
     </center>
     <br></br>
       <article>
      <div className="card">
      {data.map(emoji => <ul><li>{emoji.symbol} {emoji.title}</li></ul>)}
      </div>
       </article> 
    
     </>
  
  )
}

export default App
