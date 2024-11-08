import React from "react";
import { Game } from "../../interfaces/interfaces";
import GameCard from "../GameCard/GameCard";

interface FavoritesListProps {
  favorites: Game[];
  // eslint-disable-next-line no-unused-vars
  onRemoveFromFavorites: (gameId: number) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onRemoveFromFavorites,
}) => {
  return (
    <div>
      <h2>Favorite Games</h2>
      <div className="grid grid-cols-4 gap-16 mx-16 mt-16">
        {favorites.length > 0 ? (
          favorites.map((game) => (
            <GameCard
              key={game.id}
              gameData={game}
              isFavorite={true}
              onAddToFavorites={() => {}}
              onRemoveFromFavorites={onRemoveFromFavorites}
            />
          ))
        ) : (
          <p>No favorite games.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
