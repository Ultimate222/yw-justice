// Collapsible Section Functionality
function toggleContent(element) {
    const section = element.parentElement; // Get the parent collapsible section
    section.classList.toggle("open"); // Toggle the 'open' class to expand/collapse content
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
        "about-content": `
            <b>Youth for Women’s Justice (YWJ)</b> is a high school-driven initiative aimed at raising awareness 
            about women’s rights and advocating against violence and discrimination toward women and girls in Fiji. 
            Founded by young leaders passionate about social justice, YWJ seeks to inform, empower, and inspire Fijian 
            women and girls to stand up for their rights, recognize signs of abuse, and access the help they need.
        `,
        "why-fiji-title": "Why Focus on Fiji?",
        "why-fiji-content": `
            Fiji faces unique challenges in combating gender-based violence due to cultural and societal norms. YWJ 
            provides tailored resources to empower women and bridge gaps in support services. Additionally, remote 
            Fijian communities often have limited access to legal protections and crisis support, making this initiative critical.
        `,
        "core-values-title": "Core Values",
        "core-values-content": `
            <b>Empowerment:</b> We believe in empowering women and girls to understand their rights and worth.<br>
            <b>Awareness:</b> Education is the foundation for creating social change and understanding.<br>
            <b>Advocacy:</b> We push for systemic changes to protect and uplift women and girls.<br>
            <b>Inclusivity:</b> Our mission includes all women and girls, regardless of their background.<br>
            <b>Community Support:</b> Building safe spaces for women to connect and support each other is essential.
        `,
        "purpose-title": "Purpose",
        "purpose-content": `
            The purpose of YWJ is to educate and support women and girls in Fiji about their rights while providing 
            resources to combat gender-based violence. By fostering a culture of empowerment and advocacy, we aim to 
            create a safer, more equitable future for all.
        `,
        "you-can-help-title": "You Can Help (Get Involved)",
        "you-can-help-content": `
            <b>Spread Awareness:</b> Share our resources with friends and family to help more women understand their rights.<br>
            <b>Volunteer:</b> Join us to support campaigns, assist with content creation, or help run local events.<br>
            <b>Donate or Fundraise:</b> Support our efforts in Fiji by contributing funds or supplies.<br>
            <b>Stay Informed:</b> Follow us on social media to learn about upcoming events and new resources.
        `,
        "gallery-title": "Gallery",
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
        "about-content": `
            <b>Matavakawai Ni Lewe Ni Matanitu o Teitei (YWJ)</b> e dua na cakacaka sa vakayacori mai na koronivuli ena veiqaravi 
            me baleta na vakadinadina kei na dodonu ni marama kei na goneyalewa e Viti. Na noda inaki sai koya me vakavinakataka, 
            vakaduri, kei na vakalewa na bula ni marama kei na goneyalewa Fijian.
        `,
        "why-fiji-title": "Na Vuna Me Cakacaka Vakalevu Kina ena Viti?",
        "why-fiji-content": `
            Na dodonu ni marama e dua na isau ni vuravura taucoko, ia e so na vanua e na Viti e rawa ni tara vakalevu 
            na leqa vakavakaduika kei na bula veiyacovi. Na veiqaravi e YWJ e sa na veitauri vakatulewa ena vakatauca 
            na yavu ni veivakaukauwataki kei na ivakarau me yaga ki na nodrau bula na marama kei na goneyalewa e na Viti.
        `,
        "core-values-title": "Na Yavu Levu ni YWJ",
        "core-values-content": `
            <b>Veivakaukauwataki:</b> Me kila na marama kei na goneyalewa na nodra yavu dodonu.<br>
            <b>Vakadinadina:</b> Me vakaraitaki na ka dina ena nodra itikotiko.<br>
            <b>Vakadeitaki:</b> Na cakacaka vata ena taqomaka na dodonu ni marama kei na goneyalewa.
        `,
        "purpose-title": "Noda inaki",
        "you-can-help-title": "Vukea Keitou",
        "you-can-help-content": `
            <b>Wasea na iTukutuku:</b> Wasea vei ira tale eso na itukutuku ni veiqaravi oqo.<br>
            <b>Vakayagataki:</b> Tokona na veiqaravi oqo ena veivuke ni tamata yadua.<br>
            <b>Soli Yaloka:</b> Vakaitavi ena nodratou rawata na marama kei na goneyalewa.<br>
            <b>Me Dau Raici:</b> Me dau dikevi na ka vou me baleta na nodratou veiqaravi.
        `,
        "footer-content": "&copy; 2024 Matavakawai Ni Lewe Ni Matanitu. Dodonu kece sa taqomaki."
    }
};

