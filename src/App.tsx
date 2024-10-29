import React from "react";
import { useState } from "react";
import "./styles/App.css";
import GameList from "./components/GameList/GameList";
import { Pagination } from "./components/Pagination/Pagination";
import { useGames } from "./hooks/useGames";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ordering, setOrdering] = useState<string>("added");
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearchValue = useDebounce(searchValue, 300);

  const {
    data: gamesData,
    isLoading,
    error,
  } = useGames(ordering, currentPage, debouncedSearchValue);

  const handleOrderingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrdering(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
    setOrdering("added");
  };

  return (
    <>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search game"
        name="searchValue"
      />

      <label>
        Order by:{" "}
        <select
          name="selectedOrdering"
          value={ordering}
          onChange={handleOrderingChange}
        >
          <option value="added">Added</option>
          <option value="name">Name</option>
          <option value="released">Released</option>
          <option value="rating">Rating</option>
          <option value="metacritic">Metacritic</option>
        </select>
      </label>

      <GameList
        games={gamesData ? gamesData.results : []}
        loading={isLoading}
        error={error}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        gamesData={gamesData}
      />
    </>
  );
}

export default App;
