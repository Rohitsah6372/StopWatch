# Countdown Timer

A simple JavaScript-based countdown timer that takes input in seconds and converts it into minutes and seconds, updating the UI dynamically every second.

## Features
- Converts input seconds into minutes and seconds.
- Updates the display every second.
- Prevents multiple countdowns from running simultaneously.
- Displays "Time's Up!!!" when the timer reaches zero.

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)

## How It Works
1. Enter the time in seconds in the input field.
2. Click the "Start Timer" button.
3. The countdown will start and update every second.
4. Once the countdown reaches 0, the text "Time's Up!!!" is displayed.
5. The button is disabled while the countdown is running and re-enabled after completion.

## Setup Instructions
1. Clone the repository or copy the provided files.
2. Open `index.html` in a browser.
3. Enter a number in the input field and click the button to start the timer.

## Code Structure
### `script.js`
```javascript
console.log("Hello!!!");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");
  let intervalId;

  btn.addEventListener("click", () => {
    const data = Number(document.getElementById("form-control").value);
    
    if (isNaN(data) || data < 0) {
      output.textContent = "Please enter a valid number!";
      return;
    }

    let minutes = Math.floor(data / 60);
    let seconds = data % 60;

    // Clear previous interval if running
    clearInterval(intervalId);
    btn.disabled = true; // Disable button during countdown

    intervalId = setInterval(() => {
      output.textContent = `${minutes} : ${seconds}`;

      if (minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
        output.textContent = "Time's Up!!!";
        btn.disabled = false; // Enable button after countdown
      } else if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
    }, 1000);
  });
});
```

## Future Enhancements
- Add a pause/resume feature.
- Include styling for a better UI.
- Provide an option to restart the countdown.

## License
This project is open-source and free to use.
