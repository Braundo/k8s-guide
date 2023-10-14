document.addEventListener("DOMContentLoaded", function() {
    // Load the sidebar state from localStorage
    const savedSidebarState = JSON.parse(localStorage.getItem("sidebarState") || "{}");
  
    for (const [sectionId, isExpanded] of Object.entries(savedSidebarState)) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        if (isExpanded) {
          sectionElement.style.display = "block";
        } else {
          sectionElement.style.display = "none";
        }
      }
    }
  });
  
  function toggleCollapse(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement.style.display === "none" || sectionElement.style.display === "") {
      sectionElement.style.display = "block";
    } else {
      sectionElement.style.display = "none";
    }
  
    // Save the sidebar state to localStorage
    const sidebarState = JSON.parse(localStorage.getItem("sidebarState") || "{}");
    sidebarState[sectionId] = sectionElement.style.display === "block";
    localStorage.setItem("sidebarState", JSON.stringify(sidebarState));
  }
  