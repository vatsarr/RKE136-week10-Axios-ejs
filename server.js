const axios = require("axios");
const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  let movieId = "800158";
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=95ad7d4eb26fc0b6ce1566fce9ac0b48`;

  axios.get(url).then((response) => {
    let data = response.data;

    let releaseYear = new Date(data.release_date).getFullYear();

    let genresToDisplay = "";
    data.genres.forEach((genre) => {
      genresToDisplay = genresToDisplay + `${genre.name}, `;
    });
    let genres = genresToDisplay.slice(0, -2);

    let poster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;

    let currentYear = new Date().getFullYear();

    res.render("index", {
      dataToRender: data,
      currentYear,
      releaseYear,
      genres,
      poster,
    });
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});
