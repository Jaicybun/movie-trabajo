import { useState, useEffect } from 'react'
import { movies } from './components/movies';
import { Movie } from './components/titleMovie';
import { Marcador } from './components/Marcadores';
import { Titulo } from './components/titulo';

function App() {

  function validar() {
    if (inputValue.length > 0){
      if(movie.name.toUpperCase() == inputValue.toUpperCase()) {
        const newpoint = count + 1;
        setCount(newpoint);
        setInputValue("");
      }else{
        const newlive = live - 1;
        setInputValue("");
        setLive(newlive);
      }
    }
    
  }
  
  const [play,setPlay] = useState(false);
  const [count, setCount] = useState(0)
  const [live, setLive] = useState(5)
  const [movie, setMovie] = useState("")
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  },[count, live==0])

  return (
    <div className='container'>
      <>
        {!play ? <><Titulo text={"GUESS MOVIE"} />
          <button className="play" onClick={()=> setPlay(!play)}>START GAME</button> </> : 
          <>
            <Marcador texto={"ATTEMPTS: "} marca={live} clase={"ATTEMPTS"}/>
            <Marcador texto={"POINT: "} marca={count} clase={"POINST"}/>
            <Titulo text={"GUESS MOVIE NOW"} />
            {live ? <>
              <Movie text={movie.emoji} />
              <form className='form-response'>
                <input required type="text" id="response" placeholder="movie´s name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type='submit' onClick={validar}>DONE</button>
              </form></> : 
              <div className='lose'>GAME OVER<br />
              <button onClick={() => [setLive(5), setCount(0)]}>RESTART</button>
              </div>
            }
          </>
        }
      </>
    </div>
  )
}

export default App