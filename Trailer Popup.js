const btnEl = document.querySelector(".btn");
const CloseBtn= document.querySelector(".close-btn");
const trailerContainer = document.querySelector(".trailer-container");
const videoEL = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active");

});

CloseBtn.addEventListener("click", ()=>{
    trailerContainer.classList.add("active");
    videoEL.pause();
    videoEL.currentTime = 0;
});