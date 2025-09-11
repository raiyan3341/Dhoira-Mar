// ----- Login -----
const loginPage = document.getElementById("login-page");
const gamePage = document.getElementById("game-page");
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");
const playerName = document.getElementById("player-name");

const correctPassword = "1122";

loginBtn.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    const pass = passwordInput.value;

    if (name && pass === correctPassword) {
        loginPage.classList.add("hidden");
        gamePage.classList.remove("hidden");
        playerName.innerText = name;
        loginError.classList.add("hidden");
    } else {
        loginError.classList.remove("hidden");
    }
});

// ----- Game -----
const mairIcon = document.getElementById("mair-icon");
const stickerContainer = document.getElementById("sticker-container");
const scoreElements = document.querySelectorAll(".score-count");
const doneButton = document.getElementById("done-btn");
const modalContainer = document.getElementById("modal-container");
const closeModalButton = document.getElementById("close-modal-button");
const finalScoreSpan = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");

let score = 0;

mairIcon.addEventListener("click", () => {
    score++;
    scoreElements.forEach(el => {
        el.innerText = score;
        el.style.transform = "scale(1.3)";
        setTimeout(() => el.style.transform = "scale(1)", 200);
    });
    addSticker();
});

// ----- Animated sticker with number at random position -----
function addSticker() {
    const wrapper = document.createElement("div");
    wrapper.className = "absolute flex items-center justify-center";
    wrapper.style.opacity = "0";

    // Random position within the container (10% to 80%)
    const left = Math.random() * 70 + 10;
    const top = Math.random() * 70 + 10;
    wrapper.style.left = left + "%";
    wrapper.style.top = top + "%";
    wrapper.style.transform = "translate(-50%, -50%) scale(0.5)";
    
    // Shoe image
    const img = document.createElement("img");
    img.src = "juta.png"; // Make sure path is correct
    img.style.width = "60px";
    img.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    // Number overlay
    const number = document.createElement("span");
    number.innerText = score;
    number.className = "text-red-700 font-bold absolute";
    number.style.top = "50%";
    number.style.left = "50%";
    number.style.transform = "translate(-50%, -50%)";
    number.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    wrapper.appendChild(img);
    wrapper.appendChild(number);
    stickerContainer.appendChild(wrapper);

    // Animate in
    setTimeout(() => {
        wrapper.style.opacity = "1";
        wrapper.style.transform = "translate(-50%, -50%) scale(1.5)";
    }, 10);

    // Animate fade out and remove
    setTimeout(() => {
        wrapper.style.opacity = "0";
        wrapper.style.transform = "translate(-50%, -50%) scale(0.5)";
        setTimeout(() => wrapper.remove(), 500);
    }, 800);
}

// ----- DONE & modal -----
doneButton.addEventListener("click", () => {
    finalScoreSpan.innerText = score;
    modalContainer.classList.remove("hidden");
});

closeModalButton.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
});

restartButton.addEventListener("click", () => {
    score = 0;
    scoreElements.forEach(el => el.innerText = 0);
    stickerContainer.innerHTML = "";
    modalContainer.classList.add("hidden");
});
