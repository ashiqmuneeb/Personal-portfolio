const textArray = [
    "Python Full Stack Developer",
    "PHP Full Stack Developer",
];

let index = 0;
let textIndex = 0;

function type() {
    if (index < textArray.length) {
        const currentText = textArray[index];
        const displayText = currentText.slice(0, textIndex++);
        document.getElementById("animated-text").textContent = displayText;

        if (textIndex > currentText.length) {
            textIndex = 0;
            index++;
            setTimeout(() => {
                type(); // Pause before starting the next text
            }, 1000); // Adjust delay before next text starts
        } else {
            setTimeout(type, 100); // Adjust typing speed
        }
    } else {
        index = 0; // Restart the animation
        setTimeout(type, 1000); // Pause before restarting
    }
}

// Start typing effect
type();
