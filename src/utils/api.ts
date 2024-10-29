export const fetchGamesData = async (
  orderingParam: string,
  pageNumber: number,
  searchValue: string
) => {
  const response = await fetch(
    `/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&ordering=${orderingParam}&metacritic=80,100&page=${pageNumber}&search=${searchValue}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data;
};
