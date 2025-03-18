let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}
setInterval(changeSlide, 3000);

let currentSong = 0;
let audio = document.getElementById("audio");
let songTitle = document.getElementById("song-title");
let artistName = document.getElementById("artist-name");
let progress = document.querySelector(".progress");

const songs = [
  { src: "/assets/blue.opus", title: "blue", artist: "yung kai" },
  // Agrega más canciones aquí
];

function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  artistName.textContent = songs[index].artist;
  audio.play();
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}

audio.ontimeupdate = () => {
  let percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
};
