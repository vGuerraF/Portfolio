const img1 = document.querySelector("#detetive");

const img2 = document.querySelector("#jokenpo");

const img3 = document.querySelector("#jornada");

const img4 = document.querySelector("#velha");

const img5 = document.querySelector("#interativo");

img1.addEventListener("mouseover", function () {
  if (!img1.src.includes("icons8-detetive.gif")) {
    img1.src = "./assets/images/icons8-detetive.gif";
  } else {
    img1.src = "./assets/images/icons8-detetive-90.png";
  }
});

img1.addEventListener("mouseleave", function () {
  img1.src = "./assets/images/icons8-detetive-90.png";
});

img2.addEventListener("mouseover", function () {
  if (!img2.src.includes("icons8-paper-hand-96.png")) {
    img2.src = "./assets/images/icons8-paper-hand-96.png";
  } else {
    img2.src = "./assets/images/icons8-rock-hand-96.png";
  }
});

img2.addEventListener("mouseleave", function () {
  img2.src = "./assets/images/icons8-rock-hand-96.png";
});

img3.addEventListener("mouseover", function () {
  if (!img3.src.includes("icons8-haltere.gif")) {
    img3.src = "./assets/images/icons8-haltere.gif";
  } else {
    img3.src = "./assets/images/haltercerto.png";
  }
});

img3.addEventListener("mouseleave", function () {
  img3.src = "./assets/images/haltercerto.png";
});

img4.addEventListener("mouseover", function () {
  if (!img4.src.includes("essetictacverde.png")) {
    img4.src = "./assets/images/essetictacverde.png";
  } else {
    img4.src = "./assets/images/essetictac.png";
  }
});

img4.addEventListener("mouseleave", function () {
  img4.src = "./assets/images/essetictac.png";
});

img5.addEventListener("mouseover", function () {
  if (!img5.src.includes("icons8-pokeball-aberto-96.png")) {
    img5.src = "./assets/images/icons8-pokeball-aberto-96.png";
  } else {
    img5.src = "./assets/images/icons8-pokebola-96.png";
  }
});

img5.addEventListener("mouseleave", function () {
  img5.src = "./assets/images/icons8-pokebola-96.png";
});
