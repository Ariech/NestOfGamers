export const fetchGamesData = async (
  orderingParam: string,
  pageNumber: number
) => {
  const response = await fetch(
    `/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&ordering=${orderingParam}&metacritic=80,100&page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data.results;
};

export const fetchNextPageGames = async (nextPageUrl: string | null) => {
  if (!nextPageUrl) return [];
  const nextPageResponse = await fetch(nextPageUrl);

  if (nextPageResponse.ok) {
    const nextPageData = await nextPageResponse.json();
    return nextPageData.results;
  }
  return [];
};
