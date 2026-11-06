
const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

letterButton.addEventListener("click", async () => {
    const isOpening = letter.classList.contains("hidden");

    letter.classList.toggle("hidden");

    letterButton.textContent = isOpening
        ? "Close your letter ♡"
        : "Open your little letter 💌";

    letterButton.setAttribute("aria-expanded", isOpening);

    // Start the song when she opens the letter
    if (isOpening && music) {
        music.volume = 0.5;

        try {
            await music.play();
            console.log("Our song is playing ❤️");
        } catch (error) {
            console.log("Music playback failed:", error);
        }
    }

    if (isOpening) {
        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});
