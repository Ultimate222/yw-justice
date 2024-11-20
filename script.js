// Shrinking and Disappearing Header on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 10) { // Adjust threshold for shrinking
        header.classList.add("shrunk");
        header.classList.remove("large");
    } else {
        header.classList.add("large");
        header.classList.remove("shrunk");
    }
});


// Function to apply Google Translate dynamically
function translatePage(languageCode) {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                includedLanguages: 'en,fj,hi',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        );

        // Set the selected language using Google's API
        const translateDropdown = document.querySelector('.goog-te-combo');
        if (translateDropdown) {
            translateDropdown.value = languageCode;
            translateDropdown.dispatchEvent(new Event('change'));
        }
    };
}

// Event listeners for language buttons
document.getElementById('english').addEventListener('click', () => translatePage('en'));
document.getElementById('fijian').addEventListener('click', () => translatePage('fj'));
document.getElementById('hindi').addEventListener('click', () => translatePage('hi'));

// Handle Collapsible Sections
function toggleContent(element) {
    const section = element.parentElement;
    section.classList.toggle("open");
}

// Language Buttons to Simulate Page Refresh
document.getElementById("english").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("fijian").addEventListener("click", () => {
    window.location.href = "index_fj.html";
});

document.getElementById("hindi").addEventListener("click", () => {
    window.location.href = "index_hi.html";
});

// Smooth Scroll Fix for Laggy Scrolling
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
// Collapsible Section Functionality
function toggleContent(element) {
    const section = element.parentElement; // Get the parent collapsible section
    const content = section.querySelector(".collapsible-content");

    // Toggle the 'open' class
    section.classList.toggle("open");

    // Adjust max-height and padding for animation
    if (section.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to full height
        content.style.padding = "10px";
    } else {
        content.style.maxHeight = null; // Collapse
        content.style.padding = "0";
    }
}

// Language Translation Functionality
const translations = {
    en: {
        about: `
            <b>Youth for Women’s Justice (YWJ)</b> is a high school-driven initiative aimed at raising awareness about women’s rights 
            and advocating against violence and discrimination toward women and girls in Fiji. YWJ aims to inform, empower, and inspire.
        `,
        whyFiji: `
            Fiji faces unique challenges in combating gender-based violence due to cultural and societal norms. YWJ aims to empower women 
            and bridge gaps in support services.
        `,
        coreValues: `
            <b>Empowerment:</b> Helping women recognize their worth.<br>
            <b>Awareness:</b> Educating communities about women's rights.<br>
            <b>Advocacy:</b> Advocating for systemic changes to reduce violence.
        `,
        purpose: `
            The purpose of YWJ is to educate and support women and girls in Fiji regarding their rights and provide resources to combat gender-based violence.
        `,
        youCanHelp: `
            <b>Spread Awareness:</b> Share our resources with your community.<br>
            <b>Volunteer:</b> Support our campaigns, assist with events.<br>
            <b>Donate:</b> Contribute funds or supplies to support our efforts in Fiji.
        `
    },
    fj: {
        about: `
            <b>Matavakawai Ni Lewe Ni Matanitu o Teitei (YWJ)</b> e dua na cakacaka me baleta na vakadinadina kei na dodonu ni marama kei na goneyalewa e Viti.
        `,
        whyFiji: `
            Na dodonu ni marama e dua na isau ni vuravura taucoko. YWJ e vakavuna na veivakaukauwataki ena itikotiko kei na gauna.
        `,
        coreValues: `
            <b>Veivakaukauwataki:</b> Me kila na marama kei na goneyalewa na nodra yavu dodonu.<br>
            <b>Vakadinadina:</b> Me vakaraitaki na ka dina.<br>
            <b>Vakadeitaki:</b> Na cakacaka vata e na taqomaka na dodonu ni marama.
        `,
        purpose: `
            YWJ e sa nodra inaki me vakabibitaka na vakadodonu ni marama kei na veivuke vei ira e na gauna dredre.
        `,
        youCanHelp: `
            <b>Wasea na itukutuku:</b> Wasea na itukutuku kei na ivakarau vou.<br>
            <b>Tokoni:</b> Dau tokona na veiqaravi.<br>
            <b>Soli:</b> Solia na yalo kei na ilavo.
        `
    },
    hi: {
        about: `
            <b>महिलाओं के लिए न्याय (YWJ)</b> महिलाओं और लड़कियों के अधिकारों के लिए एक हाई-स्कूल-चालित पहल है।
        `,
        whyFiji: `
            फिजी की महिलाओं को अद्वितीय चुनौतियों का सामना करना पड़ता है। YWJ उन्हें समर्थन और संसाधन प्रदान करता है।
        `,
        coreValues: `
            <b>सशक्तिकरण:</b> महिलाओं को उनके अधिकारों के बारे में शिक्षित करना।<br>
            <b>जागरूकता:</b> बदलाव लाने के लिए शिक्षा आवश्यक है।<br>
            <b>वकालत:</b> महिलाओं के समर्थन के लिए प्रणालीगत बदलाव।
        `,
        purpose: `
            YWJ का उद्देश्य महिलाओं और लड़कियों को उनके अधिकारों के बारे में जागरूक करना और लैंगिक हिंसा से लड़ने के लिए संसाधन प्रदान करना है।
        `,
        youCanHelp: `
            <b>जागरूकता फैलाएं:</b> हमारे संसाधनों को साझा करें।<br>
            <b>स्वयंसेवा:</b> स्थानीय आयोजनों में शामिल हों।<br>
            <b>दान करें:</b> फंडिंग और आपूर्ति प्रदान करें।
        `
    }
};

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
