import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";
// INTERFACE
interface Props {
  pokemons: number[];
}
// INICIO
export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  // RENDER
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
