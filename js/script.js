document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const scrollTopButton = document.getElementById("scrollTop");
  
    // Default to dark mode
    document.body.classList.add("dark-mode");
  
    // Dark/Light mode toggle
    darkModeToggle.addEventListener("click", function() {
        if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        darkModeToggle.innerHTML = "☾";  // Moon ASCII for light mode
        } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        darkModeToggle.innerHTML = "☀";  // Sun ASCII for dark mode
        }
    });

    // Make sidebar sections collapsible
    const collapsibles = document.querySelectorAll('.collapsible .toggle');
  collapsibles.forEach((toggle) => {
    toggle.addEventListener('click', function() {
      this.parentElement.classList.toggle('active');
  
  
    // Scroll to top
    scrollTopButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // TODO: Add search functionality
  });

// Default to dark mode
document.body.classList.add("dark-mode");

  