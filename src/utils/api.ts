export const fetchGamesData = async (
  orderingParam: string,
  pageNumber: number,
  searchValue: string,
  genreParam: string
) => {
  const baseUrl = `/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&ordering=${orderingParam}&metacritic=80,100&page=${pageNumber}&search=${searchValue}`;
  const url = genreParam ? `${baseUrl}&genres=${genreParam}` : baseUrl;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data;
};
