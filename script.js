// Select all elements with the class "slide" and store them in a NodeList
let slides = document.querySelectorAll(".slide");
// Initialize the current slide index to 0
let currentSlide = 0;

/**
 * Function to change the visible slide
 * Hides the current slide and shows the next one
 */
function changeSlide() {
  slides[currentSlide].style.opacity = 0; // Hide the current slide
  currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide (looping back to the first if necessary)
  slides[currentSlide].style.opacity = 1; // Show the new current slide
}

// Automatically change the slide every 3 seconds
setInterval(changeSlide, 3000);

// Initialize the current song index to 0
let currentSong = 0;
// Get the audio element
let audio = document.getElementById("audio");
// Get elements to display song title and artist name
let songTitle = document.getElementById("song-title");
let artistName = document.getElementById("artist-name");
// Get the progress bar element
let progress = document.querySelector(".progress");

// Array of songs with their source, title, and artist
const songs = [
  { src: "/assets/blue.opus", title: "blue", artist: "yung kai" },
  // Add more songs here...
];

/**
 * Function to load and play a song by index
 * @param {number} index - Index of the song in the songs array
 */
function loadSong(index) {
  audio.src = songs[index].src; // Set the audio source
  songTitle.textContent = songs[index].title; // Update the displayed song title
  artistName.textContent = songs[index].artist; // Update the displayed artist name
  audio.play(); // Play the song
}

/**
 * Function to play or pause the audio
 */
function togglePlay() {
  if (audio.paused) {
    audio.play(); // Play if paused
  } else {
    audio.pause(); // Pause if playing
  }
}

/**
 * Function to play the next song in the playlist
 * Loops back to the first song if at the end
 */
function nextSong() {
  currentSong = (currentSong + 1) % songs.length; // Move to the next song
  loadSong(currentSong); // Load and play the new song
}

/**
 * Function to play the previous song in the playlist
 * Loops back to the last song if at the beginning
 */
function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length; // Move to the previous song
  loadSong(currentSong); // Load and play the new song
}

// Update the progress bar as the song plays
audio.ontimeupdate = () => {
  let percent = (audio.currentTime / audio.duration) * 100; // Calculate the progress percentage
  progress.style.width = percent + "%"; // Update the progress bar width
};
