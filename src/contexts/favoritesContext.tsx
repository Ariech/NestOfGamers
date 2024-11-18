import React, { createContext } from "react";
import { Game } from "../interfaces/interfaces";
import { useFavorites } from "../hooks/useFavorites";

interface FavoritesContextProps {
  favorites: Game[];
  // eslint-disable-next-line no-unused-vars
  addToFavorites: (game: Game) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromFavorites: (gameId: number) => void;
}

export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
