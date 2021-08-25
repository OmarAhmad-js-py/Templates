const api_key = "api_key=0a2c754df24f03f4197199045aedf7de";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + api_key;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("main");

GetMovies(API_URL);

function GetMovies(url) {
  fetch(url).then(res =>
    res.json().then(data => {
      console.log(data.results);
    })
  );
}

function showMovies(data) {
  main.innerHTML = ``;

  data.forEach(movie => {
    const { title, poster_path, vote_average, release_date, overview } = movie;
    const movie_EL = document.createElement("div");
    movie_EL.classList.add("movie");
    movie_EL.innerHTML = ` <div class="col-sm-6 col-xs-6">
    <div class="list mb-2">
      <div class="list-header">
        <a  class="list-header-image">
          <img
            src="${IMG_URl + poster_path}" alt"${title}"
          />
        </a>
      </div>
      <div class="list-content">
        <h2>
          <a class="text-black"
            >
            ${title}
          >
        </h2>
        <span class="list-meta">
          <span class="list-meta-item"
            ><i class="fas fa-clock"></i> ${release_date}</span
          >
          <a href="#" class="list-meta-item"
            ><i class="fas fa-star
            " ></i> ${vote_average}</a
          >
        </span>
        <p>
         ${overview}
        </p>
      </div>
    </div>
  </div>
    `;
    main.appendChild(movie_EL);
  });
}
