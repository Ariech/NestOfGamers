import React from "react";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface GamesData {
  results: Game[];
  next: string | null;
}

export interface GameCardProps {
  gameData: Game;
  isFavorite: boolean;
}

export interface GameListProps {
  games: Game[];
  error: Error | null;
}

export interface InputProps {
  type: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: any;
  gamesData: GamesData;
}

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  name: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onReset: () => void;
}
