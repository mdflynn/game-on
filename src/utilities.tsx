import { CleanedFetchData } from "./interfaces";

export const cleanAllGamesFetchData = (data: Array<CleanedFetchData>) => {
  return data.map((game) => {
    return {
      id: game.id,
      slug: game.slug,
      background_image: game.background_image,
      esrb_rating: game.esrb_rating,
      genres: game.genres,
      name: game.name,
      metacritic: game.metacritic,
      parent_platforms: game.parent_platforms,
      released: game.released,
      short_screenshots: game.short_screenshots,
      tags: game.tags,
    };
  });
};
