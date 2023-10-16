// Function to toggle section expansion
function toggleSection(header) {
    const section = header.parentElement;
    const list = section.querySelector('ul');
    const isExpanded = list.style.display === 'block';
    list.style.display = isExpanded ? 'none' : 'block';
    if (isExpanded) {
        header.classList.remove('expanded');
    } else {
        header.classList.add('expanded');
    }
}



// Function to toggle dark/light mode
function toggleMode() {
    const body = document.body;
    const modeToggleBtn = document.getElementById('mode-toggle');
    const isDarkMode = body.classList.toggle('light-mode');
    modeToggleBtn.innerHTML = isDarkMode ? '☾' : '☀';
}

// Function to handle search input
function searchFunction() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const dropdown = document.getElementById('search-dropdown');
    dropdown.innerHTML = '';  // Clear previous search results
    if (!filter) {
        dropdown.style.display = 'none';
        return;
    }
    // For simplicity, search is done on the section headers in the sidebar
    const sections = document.querySelectorAll('#sidebar section h2');
    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(filter)) {
            const item = document.createElement('div');
            item.innerText = section.innerText;
            dropdown.appendChild(item);
        }
    });
    dropdown.style.display = 'block';
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to load sidebar from sidebar.html
function loadSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            const sidebar = document.getElementById('sidebar');
            const mobileMenu = document.getElementById('mobile-menu');
            sidebar.innerHTML = data;
            mobileMenu.innerHTML = data;  // Populate mobile menu with the same content
        });
}

// Function to toggle sidebar and mobile menu
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (window.innerWidth <= 768) {  // Check if in mobile view
        mobileMenu.classList.toggle('open');
        if (hamburgerMenu.classList.contains('x')) {
            hamburgerMenu.classList.remove('x');
            hamburgerMenu.innerHTML = "☰";  // Set content to hamburger icon
        } else {
            hamburgerMenu.classList.add('x');
            hamburgerMenu.innerHTML = "✕";  // Set content to X icon
        }
    } else {
        sidebar.classList.toggle('open');
    }
}





// Event listener to toggle sidebar on hamburger menu click (mobile view)
const hamburgerMenu = document.getElementById('hamburger-menu');
if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', toggleSidebar);
}


// Load sidebar on page load
window.onload = loadSidebar;
