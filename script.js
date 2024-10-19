document.getElementById('submitBtn').addEventListener('click', function() {
    const dateInput = document.getElementById('dateInput').value;

    if (dateInput) {
        // Split the input string into day, month, year
        const [day, month, year] = dateInput.split('/').map(Number); // Convert to numbers

        if (day === 20 && month === 10) {
            const inputContainer = document.getElementById('inputContainer');
            const message = inputContainer.querySelector('p');
            const dateField = document.getElementById('dateInput');
            const button = document.getElementById('submitBtn');
            const lightBulb = document.getElementById('lightBulb');

            showCustomAlert("Chính xác !!!");
            // Fly away elements one by one
            setTimeout(() => {
                message.style.animation = 'fly-away 1s ease forwards';
            }, 1900);

            setTimeout(() => {
                dateField.style.animation = 'fly-away 1s ease forwards';
            },  1600);

            setTimeout(() => {
                button.style.animation = 'fly-away 1s ease forwards';
            }, 1300);

            setTimeout(() => {
                inputContainer.style.display = 'none'; // Hide the input container after animations
                lightBulb.style.display = 'block'; // Show the lightbulb after hiding the container
            }, 2500);

        } else {
            showCustomAlert("Chưa đúng ngày rồi (✖╭╮✖)");
        }
    } else {
        showCustomAlert("Chọn ngày đi má !");
    }
});

function showCustomAlert(message) {
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    
    alertMessage.textContent = message;  // Set the custom message
    customAlert.style.display = 'flex';  // Ensure the alert is visible
    customAlert.classList.add('show');   // Trigger fly-down animation

    // Automatically trigger fly-up after 3 seconds
    setTimeout(() => {
        customAlert.style.animation = 'fly-down 1s ease forwards';  // Trigger fly-up animation

        // After the fly-up animation is done, hide the alert
        setTimeout(() => {
            customAlert.style.display = 'none';  // Hide after flying up
            customAlert.classList.remove('show');  // Reset for next time
        }, 500);  // Match the fly-up animation duration
    }, 3000);  // Keep the alert visible for 3 seconds
}


document.getElementById('lightBulb').addEventListener('click', function() {
    console.log("Lightbulb clicked!"); // Debugging log
    const lightBulb = document.getElementById('lightBulb');
    const body = document.body;
    
    // Toggle light bulb on and off
    lightBulb.classList.toggle('active');
    
    // Toggle background color
    if (lightBulb.classList.contains('active')) {
        console.log("Lightbulb is ON"); // Debugging log
        body.classList.add('light-mode');
    } else {
        console.log("Lightbulb is OFF"); // Debugging log
        body.classList.remove('light-mode');
    }
    setTimeout(() => {lightBulb.style.animation = 'fly-away 1s ease forwards'},1000);
    
    setTimeout(() => {
        window.location.href = 'elgato.html'; // Change to the new HTML file
    }, 3000); // Wait a bit longer to ensure the animations finish
});

// Initialize Flatpickr
flatpickr("#dateInput", {
    dateFormat: "d/m/Y",
    onOpen: function(selectedDates, dateStr, instance) {
      // Force the custom cursor on the Flatpickr calendar elements
      const flatpickrCalendar = document.querySelector(".flatpickr-calendar");
      if (flatpickrCalendar) {
        flatpickrCalendar.style.cursor = "url('flowercursorpng.png'), auto";
      }
      
      const flatpickrDays = document.querySelectorAll(".flatpickr-day");
      flatpickrDays.forEach(day => {
        day.style.cursor = "url('flowercursorpng.png'), auto";
      });
      
      const prevNextButtons = document.querySelectorAll(".flatpickr-prev-month, .flatpickr-next-month");
      prevNextButtons.forEach(button => {
        button.style.cursor = "url('flowercursorpng.png'), auto";
      });
    }
  });
  