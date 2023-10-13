document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const scrollTopButton = document.getElementById("scrollTop");
  
    // Default to dark mode
    document.body.classList.add("dark-mode");
  
    // Dark/Light mode toggle
// Dark/Light mode toggle
darkModeToggle.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      darkModeToggle.innerHTML = "&#127769;";  // Moon icon for light mode
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      darkModeToggle.innerHTML = "&#9728;";  // Sun icon for dark mode
    }
  });
  
  
    // Scroll to top
    scrollTopButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // TODO: Add search functionality
  });

// Default to dark mode
document.body.classList.add("dark-mode");

  