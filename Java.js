const API_KEY = 'api_key=bf2df76c9d4d6068c2ec7cd78bc3eaca';
const BASE_URL = 'https://api.themoviedb.org/3';    
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+ API_KEY;

const main = document.getElementById('main')

getMovies(API_URL)

function getMovies(url){

    fetch(url).then( res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    });
}

function showMovies (data){
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie ;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt = "${title}">

            <div class = "movies-info">
                <h3>${title}</h3>
                <span>${vote_average}"</span>
            </div>
        
            <div class = "overview">
                <h3>${overview}</h3>
            </div>
        `
        main.appendChild(movieEl);
    });
}

