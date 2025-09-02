const APIKEY =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjM4MGE4NzA4NzdiNThmMGU0NjBhMTdmNmQ4NjY4YiIsIm5iZiI6MTc1NjY0ODQ4Ny45NDgsInN1YiI6IjY4YjQ1NDI3YzQyOTE0NGI2NDNlZmUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PSWHBt2pCFHq2r3Y71HKk0mOIlz6i_SmDtc1LuHHJac";
const BASEURL = "https://image.tmdb.org/t/p/w500";

const container = document.getElementById("container");

function getGenres() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: APIKEY
        }
    };

    return fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(res => res.json())
        .then(res => res.genres)
        .catch(err => console.error(err));

}

function getData() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: APIKEY
        }
    };

    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}



function template(title, poster, description, movieGenreIds) {

    const genreObjects = movieGenreIds.map((g) => genres.find((G) => g === G.id));

    return `
            <div class="col">
                <div class="card shadow-xl border-0 bg-secondary h-100">
                    <img src="${poster}" class="card-img-top" alt="Cover for the movie">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">
                            <span><small>${description}</small></span>
                        <div class="d-flex gap-1 flex-wrap">
                        ${genreObjects.map(g => { return `<span class="badge bg-info text-light">${g.name}</span>` }).join("")}
                        </div>
                        </p>
                    </div>
                </div>
            </div>
    `
}

let genres;
let movies;

async function getAll() {
    genres = await getGenres();
    movies = await getData();

    console.log(genres);
    console.log(movies);
}

async function showData() {
    await getAll();

    movies.forEach(m => {
        container.innerHTML += template(m.title, BASEURL + m.poster_path, m.overview, m.genre_ids)
    });

}

showData();

