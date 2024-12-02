import GameCard from "../GameCard/GameCard";
import { useFavoritesContext } from "../../hooks/useFavoritesContext";

const FavoritesList = () => {
  const { favorites } = useFavoritesContext();

  return (
    <div className="min-h-dvh">
      <h2>Favorite Games</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-16 px-16 pt-8 pb-4">
        {favorites.length > 0 ? (
          favorites.map((game) => (
            <GameCard key={game.id} gameData={game} isFavorite={true} />
          ))
        ) : (
          <p>No favorite games.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
