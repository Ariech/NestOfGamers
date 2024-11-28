import React, { createContext } from "react";
import { useFavorites } from "../hooks/useFavorites";
import {
  FavoritesContextProps,
  FavoritesProviderProps,
} from "../interfaces/interfaces";

export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
