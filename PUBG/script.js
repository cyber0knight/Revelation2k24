// Function to Display Details //
function openTab(event, tabname) {
  var tablinks = document.querySelectorAll(".tab-links");
  var tabcontents = document.querySelectorAll(".tab-contents");
  
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  
  for (var tabcontent of tabcontents) {
    tabcontent.style.display = "none"; // Hide all tab contents
  }
  
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).style.display = "block"; // Display only the selected tab content
}

  // // Function to change text color dynamically //
  // function changeTextColor() {
  //   var paragraphs = document.querySelectorAll(".dynamic-text");
  //   paragraphs.forEach(function(paragraph) {
  //     var colors = ['#ff0000', '#00ff00', '#0000ff']; // Array of colors
  //     var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
  //     paragraph.style.color = randomColor; // Apply the color to the paragraph
  //   });
  // }

  // // Change text color every 3 seconds
  // setInterval(changeTextColor, 3000);