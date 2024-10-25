import { useEffect, useState, useCallback } from "react";
import "./styles/App.css";
import GameList from "./components/GameList/GameList";
import { Game } from "./interfaces/interfaces";
import { fetchGamesData, fetchNextPageGames } from "./utils/api";
import { Pagination } from "./components/Pagination/Pagination";

function App() {
  const [gamesData, setGamesData] = useState<Game[]>([]);
  const [nextPageGamesData, setNextPageGamesData] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [ordering, setOrdering] = useState<string>("added");
  const [error, setError] = useState<string | null>(null);

  const orderingParam = ordering === "name" ? ordering : `-${ordering}`;

  const fetchGames = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchGamesData(orderingParam, currentPage);
      // const prefetchedGames = await fetchNextPageGames(data.next);

      setGamesData(data);
      // setNextPageGamesData(prefetchedGames);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }, [orderingParam, currentPage]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  useEffect(() => {
    setCurrentPage(1);
  }, [orderingParam]);

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

      <GameList games={gamesData} loading={loading} error={error} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
