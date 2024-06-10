export default function PokemonCard({imgSrc, pokemonName, setScore, score, selectedPokemons, setSelectedPokemons}) {

    //Vérification de la présence du pokemon dans la liste déja selectionnée
    const onClick = () => {
        if (selectedPokemons.includes(pokemonName)) {
            setSelectedPokemons([])
            setScore(0)
            alert("Vous avez perdu")
                
        } else {
            setSelectedPokemons(prevData => [...prevData, pokemonName])
            setScore(score + 1)
            console.log("clicked")
        }
        
    }

    return (
        <div className="card" onClick={onClick}>
            <img src={imgSrc} alt={pokemonName}></img>
            <p>{pokemonName.toUpperCase()}</p>
        </div>
    )
}