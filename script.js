
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
