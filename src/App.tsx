import React from "react";
import { useState } from "react";
import "./styles/App.css";
import GameList from "./components/GameList/GameList";
import { Pagination } from "./components/Pagination/Pagination";
import { useGames } from "./hooks/useGames";
import { useDebounce } from "./hooks/useDebounce";
import { Select } from "./components/Select/Select";
import { Input } from "./components/Input/Input";
import { FavoritesProvider } from "./contexts/favoritesContext";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import { orderingOptions, genreOptions } from "./utils/options";

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-textPrimary text-4xl font-bold">Loading games...</p>
      </div>
    );
  }

  return (
    <FavoritesProvider>
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
              error={error}
            />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              gamesData={gamesData}
            />
            <FavoritesList />
          </>
        )}
      </div>
    </FavoritesProvider>
  );
}

export default App;
