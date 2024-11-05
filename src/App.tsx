import React from "react";
import { useState } from "react";
import "./styles/App.css";
import GameList from "./components/GameList/GameList";
import { Pagination } from "./components/Pagination/Pagination";
import { useGames } from "./hooks/useGames";
import { useDebounce } from "./hooks/useDebounce";
import { Select } from "./components/Select/Select";
import { Input } from "./components/Input/Input";

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

  const orderingOptions = [
    { label: "Added", value: "added" },
    { label: "Name", value: "name" },
    { label: "Released", value: "released" },
    { label: "Rating", value: "rating" },
    { label: "Metacritic", value: "metacritic" },
  ];

  const handleOrderingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrdering(e.target.value);
    setCurrentPage(1);
    setSearchValue("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
    setOrdering("added");
  };

  return (
    <div
      className={`min-h-dvh text-textPrimary ${error ? "flex items-center justify-center" : ""}`}
    >
      {error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <>
          <Input
            type={"text"}
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={"Search game"}
            name={"searchValue"}
          />

          <Select
            label={"Order by"}
            value={ordering}
            onChange={handleOrderingChange}
            options={orderingOptions}
            name={"selectedOrdering"}
          />

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
      )}
    </div>
  );
}

export default App;
