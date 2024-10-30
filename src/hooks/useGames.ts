import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchGamesData } from "../utils/api";

export function useGames(ordering: string, page: number, searchValue: string) {
  const orderingParam = ordering === "name" ? ordering : `-${ordering}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["games", orderingParam, page, searchValue],
    queryFn: () => fetchGamesData(orderingParam, page, searchValue),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, error };
}
