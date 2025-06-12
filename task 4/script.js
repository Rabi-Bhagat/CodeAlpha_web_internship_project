const songs = [
  {
    title: "On My Way",
    artist: "Alan Walker",
    src: "music/Chaand Baaliyan.mkv"
  },
  {
    title: "Faded",
    artist: "Alan Walker",
    src: "music/KOI SI (Gravero Flip) - AFSANA KHAN.mp4"
  },
  {
    title: "Spectre",
    artist: "Alan Walker",
    src: "spectre.mp3"
  }
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const titleEl = document.getElementById('track-title');
const artistEl = document.getElementById('track-artist');

const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Load song info
function loadSong(index) {
  const song = songs[index];
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
  audio.src = song.src;
}

// Event listeners
playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

prevBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
});

nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
});

// Load the first song on page load
window.addEventListener('DOMContentLoaded', () => {
  loadSong(currentSongIndex);
});