hi: {
    "header-title": "महिलाओं के लिए न्याय (YWJ)",
    "header-subtitle": "आवाज़ें सशक्त करें, अधिकारों की रक्षा करें",
    "nav-home": "होम",
    "nav-about": "हमारे बारे में",
    "nav-resources": "संसाधन",
    "nav-inspirations": "प्रेरणाएँ",
    "nav-contact": "संपर्क करें",
    "about-title": "YWJ के बारे में",
    "about-content": `
        <b>महिलाओं के लिए न्याय (YWJ)</b> महिलाओं और लड़कियों के अधिकारों के लिए एक हाई-स्कूल-चालित पहल है। 
        यह महिलाओं और लड़कियों के प्रति होने वाली हिंसा और भेदभाव के खिलाफ आवाज उठाने के लिए प्रतिबद्ध है। 
        YWJ का उद्देश्य उन्हें सशक्त बनाना है ताकि वे अपने अधिकारों के लिए खड़ी हो सकें और उनके पास सहायता प्राप्त करने के लिए 
        आवश्यक जानकारी और संसाधन हों।
    `,
    "why-fiji-title": "फिजी पर ध्यान क्यों दें?",
    "why-fiji-content": `
        फिजी में महिलाओं को अद्वितीय चुनौतियों का सामना करना पड़ता है, जैसे सांस्कृतिक और सामाजिक दबाव, जो उन्हें उनके अधिकारों 
        और सहायता सेवाओं से दूर रखते हैं। YWJ इन चुनौतियों को संबोधित करने और महिलाओं और लड़कियों के लिए समर्थन 
        सेवाओं तक पहुंचने के लिए आवश्यक उपकरण और जानकारी प्रदान करता है।
    `,
    "core-values-title": "मुख्य मूल्य",
    "core-values-content": `
        <b>सशक्तिकरण:</b> हम महिलाओं और लड़कियों को उनके अधिकार और मूल्य समझने में मदद करते हैं।<br>
        <b>जागरूकता:</b> समाज में बदलाव लाने के लिए शिक्षा आवश्यक है।<br>
        <b>वकालत:</b> महिलाओं और लड़कियों के समर्थन के लिए प्रणालीगत बदलावों की आवश्यकता है।<br>
        <b>समावेशिता:</b> हम सभी महिलाओं और लड़कियों का स्वागत करते हैं, चाहे उनका पृष्ठभूमि कुछ भी हो।<br>
        <b>समुदाय समर्थन:</b> एक ऐसा सुरक्षित स्थान बनाना, जहाँ महिलाएँ एक-दूसरे को सहयोग कर सकें और प्रेरित कर सकें।
    `,
    "purpose-title": "उद्देश्य",
    "purpose-content": `
        इस साइट का उद्देश्य महिलाओं और लड़कियों को उनके अधिकारों के बारे में शिक्षित करना और लैंगिक हिंसा से लड़ने के लिए 
        संसाधन प्रदान करना है। YWJ एक सुरक्षित और समतामूलक भविष्य बनाने के लिए प्रतिबद्ध है।
    `,
    "you-can-help-title": "आप कैसे मदद कर सकते हैं?",
    "you-can-help-content": `
        <b>जागरूकता फैलाएं:</b> हमारे संसाधनों को अपने परिवार और दोस्तों के साथ साझा करें।<br>
        <b>स्वयंसेवा करें:</b> हमारे अभियानों और स्थानीय आयोजनों में शामिल हों।<br>
        <b>दान करें:</b> हमारी फिजी में महिलाओं की मदद के लिए प्रयासों का समर्थन करें।<br>
        <b>अद्यतन रहें:</b> हमारे सोशल मीडिया चैनल को फॉलो करें और हमारे काम के बारे में जानकारी प्राप्त करें।
    `,
    "gallery-title": "गैलरी",
    "footer-content": "&copy; 2024 महिलाओं के लिए न्याय। सभी अधिकार सुरक्षित।"
}


// Language Switching Functionality
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-key");
        if (translations[language] && translations[language][key]) {
            el.innerHTML = translations[language][key];
        }
    });
}

// Event Listeners for Language Buttons
document.querySelectorAll("#language-selector button").forEach((button) => {
    button.addEventListener("click", () => {
        const lang = button.getAttribute("data-lang");
        changeLanguage(lang);
    });
});

// Default Language
changeLanguage("en");
