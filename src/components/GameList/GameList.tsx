import GameCard from "../GameCard/GameCard";
import { Game } from "../../interfaces/interfaces";

interface GameListProps {
  games: Game[];
  error: Error | null;
  favorites: Game[];
  // eslint-disable-next-line no-unused-vars
  onAddToFavorites: (game: Game) => void;
  // eslint-disable-next-line no-unused-vars
  onRemoveFromFavorites: (gameId: number) => void;
}

const GameList = ({
  games,
  error,
  favorites,
  onAddToFavorites,
  onRemoveFromFavorites,
}: GameListProps) => {
  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-16 mx-16 my-8 ">
      {games.map((game) => (
        <GameCard
          key={game.id}
          gameData={game}
          isFavorite={favorites.some((favGame) => favGame.id === game.id)}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      ))}
    </div>
  );
};

export default GameList;
