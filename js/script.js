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

  
    // Scroll to top
    scrollTopButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // TODO: Add search functionality
  });

// Default to dark mode
document.body.classList.add("dark-mode");

function toggleCollapse(id) {
    const element = document.getElementById(id);
    const triangle = element.previousElementSibling.querySelector('.triangle');
    
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
      triangle.style.transform = "rotate(90deg)"; // Rotate triangle
    } else {
      element.style.display = "none";
      triangle.style.transform = "rotate(0deg)"; // Reset rotation
    }
  }
  