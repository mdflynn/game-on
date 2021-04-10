export type CleanedFetchData = {
    id: number;
    slug: string;
    background_image: string;
    esrb_rating: { id: number; name: string };
    genres: Array<{ id: number; name: string; slug: string }>;
    name: string;
    metacritic: number;
    parent_platforms: Array<{ id: number; name: string }>;
    released: string;
    short_screenshots: Array<{ id: number; image: string }>;
    tags: Array<{ id: number; name: string; slug: string; language: string }>;
  };