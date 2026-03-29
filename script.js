const $coin = document.getElementById("coin");
const $faceHeads = document.getElementById("faceHeads");
const $faceTails = document.getElementById("faceTails");
const $coinFaceShadow = document.getElementById("coinFaceShadow");
const $flipButton = document.querySelector("#flipButton");
const $flipResult = document.getElementById("flip_Result");

let $resultsOfHeads = "Heads";
let $resultsOfTails = "Tails";

function resultsOfHeads($resultsOfHeads) {
  $faceHeads.style.transform = "rotateX(360deg)";
  $faceTails.style.transform = "rotateX(180deg)";
}

function resultsOfTails($resultsOfHeads) {
  $faceTails.style.transform = "rotateX(360deg)";
  $faceHeads.style.transform = "rotateX(180deg)";
}

$coin.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    $coin.classList.add("flipCoin");
    $coinFaceShadow.classList.add("scaleShadow");
    tossCoin();
  }
});

function flipCoin() {
  $flipButton.addEventListener("click", () => {
    $coin.classList.add("flipCoin");
    $coinFaceShadow.classList.add("scaleShadow");
  });
  $coin.addEventListener("click", () => {
    $coin.classList.add("flipCoin");
    $coinFaceShadow.classList.add("scaleShadow");
  });
}
flipCoin();

$flipButton.addEventListener("animationend", () => {
  $coin.classList.remove("flipCoin");
  $coinFaceShadow.classList.remove("scaleShadow");
  $flipResult.classList.remove("flipResult");
});
$coin.addEventListener("animationend", () => {
  $coin.classList.remove("flipCoin");
  $coinFaceShadow.classList.remove("scaleShadow");
  $flipResult.classList.remove("flipResult");
});

$flipButton.addEventListener("click", tossCoin);
$coin.addEventListener("click", tossCoin);

function disableButton() {
  $flipButton.style.opacity = "50%";
  $flipButton.style.transition = "ease-out .25s";
  $flipButton.style.pointerEvents = "none";
  $flipResult.style.opacity = "0";
  $flipResult.style.transition = "ease-out 0s";
  $coin.style.pointerEvents = "none";
}

function enableButton() {
  $flipButton.style.opacity = "100%";
  $flipButton.style.transition = "ease-in .25s";
  $flipButton.style.pointerEvents = "all";
  $flipResult.style.opacity = "1";
  $flipResult.style.transition = "ease-in .50s";
  $coin.style.pointerEvents = "all";
}

function tossCoin() {
  const getRandomNumber = Math.floor(Math.random() * 2);
  if (getRandomNumber === 0) {
    resultsOfHeads();
    $flipResult.textContent = $resultsOfHeads;
  } else {
    resultsOfTails();
    $flipResult.textContent = $resultsOfTails;
  }
  disableButton();
  const setButtonTimeout = setTimeout(enableButton, 2000);
  setButtonTimeout;
}
