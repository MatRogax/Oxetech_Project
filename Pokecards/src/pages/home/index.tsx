import { Container } from "react-bootstrap";
import PokemonItem from "../../components/pokemonitem";
import { useEffect, useState } from "react";
import api from "../../services/api";

type PokemonDataItem = {
  name: string;
  src: string;
};

const Home = () => {
  interface IPokemonData {
    count: number;
    next: string;
    previous: string;
    results: PokemonDataItem[];
  }
  const [pokemonData, setPokemonData] = useState<PokemonDataItem[]>([]);
  useEffect(() => {
    api.get("/pokemon?limit=20&offset=").then((response) => {
      console.log(response);
      const data: IPokemonData = response.data;
      const results = data?.results.map((item) => ({
        name: item.name,
        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      }));
      setPokemonData(results);
    });
  }, []);
  return (
    <Container
      style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}
    >
      {pokemonData.map((item: PokemonDataItem) => {
        return (
          <PokemonItem
            key={item.name}
            src={item.src}
            name={item.name}
          ></PokemonItem>
        );
      })}
    </Container>
  );
};

export default Home;
