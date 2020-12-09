import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");


    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

const trending = () => {
    // Trending film
    const trendingElement = document.querySelector("trending-list");

    const loadTrending = async () => {
        try {
            const result = await DataSource.trendingMovie(trendingElement.value);
            renderTrending(result);
        } catch (message) {
            fallbackTrending(message);
        }
    };

    const renderTrending = results => {
        trendingElement.movies = results;
    };

    const fallbackTrending = message => {
        trendingElement.renderError(message);
    };

    loadTrending();
}

export {
    main,
    trending
};