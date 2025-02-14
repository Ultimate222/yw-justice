// Shrinking Header on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.classList.add("shrunk");
        header.classList.remove("large");
    } else {
        header.classList.add("large");
        header.classList.remove("shrunk");
    }
});

// Collapsible Section Functionality
function toggleContent(element) {
    const section = element.parentElement;
    const content = section.querySelector(".collapsible-content");
    const arrow = section.querySelector(".arrow");

    // Toggle the 'open' class on the section
    section.classList.toggle("open");

    // If the section is open, expand the content
    if (section.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to full height
        content.style.opacity = 1; // Fade in content
        arrow.style.transform = "rotate(180deg)"; // Rotate arrow
    } else {
        // If the section is closed, collapse the content
        content.style.maxHeight = "0";
        content.style.opacity = 0;
        arrow.style.transform = "rotate(0deg)";
    }
}

// Add event listeners to all collapsible titles
document.querySelectorAll(".collapsible-title").forEach((title) => {
    title.addEventListener("click", () => toggleContent(title));
});



// Function to translate content dynamically
function translatePage(language) {
    document.querySelector("#about-ywj p").innerHTML = translations[language].about;
    document.querySelector("#why-fiji p").innerHTML = translations[language].whyFiji;
    document.querySelector("#core-values ul").innerHTML = translations[language].coreValues;
    document.querySelector("#purpose p").innerHTML = translations[language].purpose;
    document.querySelector("#get-involved ul").innerHTML = translations[language].youCanHelp;
}

// Event Listeners for Language Buttons
document.getElementById("english").addEventListener("click", () => translatePage("en"));
document.getElementById("fijian").addEventListener("click", () => translatePage("fj"));
document.getElementById("hindi").addEventListener("click", () => translatePage("hi"));
