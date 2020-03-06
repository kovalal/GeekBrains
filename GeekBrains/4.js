'use strict';
const video = document.querySelector("video");
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const volume = document.querySelector(".volume");
const timing = document.querySelector(".timing");
const currentTimeE1 = document.querySelector(".currentTime");

let progressId = null;
let progressIndentifier = null;
let wasVideoPlaying = null;
pauseBtn.style.display = "none";

window.addEventListener("load", function () {
    timing.min = 0;
    timing.max = video.duration;
    volume.value = video.volume;
    pauseBtn.style.display = 'none';
})

timing.addEventListener("change", function () {
    video.currentTime = timing.value;
    if (wasVideoPlaying) {
        video.play();
        progressIndentifier = setInterval(changeProgress, 100)
    }
})

playBtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        pauseBtn.style.display = "";
        playBtn.style.display = "none";
        wasVideoPlaying = true;
        progressId = setInterval(changeProgress, 10);
    }
});
pauseBtn.addEventListener("click", function () {
    if (!video.paused) {
        video.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "";
        clearInterval(progressId);
    }
});

function changeProgress() {
    currentTimeE1.innerText = video.currentTime;
    timing.value = video.currentTime;
}

volume.addEventListener("change", function () {
    if (!video.paused) {
        video.volume = (volume.value * 0.01);
    }
})
