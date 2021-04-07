type CleanedFetchData = {
    id: number,
    slug: string,
    background_image: string,
    esrb_rating: {id: number, name: string},
    genres: Array<{id: number, name: string, slug: string}>,
    name: string,
    metacritic: number,
    parent_platforms: Array<{id: number, name: string}>,
    released: string,
    short_screenshots: Array<{id: number, image: string}>,
    tags: Array<{id: number, name: string, slug: string, language: string}>
}

export const cleanAllGamesFetchData = (data: Array<CleanedFetchData>) => {
    return data.map(game => {
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
            tags: game.tags
        }
    }) 
}