// Define translations for each language
const translations = {
    en: {
        title: "Youth for Women's Justice",
        overviewHeading: "Overview",
        overviewText: "This is a website created by high school students to raise awareness about crimes against women in Fiji and to advocate for better rights.",
        missionHeading: "Our Mission",
        missionText: "To support and empower women by providing resources and knowledge to help them seek justice and understand their rights."
    },
    hi: {
        title: "महिलाओं के न्याय के लिए युवा",
        overviewHeading: "सारांश",
        overviewText: "यह वेबसाइट हाई स्कूल के छात्रों द्वारा फिजी में महिलाओं के खिलाफ अपराधों के बारे में जागरूकता बढ़ाने और बेहतर अधिकारों की वकालत करने के लिए बनाई गई है।",
        missionHeading: "हमारा मिशन",
        missionText: "महिलाओं को न्याय पाने और उनके अधिकारों को समझने में मदद करने के लिए संसाधन और ज्ञान प्रदान करके उनका समर्थन और सशक्त बनाना।"
    },
    fj: {
        title: "Tabagone Cakacaka Vakadodonu ena Vuravura ni Marama",
        overviewHeading: "Vakadidike",
        overviewText: "Oqo na mataveilawa e buli vakatabakidua ena vukudra na gonevuli ena koronivuli me vakatetea na itukutuku bibi me baleta na veika ca e sotava na marama e Viti kei na vakasaqarai ni dodonu.",
        missionHeading: "Noda Misioni",
        missionText: "Me vukei ira na marama ena vakarautaki ni ivurevure kei na kilaka me ra kila na nodra dodonu kei na sala era rawa ni rawata kina na dodonu."
    }
};

// Function to change language
function changeLanguage(lang) {
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("overview-heading").textContent = translations[lang].overviewHeading;
    document.getElementById("overview-text").textContent = translations[lang].overviewText;
    document.getElementById("mission-heading").textContent = translations[lang].missionHeading;
    document.getElementById("mission-text").textContent = translations[lang].missionText;
}

