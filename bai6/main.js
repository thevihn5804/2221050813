let listFilm = [
    {
        id: 1,
        name: "Mua do",
        type: "Phim Chieu Rap",
        banner: "anh/muado.webp",
        trailer: "https://youtu.be/UEqjUBGjvwI?si=5DoBTaTaRpAIZdlU"
    },
    {
        id: 2,
        name: "Conan",
        type: "Phim hoat hinh",
        banner: "anh/conan.jpg",
        trailer: "https://youtu.be/u_77I-MhADI?si=m9WJJ26ThHa6tPbi"
    },
    {
        id: 3,
        name: "John Wick",
        type: "Phim hanh dong",
        banner: "anh/johnwick.jpg",
        trailer: "https://youtu.be/u_77I-MhADI?si=m9WJJ26ThHa6tPbi"
    },
    {
        id: 4,
        name: "Conan",
        type: "Phim hoat hinh",
        banner: "anh/conan.jpg",
        trailer: "https://youtu.be/u_77I-MhADI?si=m9WJJ26ThHa6tPbi"
    },
];
let bannerElement = document.getElementsByClassName("banner")[0];
let filmNationElement = document.getElementsByClassName("tt-nation")[0];
function viewTrailer() {
    let trailerElement = document.getElementsByClassName("trailer")[0];
    bannerElement.style.display = "none";
    trailerElement.style.display = "block";
}
function chooseFilm(filmId) {
    let selectedFilm = listFilm.find(film => film.id === filmId);
    bannerElement.style.backgroundImage = "url" + "('" + selectedFilm.banner + "')";
    filmNationElement.innerText = selectedFilm.nation;
}
