import { useEffect, useState } from "react";
import "./styles/App.css";
import GameCard from "./components/GameCard/GameCard";
import { Game } from "./interfaces/interfaces";

function App() {
  const [gamesData, setGamesData] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGamesData = async () => {
    try {
      const response = await fetch(
        `/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setGamesData(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGamesData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <div className="grid grid-cols-4 gap-4 ">
        {loading ? (
          <p>Loading games</p>
        ) : (
          gamesData.map((game: Game) => {
            return <GameCard key={game.id} gameData={game} />;
          })
        )}
      </div>
    </>
  );
}

export default App;
