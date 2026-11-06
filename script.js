
const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

if (letterButton && letter) {
    letterButton.addEventListener("click", async () => {

        letter.classList.toggle("hidden");

        const isOpen = !letter.classList.contains("hidden");

        letterButton.textContent = isOpen
            ? "Close your letter ♡"
            : "Open your little letter 💌";

        letterButton.setAttribute("aria-expanded", isOpen);

        // Start music after her tap
        if (music && music.paused) {
            music.volume = 0.5;

            try {
                await music.play();
            } catch (error) {
                console.log("Music could not start:", error);
            }
        }

        if (isOpen) {
            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}

        if (music.paused) {
            music.play().catch(() => {});
        }
    }, { once: true });
}
