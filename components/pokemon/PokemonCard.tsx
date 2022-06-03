import { FC } from "react";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
// MIS COMPONENTES
import { SmallPokemon } from "../../interfaces/pokemon-list";
// INTERFACE
interface Props {
  pokemon: SmallPokemon;
}
// INICIO
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  // HOOKS
  const router = useRouter();
  // FUNCIONES
  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };
  // RENDER
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            alt={pokemon.name}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
