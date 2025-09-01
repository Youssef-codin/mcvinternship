const container = document.getElementById("container");

const APIKEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjM4MGE4NzA4NzdiNThmMGU0NjBhMTdmNmQ4NjY4YiIsIm5iZiI6MTc1NjY0ODQ4Ny45NDgsInN1YiI6IjY4YjQ1NDI3YzQyOTE0NGI2NDNlZmUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PSWHBt2pCFHq2r3Y71HKk0mOIlz6i_SmDtc1LuHHJac";
const BASEURL = "https://image.tmdb.org/t/p/w500";

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
        .catch(err => console.error(err));
}

function template(title, poster, description, genre) {
    return `
            <div class="col">
                <div class="card shadow-xl border-0 bg-secondary h-100">
                    <img src="${poster}" class="card-img-top" alt="Cover for the movie">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">
                            <span><small>${description}</small></span>
                        <div class="d-flex gap-1 flex-wrap">
                            ${genre.map(g => `<span class="badge bg-info text-light animated">${g}</span>`).join("")}
                        </div>
                        </p>
                    </div>
                </div>
            </div>
    `
}

function showData() {
    getData().then(data => {
        data.results.forEach(d => {
            console.log(d)
            container.innerHTML += template(d.title, BASEURL + d.poster_path, d.overview, [])

        });
    });
}

showData();

