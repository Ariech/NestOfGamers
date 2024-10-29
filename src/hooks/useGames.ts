import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchGamesData } from "../utils/api";
import { useEffect } from "react";

export function useGames(ordering: string, page: number, searchValue: string) {
  const queryClient = useQueryClient();
  const orderingParam = ordering === "name" ? ordering : `-${ordering}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["games", orderingParam, page, searchValue],
    queryFn: () => fetchGamesData(orderingParam, page, searchValue),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (data?.next) {
      queryClient.prefetchQuery({
        queryKey: ["games", orderingParam, page + 1, searchValue],
        queryFn: () => fetchGamesData(orderingParam, page + 1, searchValue),
      });
    }
  }, [data?.next, orderingParam, page, queryClient, searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return { data, isLoading, error };
}
