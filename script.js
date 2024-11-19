// Handle Collapsible Sections
function toggleContent(element) {
    const section = element.parentElement;
    section.classList.toggle("open");
}

// Translations Object
const translations = {
    en: {
        "header-title": "Youth For Women's Justice (YWJ)",
        "header-subtitle": "Empowering Voices, Protecting Rights",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-resources": "Resources",
        "nav-inspirations": "Inspirations",
        "nav-contact": "Contact Us",
        "about-title": "About YWJ",
        "about-content": "<b>Youth for Women’s Justice (YWJ)</b> is a high school-driven initiative...",
        "why-fiji-title": "Why Focus on Fiji?",
        "why-fiji-content": "Fiji faces unique challenges...",
        "core-values-title": "Core Values",
        "core-values-content": "Empowerment, Awareness, Advocacy...",
        "purpose-title": "Purpose",
        "you-can-help-title": "You Can Help (Get Involved)",
        "footer-content": "&copy; 2024 Youth for Women's Justice. All rights reserved."
    },
    fj: {
        "header-title": "Matavakawai Ni Lewe Ni Matanitu o Teitei (YWJ)",
        "header-subtitle": "Vakadinadina Na Domoni, Taqomaka na Dodonu",
        "nav-home": "Vale",
        "nav-about": "Mabula Kei Keda",
        "nav-resources": "Veivakaukauwataki",
        "nav-inspirations": "Vakurabuitaki",
        "nav-contact": "Veitaratara",
        "about-title": "Mabula Kei YWJ",
        "about-content": "<b>Matavakawai Ni Lewe Ni Matanitu o Teitei (YWJ)</b> e dua na cakacaka...",
        "why-fiji-title": "Na Vuna Me Cakacaka Vakalevu Kina ena Viti?",
        "why-fiji-content": "Na dodonu ni marama e dua na isau ni vuravura...",
        "core-values-title": "Na Yavu Levu ni YWJ",
        "core-values-content": "Veivakaukauwataki, Vakadinadina, Vakadeitaki...",
        "purpose-title": "Noda inaki",
        "you-can-help-title": "Vukea Keitou",
        "footer-content": "&copy; 2024 Matavakawai Ni Lewe Ni Matanitu. Dodonu kece sa taqomaki."
    },
    hi: {
        "header-title": "महिला न्याय के लिए युवा (YWJ)",
        "header-subtitle": "आवाज़ें सशक्त करें, अधिकारों की रक्षा करें",
        "nav-home": "होम",
        "nav-about": "हमारे बारे में",
        "nav-resources": "संसाधन",
        "nav-inspirations": "प्रेरणाएँ",
        "nav-contact": "संपर्क करें",
        "about-title": "YWJ के बारे में",
        "about-content": "<b>महिला न्याय के लिए युवा (YWJ)</b> एक स्कूल-चालित पहल...",
        "why-fiji-title": "फिजी पर क्यों ध्यान दें?",
        "why-fiji-content": "फिजी की सांस्कृतिक और सामाजिक परंपराएँ...",
        "core-values-title": "मुख्य मूल्य",
        "core-values-content": "सशक्तिकरण, जागरूकता, वकालत...",
        "purpose-title": "उद्देश्य",
        "you-can-help-title": "आप मदद कर सकते हैं",
        "footer-content": "&copy; 2024 महिला न्याय के लिए युवा। सभी अधिकार सुरक्षित।"
    }
};

// Change Language Dynamically
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[language] && translations[language][key]) {
            el.innerHTML = translations[language][key];
        }
    });
}

// Event Listeners for Language Buttons
document.querySelectorAll(".language-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        changeLanguage(lang);
    });
});

// Default Language
changeLanguage("en");
