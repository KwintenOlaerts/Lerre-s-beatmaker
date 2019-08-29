window.addEventListener('load', () => {
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector('.visual')
const colors = [
    "#60d394",
"red",
"purple",
"blue",
"yellow",
"orange",
]
console.log(sounds)

// sound-code
pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
    })
})

// Create function that makes bubbles when click
const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease'
}
});

