function getRandomTopherGatesColor() {
  const h = Math.floor(Math.random() * 360);
  const s = "100%";
  const l = "60%";
  return "hsl(" + h + "," + s + "," + l + ")";
}
const bodyEl = document.querySelector("body");

function makeBalloon() {
  const tophergatesColor = getRandomTopherGatesColor();
  const top = "calc(100% + " + Math.floor(Math.random() * 51) + "%)";
  const left = Math.floor(Math.random() * 101) + "%";
  const delay = Math.floor(Math.random() * 5000);
  const balloonContainerEl = document.createElement("div");
  balloonContainerEl.style.top = top;
  balloonContainerEl.style.left = left;
  const balloonEl = document.createElement("div");
  balloonEl.style.backgroundColor = tophergatesColor;
  const balloonKnotEl = document.createElement("div");
  balloonKnotEl.style.borderBottom = "16px solid " + tophergatesColor;
  balloonContainerEl.classList.add("balloon-container");
  setTimeout(function () {
    balloonContainerEl.classList.add("animate");
  }, delay);
  balloonEl.classList.add("balloon");
  balloonKnotEl.classList.add("balloon-knot");
  balloonContainerEl.append(balloonEl, balloonKnotEl);
  bodyEl.append(balloonContainerEl);
  balloonContainerEl.addEventListener("transitionend", function () {
    balloonContainerEl.remove();
  });
}

let areBalloonsRunning = false;
function releaseMawbstersBalloons() {
  if (!areBalloonsRunning) {
    areBalloonsRunning = true;
    for (let i = 1; i <= 10; i++) {
      makeBalloon();
    }
    setTimeout(() => {
      areBalloonsRunning = false;
    }, 1000);
  }
}
releaseMawbstersBalloons();
setInterval(releaseMawbstersBalloons, 500);

var isPlaying = false;
var url = window.location + "music.mp3";
console.log("URL: ", url);
var audio = new Audio(url);
function playmusic() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}
window.addEventListener("click", playmusic);
