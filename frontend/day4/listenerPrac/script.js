const div = document.getElementById("maindiv");
const phrase = document.getElementById("phrase");
const phrases = [
    "The sky is the limit.",
    "Keep moving forward.",
    "Code, eat, sleep, repeat.",
    "Dream big, work hard.",
    "Stay curious.",
    "Every day is a new chance.",
    "Think different.",
    "Better late than never.",
    "Simplicity is the ultimate sophistication.",
    "Great things take time."
];

let flipped = false;

div.addEventListener('click', function() {
    if (!flipped) {
        div.classList.add("flip");
        div.classList.remove("unflip");
        flipped = true;

    } else {
        div.classList.add("unflip");
        div.classList.remove("flip");
        flipped = false;

    }

    const index = Math.floor(Math.random() * phrases.length);
    phrase.innerText = phrases[index];

});
