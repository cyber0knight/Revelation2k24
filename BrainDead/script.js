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
