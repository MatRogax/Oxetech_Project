import { Container } from "react-bootstrap";
import PokemonItem from "../../components/pokemonitem";
type PokemonDataItem = {
    name : string,
    src : string,
};
const  pokemonData:PokemonDataItem[] = [
    {
        name:"bulbasaur",
        src:"https://raw.githubusercontent.com/pokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    },
    {
        name:"bulbasaur",
        src:"https://raw.githubusercontent.com/pokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    },
    {
        name:"bulbasaur",
        src:"https://raw.githubusercontent.com/pokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    },
    {
        name:"bulbasaur",
        src:"https://raw.githubusercontent.com/pokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    },
]
const Home = () => {
    return (
        <Container style={{display:"flex",gap:10,marginTop:10}}>
            {pokemonData.map((item:PokemonDataItem) =>{
                return(
                    <PokemonItem 
                        src={item.src} 
                        name={item.name}>
                    </PokemonItem>

                );
            })}
        </Container>
    )
}

export default Home;