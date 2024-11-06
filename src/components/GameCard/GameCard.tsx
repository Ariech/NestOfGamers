import { Game } from "../../interfaces/interfaces";

interface GameCardProps {
  gameData: Game;
}

function GameCard({ gameData }: GameCardProps) {
  return (
    <div className="flex flex-col items-center bg-cardBg rounded-lg shadow-custom-card hover:shadow-custom-card-hover hover:scale-105 transition-transform duration-300">
      <div className="w-full relative">
        <img
          className="w-full object-cover rounded-t-lg image"
          src={gameData.background_image}
          alt={gameData.name}
          loading="lazy"
        />
      </div>
      <div className="w-full flex flex-col items-center text-center bg-cardBg p-4 rounded-b-lg ">
        <p className=" text-textPrimary text-lg font-semibold mb-2">
          {gameData.name}
        </p>
        <button className="mt-2 bg-shadowDark text-accentSilver px-4 py-2 rounded-lg font-medium hover:bg-highlight transition-colors duration-200">
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default GameCard;
