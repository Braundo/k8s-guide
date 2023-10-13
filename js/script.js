document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const scrollTopButton = document.getElementById("scrollTop");
  
    // Default to dark mode
    document.body.classList.add("dark-mode");
  
    // Dark/Light mode toggle
    darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
    });
  
    // Scroll to top
    scrollTopButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // TODO: Add search functionality
  });

// Default to dark mode
document.body.classList.add("dark-mode");

  