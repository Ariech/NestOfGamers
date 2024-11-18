import { useFavoritesContext } from "../../hooks/useFavoritesContext";
import { GameCardProps } from "../../interfaces/interfaces";

function GameCard({ gameData, isFavorite }: GameCardProps) {
  const { addToFavorites, removeFromFavorites } = useFavoritesContext();

  return (
    <div className="flex flex-col items-center bg-cardBg rounded-lg shadow-custom-card hover:shadow-custom-card-hover hover:scale-105 transition-transform duration-300 justify-between">
      <div className="w-full relative">
        <img
          className="w-full object-cover rounded-t-lg image"
          src={gameData.background_image}
          alt={gameData.name}
          loading="lazy"
        />
      </div>
      <div className="w-full flex flex-col items-center  text-center bg-cardBg p-4 rounded-b-lg">
        <p className=" text-textPrimary text-lg font-semibold mb-2">
          {gameData.name}
        </p>
        {isFavorite ? (
          <button
            onClick={() => removeFromFavorites(gameData.id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={() => addToFavorites(gameData)}
            className="mt-2 bg-shadowDark text-accentSilver px-4 py-2 rounded-lg font-medium hover:bg-highlight transition-colors duration-200"
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}

export default GameCard;
