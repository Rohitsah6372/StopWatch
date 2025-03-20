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
