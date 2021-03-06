import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
// INTERFACE
interface Props {
  pokemonId: number;
}
// INICIO
export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  // HOOKS
  const router = useRouter();
  // FUNCIONES
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };
  // RENDER
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
      <Card
        hoverable
        clickable
        css={{ padding: 10 }}
        onClick={onFavoriteClicked}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
