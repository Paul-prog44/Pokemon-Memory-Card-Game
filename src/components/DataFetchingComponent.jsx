import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"


export default function DataFetchingComponent({setScore, score, setSelectedPokemons, selectedPokemons, setBestScore, bestScore}) {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function fetchDataForEachPokemon(pokemon) {
        let url = pokemon.url

        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(function(pokeData){
                setPokemons(prevData => [...prevData, pokeData])
        })
    }

    function shuffleArray() {
        pokemons.sort((a, b) => 0.5 -Math.random())
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(reponse => {
            
            reponse.results.forEach(pokemon => {
                // console.log(pokemon)
               fetchDataForEachPokemon(pokemon)
            });
            setLoading(false)
        })
        
        .catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error : {error.message}</div>
    }
    
    return (
        <div className="cardDisplay">
            {pokemons.map(pokemon => (
                <PokemonCard 
                    key={pokemon.name} 
                    imgSrc={pokemon.sprites.front_default} 
                    pokemonName={pokemon.name} 
                    setScore={setScore} 
                    score={score}
                    setSelectedPokemons={setSelectedPokemons}
                    selectedPokemons={selectedPokemons}
                    bestScore={bestScore}
                    setBestScore={setBestScore}
                    shuffleArray={shuffleArray}
                />
            ))}
        </div>
    )

}