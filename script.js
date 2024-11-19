// Translation Data
const translations = {
    en: {
        "header-title": "Youth For Women's Justice (YWJ)",
        "header-subtitle": "Empowering Voices, Protecting Rights",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-resources": "Resources",
        "nav-inspirations": "Inspirations",
        "nav-contact": "Contact Us",
        "nav-help": "Get Help",
        "about-title": "About YWJ",
        "about-content": "Youth for Women’s Justice (YWJ) is a high school-driven initiative aimed at raising awareness about women’s rights and advocating against violence and discrimination toward women and girls in Fiji.",
        "why-fiji-title": "Why Focus on Fiji?",
        "why-fiji-content": "Fiji faces unique social and cultural challenges that hinder gender equality. Many women and girls experience violence...",
        "core-values-title": "Core Values",
        "core-values-content": "Empowerment: Every woman and girl deserves to know her worth and rights. Awareness: Education and awareness are crucial for social change. Inclusivity: YWJ supports all women, regardless of age, background, or location. Community Support: Together, we are stronger and can drive positive change. Advocacy: Collective action is necessary for women’s rights.",
        "purpose-title": "Purpose",
        "purpose-content": "This site aims to educate and support women and girls in Fiji by providing resources and tools to combat gender-based violence.",
        "get-involved-title": "You Can Help (Get Involved)",
        "get-involved-content": "Spread Awareness: Share our resources. Volunteer: Support campaigns or events. Donate: Help fund initiatives that protect and empower women in Fiji."
    },
    // Add Fijian and Hindi translations similarly
};

// Change Language Function
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Collapsible Sections
function toggleContent(element) {
    const section = element.parentElement;
    const content = section.querySelector(".collapsible-content");
    if (section.classList.contains("active")) {
        section.classList.remove("active");
        content.style.maxHeight = null;
    } else {
        section.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// Header Shrink Animation
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

// Initialize Gallery
function initGallery() {
    const gallery = document.querySelector(".gallery-container");
    if (gallery) {
        gallery.innerHTML = `
            <div class="gallery-item"><img src="image1.jpg" alt="Image 1"></div>
            <div class="gallery-item"><img src="image2.jpg" alt="Image 2"></div>
            <div class="gallery-item"><img src="image3.jpg" alt="Image 3"></div>
            <div class="gallery-item"><img src="image4.jpg" alt="Image 4"></div>
        `;
    }
}

// On Page Load
window.onload = () => {
    initGallery();
};
