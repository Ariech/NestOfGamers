import { Game } from "../interfaces/interfaces";

const unwantedTags = ["nudity", "sexual-content"];

export const filterUnwantedGames = (games: Game[]) => {
  return games.filter((game) => {
    return !game.tags.some((tag: { slug: string }) =>
      unwantedTags.includes(tag.slug)
    );
  });
};

export const getCompleteGames = (
  filteredGames: Game[],
  prefetchedGames: Game[]
) => {
  if (filteredGames.length < 20 && prefetchedGames.length > 0) {
    const neededItems = 20 - filteredGames.length;
    const additionalGames = filterUnwantedGames(prefetchedGames).slice(
      0,
      neededItems
    );

    return [...filteredGames, ...additionalGames];
  }
  return filteredGames;
};
