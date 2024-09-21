// content.js

function startLeetCodeTimer() {
  // Try to find the timer button multiple times until it is found
  const timerInterval = setInterval(() => {
    // Select the SVG icon with the alarm clock
    const timerIcon = document.querySelector('svg[data-icon="alarm-clock"]');

    if (timerIcon) {
      // The parent div of the SVG should be clickable
      const timerButton = timerIcon.closest("div.cursor-pointer");

      if (timerButton) {
        timerButton.click();
        console.log("LeetCode timer started automatically.");
        clearInterval(timerInterval); // Stop trying once the button is found and clicked
      }
    } else {
      console.log("Timer button not found, retrying...");
    }
  }, 500); // Retry every 500ms
}

// Run the function when the page loads
window.addEventListener("load", () => {
  startLeetCodeTimer();
});
