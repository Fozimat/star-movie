class TrendingMovie extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: inline-block;
                   margin-bottom: 20px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
                   margin-left:30px;
                   margin-top: 20px;
                   margin-right:10px;
               }

              
               .img-movie {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .movie-info {
                   padding: 20px;
               }
              
               .movie-info > h2 {
                   font-weight: lighter;
               }
              
               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10;
               }
               
           </style>
           <div class="kotak">
            <img class="img-movie" src="https://image.tmdb.org/t/p/w400/${this._movie.poster_path}" alt="Gambar Film">
            <div class="movie-info">
                <h2>${this._movie.title}</h2>
                <p>Popularitas : ${this._movie.popularity}</p>
                <p>Voting  : ${this._movie.vote_average}</p>
            </div>
           </div>`;
    }
}

customElements.define("trending-movie", TrendingMovie);