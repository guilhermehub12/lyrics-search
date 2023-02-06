import "./css/input.css";
import "./css/style.css";

const form = document.querySelector("form");
const lyricsDiv = document.querySelector("#lyrics");
const lyricsTranslate = document.querySelector("#music");
const API_KEY = "a3cf66532613b01d016dc0a16ab4996d";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const artist = document.querySelector("#artist").value;
  const song = document.querySelector("#song").value;
  const url = `https://api.vagalume.com.br/search.php?art=${artist}&mus=${song}&apikey=${API_KEY}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const lyrics = data.mus[0].text;
      const lyricsTranslated = data.mus[0].translate[0].text;
      lyricsDiv.innerHTML = lyrics;
      lyricsTranslate.innerHTML = lyricsTranslated;
    })
    .catch((error) => {
      lyricsDiv.innerHTML = "Erro ao buscar letra da música.";
      console.error(error);
    });
});
