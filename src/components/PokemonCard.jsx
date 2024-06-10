export default function PokemonCard({imgSrc, pokemonName, setScore, score, selectedPokemons, setSelectedPokemons, bestScore, setBestScore, shuffleArray}) {

    function compareBestScore() {
        if (score>bestScore) {
            setBestScore(score)
        }
    }

    //Vérification de la présence du pokemon dans la liste déja selectionnée
    const onClick = () => {
        if (selectedPokemons.includes(pokemonName)) {
            setSelectedPokemons([])
            alert("Vous avez perdu")
            compareBestScore()
            setScore(0)        
        } else {
            setSelectedPokemons(prevData => [...prevData, pokemonName])
            setScore(score + 1)
            shuffleArray()
        }
        
    }

    return (
        <div className="card" onClick={onClick}>
            <img src={imgSrc} alt={pokemonName}></img>
            <p>{pokemonName.toUpperCase()}</p>
        </div>
    )
}