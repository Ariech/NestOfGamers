import { render, screen } from "@testing-library/react";
import GameList from "./GameList";
import { Game } from "../../interfaces/interfaces";
import { describe, expect, it } from "vitest";

const mockGames: Game[] = [
  { id: 1, name: "Game 1", background_image: "image1.jpg" },
  { id: 2, name: "Game 2", background_image: "image2.jpg" },
];

describe("GameList", () => {
  it("displays loading message when loading is true", () => {
    render(<GameList games={[]} loading={true} error={null} />);
    expect(screen.getByText(/Loading games.../i)).toBeInTheDocument();
  });

  it("displays error message when there is an error", () => {
    render(
      <GameList games={[]} loading={false} error={new Error("Fetch error")} />
    );
    expect(screen.getByText(/Error: Fetch error/i)).toBeInTheDocument();
  });

  it("displays list of games when data is loaded", () => {
    render(<GameList games={mockGames} loading={false} error={null} />);
    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });
});
