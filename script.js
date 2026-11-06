
const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

letterButton.addEventListener("click", function () {
    const opening = letter.classList.contains("hidden");

    letter.classList.toggle("hidden", !opening);

    letterButton.textContent = opening
        ? "Close your letter ♡"
        : "Open your little letter 💌";

    letterButton.setAttribute("aria-expanded", opening);

    if (opening) {
        // Play music directly from the button click
        music.volume = 0.5;

        if (music.paused) {
            const playPromise = music.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Music error:", error);
                });
            }
        }

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});
