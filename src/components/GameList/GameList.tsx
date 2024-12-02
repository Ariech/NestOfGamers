import GameCard from "../GameCard/GameCard";
import { useFavoritesContext } from "../../hooks/useFavoritesContext";
import { GameListProps } from "../../interfaces/interfaces";

const GameList = ({ games, error }: GameListProps) => {
  const { favorites } = useFavoritesContext();

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-16 px-16 py-8 ">
      {games.map((game) => (
        <GameCard
          key={game.id}
          gameData={game}
          isFavorite={favorites.some((favGame) => favGame.id === game.id)}
        />
      ))}
    </div>
  );
};

export default GameList;
