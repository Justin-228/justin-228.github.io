const words = [
    "Fullstack Developer",
    "Software Engineer",
    "Programmer",
    "Web Developer",
    "Coding Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const pauseAfterType = 1500;

const textElement = document.querySelector(".typewriter-text");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), pauseAfterType);
        }
    } else {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? deletingSpeed : typingSpeed
    );
}

typeEffect();
