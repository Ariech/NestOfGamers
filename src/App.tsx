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
  const [genre, setGenre] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearchValue = useDebounce(searchValue, 300);

  const {
    data: gamesData,
    isLoading,
    error,
  } = useGames(ordering, currentPage, debouncedSearchValue, genre);

  const orderingOptions = [
    { label: "Added", value: "added" },
    { label: "Name", value: "name" },
    { label: "Released", value: "released" },
    { label: "Rating", value: "rating" },
    { label: "Metacritic", value: "metacritic" },
  ];

  const genreOptions = [
    { label: "None", value: "" },
    { label: "Action", value: "action" },
    { label: "Indie", value: "indie" },
    { label: "Adventure", value: "adventure" },
    { label: "RPG", value: "rpg" },
    { label: "Strategy", value: "strategy" },
    { label: "Shooter", value: "shooter" },
    { label: "Casual", value: "casual" },
    { label: "Simulation", value: "simulation" },
    { label: "Puzzle", value: "puzzle" },
    { label: "Arcade", value: "arcade" },
    { label: "Platformer", value: "platformer" },
    { label: "Racing", value: "racing" },
    { label: "Massively Multiplayer", value: "massively-multiplayer" },
    { label: "Sports", value: "sports" },
    { label: "Fighting", value: "fighting" },
    { label: "Family", value: "family" },
    { label: "Board Games", value: "board-games" },
    { label: "Educational", value: "educational" },
    { label: "Card", value: "card" },
  ];

  const handleSelectChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setter(e.target.value);
      setCurrentPage(1);
      if (!searchValue) {
        setSearchValue("");
      }
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
            onChange={handleSelectChange(setOrdering)}
            options={orderingOptions}
            name={"selectedOrdering"}
          />

          <Select
            label={"Genre"}
            value={genre}
            onChange={handleSelectChange(setGenre)}
            options={genreOptions}
            name={"selectedGenre"}
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
