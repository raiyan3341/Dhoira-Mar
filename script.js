let mairIcon = document.getElementById("mair-icon");
let mainImage = document.getElementById("main-image");
let stickerContainer = document.getElementById("sticker-container");
let scoreElements = document.querySelectorAll(".score-count");
let doneButton = document.querySelector("button");

// Create the modal HTML and add it to the body
const modalHTML = `
    <div id="modal-container" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center backdrop-blur hidden z-50">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96 md:w-180">
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
    // Increment the score
    scoreElements.forEach(function(element) {
        let currentScore = parseInt(element.innerText);
        element.innerText = currentScore + 1;
    });

    // Create and animate the shoe sticker
    createShoeSticker();
});

function createShoeSticker() {
    const shoeSticker = document.createElement("img");
    shoeSticker.src = "juta.png"; // Replace 'juta.png' with the actual path to your shoe sticker image
    shoeSticker.className = "absolute transition-all duration-300 ease-out transform";
    shoeSticker.style.width = "100px";
    shoeSticker.style.height = "auto";
    shoeSticker.style.opacity = "0";

    // Set the sticker's initial position and rotation to the center
    shoeSticker.style.left = `calc(47% - 20px)`; // 20px is half the width of the sticker
    shoeSticker.style.top = `calc(45% - 20px)`; // 20px is half the height of the sticker
    shoeSticker.style.transform = `scale(0.5) rotate(0deg)`;

    // Append to the container
    stickerContainer.appendChild(shoeSticker);

    // Animate the sticker after a slight delay
    setTimeout(() => {
        shoeSticker.style.opacity = "1";
        shoeSticker.style.transform = `scale(1) rotate(0deg)`;
    }, 10); // Small delay to trigger the transition

    // Remove the sticker after a short duration to clean up the DOM
    setTimeout(() => {
        shoeSticker.style.opacity = "0";
        setTimeout(() => {
            shoeSticker.remove();
        }, 300); // Wait for the fade-out transition to complete
    }, 1000); // Sticker visible for 1 second
}

// New functionality for the "DONE" button click
doneButton.addEventListener("click", function() {
    // Get the score from one of the score elements (both are the same)
    let finalScore = document.querySelector(".score-count").innerText;
    
    // Update the score in the modal
    finalScoreSpan.innerText = finalScore;
    
    // Show the modal
    modalContainer.classList.remove("hidden");
});

// New functionality for the "Close" button click
closeModalButton.addEventListener("click", function() {
    modalContainer.classList.add("hidden");
});