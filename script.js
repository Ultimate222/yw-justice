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
        "nav-help": "Get Help",
        "about-title": "About YWJ",
        "about-content": "Youth for Women’s Justice (YWJ) is a high school-driven initiative aimed at raising awareness about women’s rights and advocating against violence and discrimination toward women and girls in Fiji.",
        "why-fiji-title": "Why Focus on Fiji?",
        "why-fiji-content": "While women’s rights are a global issue, Fiji faces unique challenges such as societal pressures, harassment, and limited access to resources for women and girls. YWJ aims to bridge these gaps.",
        "core-values-title": "Core Values",
        "core-values-content": "Empowerment, Awareness, Advocacy, Inclusivity, Community Support",
        "purpose-title": "Purpose",
        "purpose-content": "The purpose of this site is to educate and support women in Fiji about their rights and combat gender-based violence.",
        "you-can-help-title": "You Can Help",
        "you-can-help-content": "Spread Awareness, Volunteer, Donate or Fundraise, Stay Informed"
    },
    fj: {
        "header-title": "Vakarautaki me Baleti Ira na Marama (YWJ)",
        "header-subtitle": "Vakaukauwataki Na Domodra, Taqomaka Na Dodonu",
        "nav-home": "Vale",
        "nav-about": "Me Baleti Keda",
        "nav-resources": "iYau Me Vukei Keda",
        "nav-inspirations": "Veika Vakauqeti",
        "nav-contact": "Veitaratara",
        "nav-help": "Kerea na Veivuke",
        "about-title": "Me Baleti YWJ",
        "about-content": "Youth for Women’s Justice (YWJ) e dua na cakacaka vakakoronivuli me vakadoudouya na marama kei na goneyalewa e Viti me kila na nodra yaga kei na nodra dodonu.",
        "why-fiji-title": "Na Vuna Me Vakarau Kina E Viti?",
        "why-fiji-content": "Na Viti e dau sotava na bolebole e so me vaka na nodra tabaki vakailavo na marama kei na nodra sega ni kila vinaka na ivakarau me taqomaki kina nodra bula.",
        "core-values-title": "Yavu ni YWJ",
        "core-values-content": "Vakadoudouya, Kila Na iTavi, Veivakaturi, Veidabui, Veitokoni",
        "purpose-title": "iNaki",
        "purpose-content": "Na inaki ni vanua oqo me vukea na marama me ra kila na nodra dodonu kei na tarovi na itovo vakaloloma.",
        "you-can-help-title": "Vakaitavi",
        "you-can-help-content": "Wasea Na iTukutuku, Veivuke Ena Cakacaka Vakaitavi, Soli Yaloka Se iLavo, iTukutuku Yaga"
    },
    hi: {
        "header-title": "महिलाओं के लिए न्याय (YWJ)",
        "header-subtitle": "आवाज़ को सशक्त करें, अधिकारों की रक्षा करें",
        "nav-home": "होम",
        "nav-about": "हमारे बारे में",
        "nav-resources": "संसाधन",
        "nav-inspirations": "प्रेरणाएँ",
        "nav-contact": "संपर्क करें",
        "nav-help": "मदद प्राप्त करें",
        "about-title": "YWJ के बारे में",
        "about-content": "युवा महिलाओं के न्याय (YWJ) एक स्कूल-संचालित पहल है जो महिलाओं के अधिकारों के प्रति जागरूकता बढ़ाने और उनके खिलाफ होने वाली हिंसा को रोकने के लिए काम करता है।",
        "why-fiji-title": "फिजी पर ध्यान क्यों दें?",
        "why-fiji-content": "फिजी में महिलाओं और लड़कियों को अद्वितीय चुनौतियों का सामना करना पड़ता है, जैसे सामाजिक दबाव, उत्पीड़न और संसाधनों की कमी। YWJ इन चुनौतियों से निपटने का प्रयास करता है।",
        "core-values-title": "मुख्य मूल्य",
        "core-values-content": "सशक्तिकरण, जागरूकता, वकालत, समावेशिता, सामुदायिक समर्थन",
        "purpose-title": "उद्देश्य",
        "purpose-content": "इस साइट का उद्देश्य महिलाओं को उनके अधिकारों के बारे में शिक्षित करना और फिजी में लिंग आधारित हिंसा का मुकाबला करना है।",
        "you-can-help-title": "आप मदद कर सकते हैं",
        "you-can-help-content": "जागरूकता फैलाएँ, स्वयंसेवा करें, दान करें या धन जुटाएँ, अपडेट रहें"
    }
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

// Collapsible Toggle Function
function toggleContent(element) {
    const section = element.parentElement;
    section.classList.toggle("open");
}

// Shrink Header on Scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

// Scroll Reveal Animation
function revealOnScroll() {
    const sections = document.querySelectorAll(".collapsible-section, .posters");
    const triggerHeight = window.innerHeight * 0.8;

    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerHeight) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);
