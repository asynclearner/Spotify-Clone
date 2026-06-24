const songData = [
  {
    img: "./images/aashiqui.jpg",
    h4: "Aashiqui 2",
    h5: "Mithoon, Ankit Tiwari, Jeet Gaanguli",
    song: "../song/Tum Hi Ho_spotdown.org.mp3",
  },
  {
    img: "./images/sanam.jpg",
    h4: "Sanam Teri Kasam (Original Motion..",
    h5: "Himesh Reshammiya, Sameer Anjaan, Subrat..",
    song: "../song/Sanam Teri Kasam_spotdown.org.mp3",
  },
  {
    img: "./images/finding.jpg",
    h4: "Finding Her",
    h5: "Kushagra, Bharath, Seaheal",
    song: "../song/Finding Her_spotdown.org.mp3",
  },
  {
    img: "./images/ranjhana.jpg",
    h4: "Raanjhan(From Do Patti)",
    h5: "Sachet-Parampara, Parampara Tandon,...",
    song: "../song/Raanjhan (From _Do Patti_)_spotdown.org.mp3",
  },
  {
    img: "./images/arjit.jpg",
    h4: "Ultimate Love Songs - Arijit Singh",
    h5: "Arijit Singh",
    song: "../song/Bekhayali (Arijit Singh Version) [From _Kabir Singh_]_spotdown.org.mp3",
  },
  {
    img: "./images/jawaani.jpg",
    h4: "Yeh Jawaani Hai Deewani",
    h5: "Pritam",
    song: "../song/Balam Pichkari_spotdown.org.mp3",
  },
  {
    img: "./images/raper.jpg",
    h4: "Making Memories",
    h5: "Karan Aujla, IKKy",
    song: "../song/Jee Ni Lagda_spotdown.org.mp3",
  },
  {
    img: "./images/goat.jpg",
    h4: "YOUNG G.O.A.T",
    h5: "Cheema Y, Gur Sidhu",
    song: "../song/Young G.O.A.T_spotdown.org.mp3",
  },
  {
    img: "./images/punjabi.jpg",
    h4: "Sicario",
    h5: "Shubh",
    song: "../song/Aura_spotdown.org.mp3",
  },
];

const popularsongs = document.getElementById("songs");

let currentAudio = null;

songData.forEach((item) => {
  const songElm = document.createElement("div");

  songElm.innerHTML = `
    <div class="aashiqui" style="padding-bottom:30px; cursor:pointer;">
      <img src="${item.img}" alt="${item.h4}">
      <div class="aashiqui-text">
        <h4>${item.h4}</h4>
        <h5>${item.h5}</h5>
      </div>
      <audio src="${item.song}" class="bgAudio"></audio>
    </div>
  `;

  const card = songElm.querySelector(".aashiqui");
  const audio = songElm.querySelector(".bgAudio");

  card.addEventListener("click", () => {
    // Stop previous song
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play clicked song
    audio.currentTime = 0;
    audio.play();

    currentAudio = audio;
  });

  popularsongs.append(songElm);
});