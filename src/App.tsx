import { useEffect, useState, useCallback } from "react";
import "./styles/App.css";
import GameCard from "./components/GameCard/GameCard";
import { Game } from "./interfaces/interfaces";

function App() {
  const [gamesData, setGamesData] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [ordering, setOrdering] = useState<string>("added");
  const [error, setError] = useState<string | null>(null);

  const orderingParam = ordering === "name" ? ordering : `-${ordering}`;

  const fetchGamesData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&ordering=${orderingParam}&metacritic=80,100`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setGamesData(data.results);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e);
        setError(e.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  }, [orderingParam]);

  useEffect(() => {
    fetchGamesData();
  }, [fetchGamesData]);

  return (
    <>
      {error && <p className="text-red-500">Error: {error}</p>}
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>

      <label>
        Order by:{" "}
        <select
          name="selectedOrdering"
          value={ordering}
          onChange={(e) => setOrdering(e.target.value)}
        >
          <option value="added">Added</option>
          <option value="name">Name</option>
          <option value="released">Released</option>
          <option value="rating">Rating</option>
          <option value="metacritic">Metacritic</option>
        </select>
      </label>

      {loading ? (
        <p>Loading games...</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {gamesData.map((game: Game) => {
            return <GameCard key={game.id} gameData={game} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
