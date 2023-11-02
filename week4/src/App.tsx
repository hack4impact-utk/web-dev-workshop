import './App.css'
import { useEffect, useState } from "react"
import Pokemon from './components/Pokemon';

interface pokemonAPIData {
  name: string;
  weight: number;
  id: number;
}

function App() {
  const [pokemonData, setPokemonData] = useState<pokemonAPIData[]>([]);
  async function getPokemon() {
    
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    console.log(data.results);
    setPokemonData(data.results);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return(
    <ul>
      {
        pokemonData.map((pokemon) => {
          const name = pokemon.name;
          // const weight = pokemon.weight;
          // const id = pokemon.id;
          return <Pokemon name={name} />
        })
      }
    </ul>
  );
}

export default App
