import { useEffect, useState } from "react";
import { Game } from "../interfaces/interfaces";
import {
  getFavoriteGames,
  saveFavoriteGame,
  removeFavoriteGame,
} from "../utils/localStorageFavorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Game[]>([]);

  useEffect(() => {
    setFavorites(getFavoriteGames());
  }, []);

  const addToFavorites = (game: Game) => {
    saveFavoriteGame(game);
    setFavorites(getFavoriteGames());
  };

  const removeFromFavorites = (gameId: number) => {
    removeFavoriteGame(gameId);
    setFavorites(getFavoriteGames());
  };

  return { favorites, addToFavorites, removeFromFavorites };
};
