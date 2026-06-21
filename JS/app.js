const songs = document.getElementById("songs");

function slideRight() {
  songs.scrollLeft += 400;
}

function slideLeft() {
  songs.scrollLeft -= 400;
}
const song = document.getElementById("song");

function slideRights() {
  song.scrollLeft += 400;
}

function slideLefts() {
  song.scrollLeft -= 400;
}
const songes = document.getElementById("songes");

function slideRightes() {
  songes.scrollLeft += 400;
}

function slideLeftes() {
  songes.scrollLeft -= 400;
}
const songss = document.getElementById("songss");

function slideRightss() {
  songss.scrollLeft += 400;
}

function slideLeftss() {
  songss.scrollLeft -= 400;
}
const songssS = document.getElementById("songssS");

function slideRightsss() {
  songsss.scrollLeft += 400;
}

function slideLeftsss() {
  songsss.scrollLeft -= 400;
}
const songssss = document.getElementById("songssss");

function slideRightssss() {
  songssss.scrollLeft += 400;
}

function slideLeftssss() {
  songssss.scrollLeft -= 400;
}
const songsssss = document.getElementById("songsssss");

function slideRightsssss() {
  songsssss.scrollLeft += 400;
}

function slideLeftsssss() {
  songsssss.scrollLeft -= 400;
}


document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I") ||
    (event.ctrlKey && event.shiftKey && event.key === "J") ||
    (event.ctrlKey && event.key === "u")
  ) {
    event.preventDefault();
    return false;
  }
});
