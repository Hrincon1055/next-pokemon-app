import { useEffect, useState } from "react";
// MIS COMPONENTES
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";
// INICIO
const FavoritesPage = () => {
  // STATE
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  // EFFECT
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  // RENDER
  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};
export default FavoritesPage;
