import GameCard from "../GameCard/GameCard";
import { Game } from "../../interfaces/interfaces";

interface GameListProps {
  games: Game[];
  loading: boolean;
  error: Error | null;
}

const GameList = ({ games, loading, error }: GameListProps) => {
  if (loading) {
    return <p>Loading games...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} gameData={game} />
      ))}
    </div>
  );
};

export default GameList;
