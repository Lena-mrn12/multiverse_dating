const persos = [
  { nom: "Rick", img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" },
  { nom: "Morty", img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" },
  { nom: "Summer", img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg" },
  { nom: "Beth", img: "https://rickandmortyapi.com/api/character/avatar/4.jpeg" },
  { nom: "Jerry", img: "https://rickandmortyapi.com/api/character/avatar/5.jpeg" },
  { nom: "Abadango Cluster Princess", img: "https://rickandmortyapi.com/api/character/avatar/6.jpeg" },
  { nom: "Abradolf Lincler", img: "https://rickandmortyapi.com/api/character/avatar/7.jpeg" },
  { nom: "Adjudicator Rick", img: "https://rickandmortyapi.com/api/character/avatar/8.jpeg" },
  { nom: "Agency Director", img: "https://rickandmortyapi.com/api/character/avatar/9.jpeg" },
  { nom: "Alan Rails", img: "https://rickandmortyapi.com/api/character/avatar/10.jpeg" },
  { nom: "Albert Einstein", img: "https://rickandmortyapi.com/api/character/avatar/11.jpeg" },
  { nom: "Alexander", img: "https://rickandmortyapi.com/api/character/avatar/12.jpeg" },
  { nom: "Alien Googah", img: "https://rickandmortyapi.com/api/character/avatar/13.jpeg" },
  { nom: "Alien Morty", img: "https://rickandmortyapi.com/api/character/avatar/14.jpeg" },
  { nom: "Alien Rick", img: "https://rickandmortyapi.com/api/character/avatar/15.jpeg" }
];


let index = 0;
let crushs = [];


function afficherPerso() {
  const card = document.getElementById("card");
  card.querySelector("img").src = persos[index].img;
  card.querySelector(".nom").textContent = persos[index].nom;
}

function afficherCrushs() {
  const div = document.getElementById("crushes");
  div.innerHTML = "";
  for (let c of crushs) {
    let d = document.createElement("div");
    d.className = "crush";
    let img = document.createElement("img");
    img.src = c.img;
    img.alt = c.nom;
    let nom = document.createElement("div");
    nom.textContent = c.nom;
    d.appendChild(img);
    d.appendChild(nom);
    div.appendChild(d);
  }
}


function swipe(direct) {
  if (direct === "droite") {
    if (!crushs.find(c => c.nom === persos[index].nom)) {
      crushs.push(persos[index]);
      afficherCrushs();
    }
   
  } else {
    
  }
  index++;
  if (index >= persos.length) index = 0;
  afficherPerso();
}


document.addEventListener("DOMContentLoaded", function() {
  afficherPerso();
  afficherCrushs();
  let startX = 0;
  const card = document.getElementById("card");
  card.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
  });
  card.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) swipe("droite");
    else if (startX - endX > 50) swipe("gauche");
  });
  document.getElementById("like").onclick = () => swipe("droite");
  document.getElementById("dislike").onclick = () => swipe("gauche");
  document.getElementById("refresh-btn").onclick = function() {
    location.reload();
  };
});


