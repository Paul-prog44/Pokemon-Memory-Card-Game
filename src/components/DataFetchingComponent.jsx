import { useEffect, useState } from "react"


export default function DataFetchingComponent() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            setData(data)
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
            {data.results.map(pokemon => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </div>
    )
}