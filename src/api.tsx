export const getTwentyRandomGames = () => {
    fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&page=12`)
    .then(response => response.json())
}

// randomize page number