let count = 0;
let incrementInterval;
let fifaCount = 0;

fetch('https://script.google.com/macros/s/AKfycbwtS-dKkGeR6ihR1Ct_00LyC8WpKQXj84TsDtzWLtY8zqo6q0T7av-qqG0dpbQuQXUI6Q/exec')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (!data || !Array.isArray(data)) {
      throw new Error('Data is not in the expected format');
    }
    const events = data;
    
    for (let i = 0; i < events.length; i++) {
      if (events[i].eventName === "Fifa") {
        fifaCount = events[i].count;
        break;
      }
    }
    console.log("Count for Fifa:", fifaCount);
    // Once you have the count, you can start incrementing
    startIncrementing(fifaCount);
  })
  .catch(error => console.error('Error fetching or processing data:', error));



function increment() {
  count++;
  document.getElementById("counter").innerText = count;
}

function decrement() {
  if (count > 0) {
    count--;
    document.getElementById("counter").innerText = count;
  }
}

function startIncrementing() {
  incrementInterval = setInterval(() => {
    if (count < fifaCount) {
      increment();
    } else {
      clearInterval(incrementInterval);
    }
  }, 10); // Adjust the interval for faster or slower incrementation
}

// When the div is in view, start incrementing
const counterContainer = document.getElementById("counterContainer");
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startIncrementing();
    }
  });
});
observer.observe(counterContainer);
var num1 = 0;
var num2 = 0;
var num3 = 0;
var angle = 0;

function check() {
  num1 += 1;
  if (num1 == 101) {
    num1 = 0;
  }
  num2 += 1;
  if (num2 == 101) {
    num2 = 0;
  }
  num3 += 1;
  if (num3 == 101) {
    num3 = 0;
  }
  angle += 1;
  if (angle == 361) {
    angle = 0;
  }
}

function generateRandomGradient() {
  check();
  const gradientAngle = angle;
  const percentage1 = num1;
  const percentage2 = num2;
  const percentage3 = num3;

  return `linear-gradient(${gradientAngle}deg, #00c0ff ${percentage1}%, #ffffff ${
    percentage1 + percentage2
  }%, #ffcf00 ${percentage1 + percentage2 + percentage3}%)`;
}

// Function to update background gradient every second
function updateBackground() {
  const gradient = generateRandomGradient();
  document.querySelector(".counter-container").style.background = gradient;
  setTimeout(updateBackground, 10);
}
// Call updateBackground initially
updateBackground();

// Set the event date (YYYY-MM-DD)
const eventDate = new Date("2024-04-01").getTime();

// Update the countdown every second
const timer = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the remaining time between now and the event date
  const timeRemaining = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countert").innerHTML = `
    <h1>Countdown to the Event:</h1>
    <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
  `;

  // If the event date is passed, clear the interval and remove the overlay
  if (timeRemaining < 0) {
    clearInterval(timer);
    document.getElementById("overlayt").style.display = "none";
  }
}, 10);

// Close button functionality
document.getElementById("closeBtnt").addEventListener("click", function () {
  clearInterval(timer);
  document.getElementById("overlayt").style.display = "none";
});
