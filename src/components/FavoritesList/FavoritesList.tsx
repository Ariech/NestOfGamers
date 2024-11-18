import React from "react";
import GameCard from "../GameCard/GameCard";
import { useFavoritesContext } from "../../hooks/useFavoritesContext";

const FavoritesList: React.FC = () => {
  const { favorites } = useFavoritesContext();

  return (
    <div>
      <h2>Favorite Games</h2>
      <div className="grid grid-cols-4 gap-16 mx-16 mt-16">
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
