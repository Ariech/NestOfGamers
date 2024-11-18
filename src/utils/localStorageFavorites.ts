import { Game } from "../interfaces/interfaces";

const FAVORITES_KEY = "favorites";

export const saveFavoriteGame = (game: Game): void => {
  const savedFavorites: Game[] = JSON.parse(
    localStorage.getItem(FAVORITES_KEY) || "[]"
  );

  if (!savedFavorites.find((favGame) => favGame.id === game.id)) {
    savedFavorites.push({
      id: game.id,
      name: game.name,
      background_image: game.background_image,
    });
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedFavorites));
  }
};

export const getFavoriteGames = (): Game[] => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
};

export const removeFavoriteGame = (gameId: number): void => {
  let savedFavorites: Game[] = JSON.parse(
    localStorage.getItem(FAVORITES_KEY) || "[]"
  );

  savedFavorites = savedFavorites.filter((game) => game.id !== gameId);

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedFavorites));
};
