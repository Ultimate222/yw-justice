// Store translations for each language
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
        "about-content": "Youth for Women’s Justice (YWJ) is a high school-driven initiative aimed at raising awareness about women’s rights and advocating against violence and discrimination toward women and girls in Fiji. Founded by young leaders passionate about social justice, YWJ seeks to inform, empower, and inspire Fijian women and girls to stand up for their rights, recognize signs of abuse, and access the help they need. By providing valuable resources, connections to local helplines, and real stories from women advocates, YWJ aspires to foster a supportive and informed community where women’s voices are heard and valued.",
        "why-fiji-title": "Why Focus on Fiji?",
        "why-fiji-content": "While women’s rights are a global issue, certain regions face unique social and cultural challenges that hinder gender equality. In Fiji, many women and girls experience violence, harassment, and societal pressures that keep them from recognizing their value and rights. Traditional norms often prevent open discussions about abuse, making it difficult for those affected to seek help or realize that their situation is not acceptable. YWJ recognizes the importance of focusing on these specific cultural contexts and aims to provide resources tailored to the Fijian community’s unique needs, challenges, and language. Additionally, the remoteness of certain Fijian communities can limit access to support networks, legal protections, and crisis services. YWJ wants to bridge this gap by creating a digital platform where women and girls across Fiji can access information, find helplines, and connect with a supportive network that understands their background and struggles.",
        // Add all other keys like this for English...
    },
    fj: {
        "header-title": "Youth For Women's Justice (YWJ)",
        "header-subtitle": "Veivukei na Vosa, Vukei na Kalou",
        "nav-home": "Valenivolavola",
        "nav-about": "Me Baleta keirau",
        "nav-resources": "Ivakadei",
        "nav-inspirations": "Veivukei",
        "nav-contact": "Veitaratara mai",
        "nav-help": "Vukei keda",
        "about-title": "Me baleta YWJ",
        "about-content": "Na YWJ (Youth for Women's Justice) sa vakatulewa ena ivakalesilesi ni ituvatuva ni itinitia ena vakavinakataki ...",  // Add actual translations
        // Continue translating for other sections...
    },
    hi: {
        "header-title": "युवाओं के लिए महिला न्याय (YWJ)",
        "header-subtitle": "आवाजों को सशक्त बनाना, अधिकारों की सुरक्षा करना",
        "nav-home": "घर",
        "nav-about": "हमारे बारे में",
        "nav-resources": "संसाधन",
        "nav-inspirations": "प्रेरणा",
        "nav-contact": "संपर्क करें",
        "nav-help": "मदद प्राप्त करें",
        "about-title": "YWJ के बारे में",
        "about-content": "YWJ एक छात्र संचालित पहल है जो महिलाओं के अधिकारों के बारे में जागरूकता बढ़ाने और महिलाओं और लड़कियों के खिलाफ हिंसा और भेदभाव का विरोध करने के लिए समर्पित है। ...", // Translate this section
        // Continue translating for other sections...
    }
};

// Function to change language
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Function to toggle collapsible sections
function toggleContent(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}
// Add your previous animations or effects here
document.querySelectorAll('.poster').forEach(poster => {
    poster.addEventListener('mouseover', () => {
        poster.classList.add('animate');  // Example: adding an animation class
    });
    poster.addEventListener('mouseout', () => {
        poster.classList.remove('animate');  // Remove the animation class on mouse out
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Language switcher
    const changeLanguage = (lang) => {
        // Logic to change language content
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
    };

    // Add event listeners to all collapsible titles
    const collapsibleTitles = document.querySelectorAll('.collapsible-title');
    collapsibleTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = title.nextElementSibling;
            const arrow = title.querySelector('.arrow');

            // Toggle the collapsible content
            content.classList.toggle('active');
            
            // Spin the arrow 180 degrees
            if (content.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });
});
