import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchGamesData } from "../utils/api";
import { useEffect } from "react";

export function useGames(ordering: string, page: number) {
  const queryClient = useQueryClient();
  const orderingParam = ordering === "name" ? ordering : `-${ordering}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["games", orderingParam, page],
    queryFn: () => fetchGamesData(orderingParam, page),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (data?.next) {
      queryClient.prefetchQuery({
        queryKey: ["games", orderingParam, page + 1],
        queryFn: () => fetchGamesData(orderingParam, page + 1),
      });
    }
  }, [data, orderingParam, page, queryClient]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return { data, isLoading, error };
}
