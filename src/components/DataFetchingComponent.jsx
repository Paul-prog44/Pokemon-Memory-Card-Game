import { useEffect, useState } from "react"


export default function DataFetchingComponent() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function fetchDataForEachPokemon(pokemon) {
        let url = pokemon.url
        if (fetchedUrls.has(url)) return

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

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(allPokemons => {
            allPokemons.results.forEach(pokemon => {
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
        <div>
            <h2>Fetched Data:</h2>
            {pokemons.map(pokemon => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </div>
    )

}