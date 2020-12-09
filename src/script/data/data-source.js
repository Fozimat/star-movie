const apiKey = "70cbbdd34806291cf70ec7f9cf3e1ee8";

class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan`);
                }
            })
    }
    static trendingMovie() {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1
        `)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`Tidak ada film yang trending sekarang`);
                }
            })
    }
}

export default DataSource;