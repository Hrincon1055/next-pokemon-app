import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
// MIS COMPONENTES
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

// INTERFACES
interface Props {
  pokemons: SmallPokemon[];
}
// INICIO
const HomePage: NextPage<Props> = ({ pokemons }) => {
  // RENDER
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=150");
  let pokemons = data.results.map((pokemon: SmallPokemon, i: number) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: { pokemons },
  };
};

export default HomePage;
