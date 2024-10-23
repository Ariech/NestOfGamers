import { Game } from "../../../interfaces/interfaces";

interface GameCardProps {
  gameData: Game;
}

function GameCard({ gameData }: GameCardProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{gameData.name}</p>
      <img
        className="image"
        src={gameData.background_image}
        alt={gameData.name}
      />
    </div>
  );
}

export default GameCard;
