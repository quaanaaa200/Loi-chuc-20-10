const messages = [
    "Chúc mừng ngày phụ nữ Việt Nam 20/10!",
    "Cậu đoán đúng ngày rồi tặng cậu bông hoa này nhá!",
    "Chết tớ nhầm =)), không có bông hoa nào cho cậu đâu vì cậu mới là bông hoa đẹp nhất ♡",
    "Thôi thì không có hoa nên cậu nhận tạm tấm thiệp này đi!",
];
const closedLetter = document.querySelector('.closed-letter');
const pointToViewer = document.querySelector('.point-to-viewer');
const messageElement = document.getElementById('message');
const flowerImage = document.querySelector('.flower-image'); // Select the flower image
let messageIndex = 0;
let clickCount = 0; // Count for how many times the flower has been clicked

function typeMessage(message, index = 0) {
    if (index < message.length) {
        messageElement.textContent += message[index];
        setTimeout(() => typeMessage(message, index + 1), 50); // Adjust speed here
    } else {
        // Pause before clearing the message
        if (messageIndex < messages.length - 3) { // Only clear if not the last message
            setTimeout(() => {
                clearMessage();
            }, 1000); // Adjust pause duration before clearing the message
        } else {
            // After the last message is done typing, the flower appears
            if (messageIndex < 2) {
                setTimeout(() => {
                    flowerImage.style.display = 'inline-block'; // Show the flower
                }, 1000); // Adjust to the same duration as pause before clearing the last message
            }
        }
    }
}

function clearMessage(index = messageElement.textContent.length) {
    if (index >= 0) {
        messageElement.textContent = messageElement.textContent.substring(0, index);
        setTimeout(() => clearMessage(index - 1), 50);
    } else {
   
        if (messageIndex < messages.length - 1) {
            messageIndex++;
            typeMessage(messages[messageIndex]);
        }
    }
}
function detectFinalMessage() {
    if (messageIndex === messages.length - 1) {
        console.log("Final message has been typed!");
    }
}
function changeFlowerPosition() {
    if (clickCount < 3) {
        const randomX = Math.random() * (window.innerWidth - flowerImage.clientWidth);
        const randomY = Math.random() * (window.innerHeight - flowerImage.clientHeight);
        flowerImage.style.position = 'absolute'; 
        flowerImage.style.left = `${randomX}px`;
        flowerImage.style.top = `${randomY}px`;

        clickCount++; 


        if (clickCount >= 3) {
            clearMessage(2); 
            flowerImage.style.display = 'none'; 


            setTimeout(() => {
                pointToViewer.classList.add('show'); 
            }, 4000); 

            setTimeout(() => {
                pointToViewer.classList.remove('show'); 
            }, 8000); 
            setTimeout(() => {
                clearMessage(2); 
                console.log(messageIndex);
                setTimeout(()=>{
                    closedLetter.classList.add('show');
                },2000);
            }, 8500); 
            
        }
    }
}

flowerImage.addEventListener('click', changeFlowerPosition);

setTimeout(() => {
    typeMessage(messages[messageIndex]);
}, 2700);
const openedLetter = document.querySelector('.opened-letter'); // Select the opened letter

closedLetter.addEventListener('click', () => {
    closedLetter.style.display = 'none'; // Hide the closed letter
    openedLetter.classList.add('show'); // Show the opened letter with the animation
});


const darkOverlay = document.querySelector('.dark-overlay');
const letterPopup = document.querySelector('.letter-popup');
const largeLetter = document.querySelector('.large-letter'); // Select the large letter image
let letterClosed = false; // Track if letter is closed

openedLetter.addEventListener('click', () => {
    darkOverlay.classList.add('show'); // Show the dark overlay
    letterPopup.classList.add('show'); // Show the letter popup with the large letter
});
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    darkOverlay.classList.remove('show'); // Hide the dark overlay
    letterPopup.classList.remove('show'); // Hide the letter popup
    if (!letterClosed) {
        // Add a class to trigger the letter movement animation
        openedLetter.classList.add('move-to-bottom-left'); // Move opened letter icon
        letterClosed = true; // Mark the letter as closed
        setTimeout(()=>clearMessage(messageIndex),200);
    }
});
const msg = [
    "Thế nhá tớ phải đi đây !",
    "Hẹn 20/10 năm sau gặp lại nhé, bái baii !!!",
    "",
];

const speechBubble = document.querySelector('.chat-bubble'); // The speech bubble element
const speechText = speechBubble.querySelector('.chat-text'); // The text element inside the speech bubble
let msgIndex = 0; // To track the current message
let letterClosedOnce = false; // Track if the letter has been closed
const catImage = document.querySelector('.cat-image');

function displayMessage(message, index = 0) {
    if (index < message.length) {
        speechText.textContent += message[index]; // Add the next character
        setTimeout(() => displayMessage(message, index + 1), 100); // Adjust typing speed here
    } else {
        // Pause before clearing the message
        setTimeout(() => {
            removeMessage(); // Clear the message after displaying
        }, 1000); // Adjust pause duration before clearing the message
    }
}

function removeMessage() {
    const currentText = speechText.textContent;

    function eraseCharacters(index) {
        if (index >= 0) {
            speechText.textContent = currentText.substring(0, index); // Remove the last character
            setTimeout(() => eraseCharacters(index - 1), 50); // Adjust speed for clearing
        } else {
            // Move to the next message
            msgIndex = (msgIndex + 1) % msg.length; // Loop through messages
            displayMessage(msg[msgIndex]); // Start typing the next message
        }
    }

    eraseCharacters(currentText.length); // Start clearing from the end

    // Check if it's the last message and hide the bubble
    if (msgIndex === 0) { // After the last message
        setTimeout(() => {
            speechBubble.style.opacity = '0'; // Fade out effect
            setTimeout(() => {
                speechBubble.style.display = 'none'; // Hide the bubble
                setTimeout(()=>catImage.style.display = 'none',500);
                setTimeout(()=>{
                    displayNewImage();
                },1000);
            }, 500); // Time for the fade-out effect
        }, 10500); // Delay before disappearing
    }
}

// Event listener for closing the letter
document.querySelector('.close-btn').addEventListener('click', () => {
    // Your existing code to close the letter and move it
    // ...

    // Check if the letter has been closed for the first time
    if (!letterClosedOnce) {
        letterClosedOnce = true; // Set the flag to true
        setTimeout(() => {
            displayMessage(msg[msgIndex]); // Start typing the messages
        }, 500); // Delay to ensure the letter closes smoothly before typing
    }
});

// Assuming this function starts typing the first message after opening the letter
setTimeout(() => {
    // You might want to start typing messages here only on first load if needed
}, 1000); // Adjust this delay if necessary
const newImage = document.querySelector('.loichuc');
function displayNewImage() {
    newImage.classList.add('fly-down'); // Add the fade-in class to the new image
    newImage.style.display = 'block'; // Ensure the image is visible before applying animation
}