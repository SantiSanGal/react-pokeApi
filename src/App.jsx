import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {

  //Para guardar información de la API
  const[pokemon, setPokemon] = useState()//si no entregamos 
  //parámetro es 'undefined' por defecto

  const [inputValue, setInputValue] = useState()
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  //se utiliza para que no realice un ciclo infinito
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`
    setIsLoading(true)
    axios.get(url)
      .then(res => {
            setPokemon(res.data)
            setHasError(false)
          }
        )
      .catch(err => {
            console.log(err)
            setHasError(true)
          }
        )
      .finally(() => {
        setTimeout(()=>setIsLoading(false), 3000)})
  },[inputValue])

  // console.log(pokemon);
  //en consola muestra dos veces en consola por el stricmode

  const handleSubmit = e =>{
    //e = evento
    e.preventDefault() //cancela la recarga de la
    //página en el submit de los formularios
    // console.log(e);
    console.log(e.target.namePoke.value);//capturamos
    //el input del formulario search

    setInputValue(e.target.namePoke.value)

  }

  return (
    <div className="App">
      <h1>PokéAPI</h1>
      <form onSubmit={handleSubmit}>
        <input id='namePoke' type="text" />
        <button>Search</button>
      </form>
      <div className='card'>
        {
          isLoading ?
            <h1>Loading...</h1>
          :
            hasError ? 
              <h1>Pokémon Not Found</h1>
            :
              <Pokemon pokemon={pokemon}/>
        }
      </div>
    </div>
  )
}

export default App
