async function returnMovies() {
    const searchResults = document.querySelector(".search-results");
    const input = document.querySelector(".inputfield");
    const movies = await fetch("http://www.omdbapi.com/?apikey=6593b869&s=" + input.value);
    const jsonMovies = await movies.json();
    console.log(jsonMovies)
    for (const movie of jsonMovies.Search) {
        const moviePosterTitleandImg = document.createElement("div");
        const moviePostersBox = document.createElement("img");
        moviePostersBox.src = movie.Poster;
        const movieTitlesBox = document.createElement("h3");
        movieTitlesBox.innerHTML = movie.Title;
        moviePosterTitleandImg.append(moviePostersBox, movieTitlesBox);
        searchResults.append(moviePosterTitleandImg)
        
    }
    
}
searchButton = document.querySelector(".button");
searchButton.addEventListener("click", () => returnMovies())
