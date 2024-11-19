// Object containing translations for English, Fijian, and Hindi
const translations = {
    en: {
        "header-title": "Youth for Women’s Justice (YWJ)",
        "header-subtitle": "Empowering Voices, Protecting Rights",
        "home": "Home",
        "about": "About Us",
        "resources": "Resources",
        "inspirations": "Inspirations",
        "contact": "Contact Us",
        "help": "Get Help",
        "about-title": "About YWJ",
        "about-content": `<b>Youth for Women’s Justice (YWJ)</b> is a high school-driven initiative aimed at raising awareness about women’s rights and advocating against violence and discrimination toward women and girls in Fiji. Founded by young leaders passionate about social justice, YWJ seeks to inform, empower, and inspire Fijian women and girls to stand up for their rights, recognize signs of abuse, and access the help they need. By providing valuable resources, connections to local helplines, and real stories from women advocates, YWJ aspires to foster a supportive and informed community where women’s voices are heard and valued.`,
        "why-fiji-title": "Why Focus on Fiji?",
        "why-fiji-content": `While women’s rights are a global issue, certain regions face unique social and cultural challenges that hinder gender equality. In Fiji, many women and girls experience violence, harassment, and societal pressures that keep them from recognizing their value and rights. Traditional norms often prevent open discussions about abuse, making it difficult for those affected to seek help or realize that their situation is not acceptable. YWJ recognizes the importance of focusing on these specific cultural contexts and aims to provide resources tailored to the Fijian community’s unique needs, challenges, and language.`,
        "core-values-title": "Core Values",
        "core-values-content": `<b>Empowerment:</b> We believe that every woman and girl deserves to know her worth and rights.<br>
            <b>Awareness:</b> Education and awareness are crucial for social change.<br>
            <b>Advocacy:</b> Standing up for women’s rights requires collective action.`,
        "gallery-title": "Gallery",
        "footer": "YWJ © 2024 | Follow us on: Facebook Twitter Instagram"
    },
    fj: {
        "header-title": "Matavakawai Ni Lewe Ni Matanitu o Teitei (YWJ)",
        "header-subtitle": "Vakadinadina Na Domoni, Taqomaka na Dodonu",
        "home": "Vale",
        "about": "Mabula Kei Keda",
        "resources": "Veivakaukauwataki",
        "inspirations": "Vakurabuitaki",
        "contact": "Veitaratara",
        "help": "Kerea Na Veivuke",
        "about-title": "Mabula Kei YWJ",
        "about-content": `<b>Matavakawai Ni Lewe Ni Matanitu o Teitei (YWJ)</b> e dua na cakacaka sa vakayacori mai na koronivuli e na veiqaravi me baleta na vakadinadina kei na dodonu ni marama kei na goneyalewa e na Viti. Na noda inaki sai koya me vakavinakataka, vakaduri, kei na vakalewa na bula ni marama kei na goneyalewa Fijian.`,
        "why-fiji-title": "Na Vuna Me Cakacaka Vakalevu Kina ena Viti?",
        "why-fiji-content": `Na dodonu ni marama e dua na isau ni vuravura taucoko, ia e so na vanua e na Viti e rawa ni tara vakalevu na leqa vakavakaduika kei na bula veiyacovi. Na veiqaravi e YWJ e sa na veitauri vakatulewa ena vakatauca na yavu ni veivakaukauwataki kei na ivakarau me yaga ki na nodrau bula na marama kei na goneyalewa e na Viti.`,
        "core-values-title": "Na Yavu Levu ni YWJ",
        "core-values-content": `<b>Veivakaukauwataki:</b> Me kila na marama kei na goneyalewa na nodra yavu dodonu.<br>
            <b>Vakadinadina:</b> Me vakaraitaki na ka dina e na nodra vanua kei na itikotiko.<br>
            <b>Vakadeitaki:</b> Na cakacaka vata e na taqomaka na dodonu ni marama.`,
        "gallery-title": "Galala Ni YWJ",
        "footer": "YWJ © 2024 | Muri keda ena: Facebook Twitter Instagram"
    },
    hi: {
        "header-title": "महिला न्याय के लिए युवा (YWJ)",
        "header-subtitle": "आवाज़ें सशक्त करें, अधिकारों की रक्षा करें",
        "home": "होम",
        "about": "हमारे बारे में",
        "resources": "संसाधन",
        "inspirations": "प्रेरणाएँ",
        "contact": "संपर्क करें",
        "help": "मदद पाएं",
        "about-title": "YWJ के बारे में",
        "about-content": `<b>महिला न्याय के लिए युवा (YWJ)</b> महिलाओं और लड़कियों के अधिकारों के बारे में जागरूकता बढ़ाने और उनके खिलाफ हिंसा और भेदभाव के खिलाफ आवाज उठाने के लिए एक स्कूल-चालित पहल है।`,
        "why-fiji-title": "फिजी पर क्यों ध्यान दें?",
        "why-fiji-content": `जबकि महिलाओं के अधिकार वैश्विक मुद्दे हैं, कुछ क्षेत्रों में सामाजिक और सांस्कृतिक चुनौतियों का सामना करना पड़ता है।`,
        "core-values-title": "मुख्य मूल्य",
        "core-values-content": `<b>सशक्तिकरण:</b> हर महिला और लड़की को अपने अधिकारों के बारे में जानने का अधिकार है।<br>
            <b>जागरूकता:</b> सामाजिक परिवर्तन के लिए शिक्षा आवश्यक है।<br>
            <b>संगठन:</b> सामूहिक कार्रवाई अधिकारों की रक्षा करती है।`,
        "gallery-title": "गैलरी",
        "footer": "YWJ © 2024 | हमें फॉलो करें: Facebook Twitter Instagram"
    }
};

// Function to change language dynamically
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
}

// Event listeners for language buttons
document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener("click", () => {
        const language = button.getAttribute("data-lang");
        changeLanguage(language);
    });
});

// Default language
changeLanguage("en");
