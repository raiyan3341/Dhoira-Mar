let mairIcon = document.getElementById("mair-icon");
let mainImage = document.getElementById("main-image");
let stickerContainer = document.getElementById("sticker-container");
let scoreElements = document.querySelectorAll(".score-count");
let doneButton = document.querySelector("button");

// Keep track of the current sticker count
let stickerCount = 0;

// Create the modal HTML and add it to the body
const modalHTML = `
    <div id="modal-container" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center backdrop-blur hidden z-50">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 class="text-xl font-bold mb-4">CR এর জন্য সম্মান</h2>
            <div class="text-center mb-4">
                <img id="modal-image" src="WhatsApp Image 2025-09-10 at 22.00.39_48a5347c.jpg" alt="Placeholder Image" class="mx-auto w-[300px] h-[310px] rounded-md">
            </div>
            <p class="text-center text-lg font-semibold mb-4">আপনি CR কে  <span id="final-score" class="text-red-600">0</span> বার সম্মান প্রদর্শন করেছেন।</p>
            <div class="flex justify-center">
                <button id="close-modal-button" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Close</button>
            </div>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', modalHTML);

const modalContainer = document.getElementById("modal-container");
const closeModalButton = document.getElementById("close-modal-button");
const finalScoreSpan = document.getElementById("final-score");


// Existing functionality for the mair-icon click
mairIcon.addEventListener("click", function(event) {
    // Increment the score and sticker count
    stickerCount++;
    scoreElements.forEach(function(element) {
        element.innerText = stickerCount;
    });

    // Create and animate the shoe sticker with count
    createShoeStickerWithCount(stickerCount);
});

function createShoeStickerWithCount(count) {
    const stickerWrapper = document.createElement("div");
    stickerWrapper.className = "absolute transition-all duration-500 ease-out transform";
    stickerWrapper.style.opacity = "0";

    const shoeSticker = document.createElement("img");
    shoeSticker.src = "juta.png"; 
    shoeSticker.style.width = "100px";
    shoeSticker.style.height = "auto";

    const countText = document.createElement("span");
    countText.innerText = count;
    countText.className = "absolute font-bold text-3xl drop-shadow-lg z-10";

    const plusIcon = document.createElement("span");
    plusIcon.innerText = "";
    plusIcon.className = "absolute text-green-500 font-bold text-2xl drop-shadow-lg z-10";

    // Position of the entire sticker wrapper
    const horizontalPosition = 50; // 50 is center
    const verticalPosition = 50; // 50 is center
    const stickerSize = 80;
    const offset = stickerSize / 2;

    stickerWrapper.style.left = `calc(${horizontalPosition}% - ${offset}px)`;
    stickerWrapper.style.top = `calc(${verticalPosition}% - ${offset}px)`;

    // Positioning the count and plus icon inside the wrapper
    // The following values are manually adjusted for better visual placement
    countText.style.top = `45%`;
    countText.style.left = `45%`;
    
    plusIcon.style.top = `30%`;
    plusIcon.style.left = `70%`;
    
    // Initial scale and rotation for animation
    stickerWrapper.style.transform = `scale(0.5)`;

    stickerWrapper.appendChild(shoeSticker);
    stickerWrapper.appendChild(countText);
    stickerWrapper.appendChild(plusIcon);
    stickerContainer.appendChild(stickerWrapper);

    // Animate the sticker
    setTimeout(() => {
        stickerWrapper.style.opacity = "1";
        stickerWrapper.style.transform = `scale(1) rotate(0deg)`;
    }, 10);

    // Fade out and remove the sticker
    setTimeout(() => {
        stickerWrapper.style.opacity = "0";
        setTimeout(() => {
            stickerWrapper.remove();
        }, 500); // Wait for fade-out transition
    }, 1000);
}

// New functionality for the "DONE" button click
doneButton.addEventListener("click", function() {
    let finalScore = document.querySelector(".score-count").innerText;
    finalScoreSpan.innerText = finalScore;
    modalContainer.classList.remove("hidden");
});

// New functionality for the "Close" button click
closeModalButton.addEventListener("click", function() {
    modalContainer.classList.add("hidden");
});