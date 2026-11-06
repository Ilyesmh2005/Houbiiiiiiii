
const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");

if (letterButton && letter) {

    letterButton.addEventListener("click", () => {

        letter.classList.toggle("hidden");

        const isOpen = !letter.classList.contains("hidden");

        letterButton.textContent = isOpen
            ? "Close your letter ♡"
            : "Open your little letter 💌";

        letterButton.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            setTimeout(() => {
                letter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 100);
        }

    });

}
const music = document.getElementById("music");

if (music) {
    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Waiting for user interaction to play music.");
    });

    document.addEventListener("click", () => {
        if (music.paused) {
            music.play().catch(() => {});
        }
    }, { once: true });
}
