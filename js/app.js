
const catImg = document.querySelector("#cat");
const birdImg = document.querySelector("#bird");
const cowImg = document.querySelector("#cow");
const dogImg = document.querySelector("#dog");
const duckImg = document.querySelector("#duck");
const elephantImg = document.querySelector("#elephant");
const fishImg = document.querySelector("#fish");
const foxImg = document.querySelector("#fox");
const frogImg = document.querySelector("#frog");
const mouseImg = document.querySelector("#mouse");
const sealionImg = document.querySelector("#sealion");
const notCatDiv = document.querySelector("#not-cat");


const catSays = new Audio('../assets/audio/cat.mp3');
const birdSays = new Audio('../assets/audio/bird.mp3');
const cowSays = new Audio('../assets/audio/cow.mp3');
const dogSays = new Audio('../assets/audio/dog.mp3');
const duckSays = new Audio('../assets/audio/duck.mp3');
const elephantSays = new Audio('../assets/audio/elephant.mp3');
const fishSays = new Audio('../assets/audio/fish.mp3');
const foxSays = new Audio('../assets/audio/fox.mp3');
const frogSays = new Audio('../assets/audio/frog.mp3');
const mouseSays = new Audio('../assets/audio/mouse.mp3');
const sealionSays = new Audio('../assets/audio/sealion.mp3');

notCatDiv.addEventListener("click", (event) => {
    if (event.target.id !== "cat") {
        const audioElement = new Audio(`../assets/audio/${event.target.id}.mp3`);
        audioElement.volume = .05;
        audioElement.play();
    }
});

// catImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     catSays.volume = .05;
//     catSays.play();
// });

// birdImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     birdSays.volume = .05;
//     birdSays.play();
// });

// cowImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     cowSays.volume = .05;
//     cowSays.play();
// });

// dogImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     dogSays.volume = .05;
//     dogSays.play();
// });

// duckImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     duckSays.volume = .05;
//     duckSays.play();
// });

// elephantImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     elephantSays.volume = .05;
//     elephantSays.play();
// });

// fishImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     fishSays.volume = .05;
//     fishSays.play();
// });

// foxImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     foxSays.volume = .05;
//     foxSays.play();
// });

// frogImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     frogSays.volume = .05;
//     frogSays.play();
// });

// mouseImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     mouseSays.volume = .05;
//     mouseSays.play();
// });

// sealionImg.addEventListener("click", (event) => {
//     // console.log(event.target);
//     sealionSays.volume = .05;
//     sealionSays.play();
// });
