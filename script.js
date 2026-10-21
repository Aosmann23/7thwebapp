// ==========================================================================
// Sidebar UI Logic
// ==========================================================================

let feedbackSidebar = document.getElementById("feedback-sidebar");
let sidebarOverlay = document.getElementById("sidebar-overlay");
let closeSidebarBtn = document.getElementById("close-sidebar");

// Grab all elements designed to open the sidebar (Nav link, Hero button, Floating button)
let openSidebarButtons = document.querySelectorAll(".open-sidebar");

// Function to open the sidebar
function openSidebar(event) {
    event.preventDefault(); // Prevents links from jumping to the top of the page
    feedbackSidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
}

// Function to close the sidebar
function closeSidebar() {
    feedbackSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
}

// Attach click events to all "open" buttons
for (let i = 0; i < openSidebarButtons.length; i++) {
    openSidebarButtons[i].addEventListener("click", openSidebar);
}

// Attach click events to close the sidebar
closeSidebarBtn.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);


// ==========================================================================
// Contact Form Logic
// ==========================================================================

let contactForm = document.getElementById("contact-form");
let formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        
        // Prevent page refresh
        event.preventDefault();
        
        // Retrieve visitor name
        let visitorName = document.getElementById("visitor-name").value;
        
        // Inject success message
        formStatus.innerHTML = "Thank you, " + visitorName + "! Your message has been successfully sent.";
        formStatus.style.color = "#16a34a"; 
        
        // Clear the form fields
        contactForm.reset();
        
        // Optional: Automatically close the sidebar after 3 seconds
        setTimeout(closeSidebar, 3000);
    });
}

// ==========================================================================
// Slideshow Logic (Hobbies Section)
// ==========================================================================

let currentSlideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showNextSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    
    slides[currentSlideIndex].classList.add("active");
}

if (slides.length > 0) {
    setInterval(showNextSlide, 5000);
}
