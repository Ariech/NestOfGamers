import React from "react";
import { render, screen } from "@testing-library/react";
import GameList from "./GameList";
import { Game } from "../../interfaces/interfaces";
import { describe, expect, it } from "vitest";
import { FavoritesProvider } from "../../contexts/favoritesContext";

const mockGames: Game[] = [
  { id: 1, name: "Game 1", background_image: "image1.jpg" },
  { id: 2, name: "Game 2", background_image: "image2.jpg" },
];

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<FavoritesProvider>{ui}</FavoritesProvider>);
};

describe("GameList", () => {
  it("displays error message when there is an error", () => {
    renderWithProviders(
      <GameList games={[]} error={new Error("Fetch error")} />
    );
    expect(screen.getByText(/Error: Fetch error/i)).toBeInTheDocument();
  });

  it("displays list of games when data is loaded", () => {
    renderWithProviders(<GameList games={mockGames} error={null} />);
    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });
});
