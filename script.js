// Language switching logic
function changeLanguage(language) {
    // First, define the translations object
    const translations = {
        en: {
            'header-title': 'Youth For Women\'s Justice (YWJ)',
            'header-subtitle': 'Empowering Voices, Protecting Rights',
            'nav-home': 'Home',
            'nav-about': 'About Us',
            'nav-resources': 'Resources',
            'nav-inspirations': 'Inspirations',
            'nav-contact': 'Contact Us',
            'nav-help': 'Get Help',
            'about-title': 'About YWJ',
            'about-content': 'Youth for Women’s Justice (YWJ) is a high school-driven initiative aimed at raising awareness about women’s rights and advocating against violence and discrimination toward women and girls in Fiji.',
            'why-fiji-title': 'Why Focus on Fiji?',
            'why-fiji-content': 'YWJ recognizes the importance of focusing on these specific cultural contexts and aims to provide resources tailored to the Fijian community’s unique needs, challenges, and language.',
            'core-values-title': 'Core Values',
            'core-values-content': 'YWJ believes in empowerment, awareness, advocacy, inclusivity, and community support.',
            'purpose-title': 'Purpose',
            'purpose-content': 'The purpose of this site is to educate and support women and girls in Fiji regarding their rights and provide resources to combat gender-based violence.',
            'you-can-help-(get-involved)-title': 'You Can Help (Get Involved)',
            'you-can-help-(get-involved)-content': 'Spread awareness, volunteer, donate, and stay informed to help us fight for women’s rights in Fiji.',
        },
        fj: {
            'header-title': 'Yadra! Youth For Women\'s Justice (YWJ)',
            'header-subtitle': 'Veivakatorocaketaki ni Lavo, Veivukei ni iRairai',
            'nav-home': 'Vale',
            'nav-about': 'Ena iVakamacala',
            'nav-resources': 'iVakamacala',
            'nav-inspirations': 'Vakatuburi',
            'nav-contact': 'Vakatakila Mai',
            'nav-help': 'Veivuke',
            'about-title': 'Ena iVakamacala ni YWJ',
            'about-content': 'Youth for Women’s Justice (YWJ) e dua na veikauyaki ni tamata veisiko e na iYau ni veivakatorocaketaki kei na veivukei ena lavo ni tokitaki kei na ka e rawa ni veivakacalataki ena veiqaravi. O YWJ e na dua na vanua ni veiqaravi ni tamata.',
            'why-fiji-title': 'Na cava me vakayagataki na Fiji?',
            'why-fiji-content': 'Na YWJ e nanuma tiko na ibalebale ni veivakatorocaketaki, mai na veiveisau ni kena, e na mataka ni ni.',
            'core-values-title': 'Na Veika Bibi',
            'core-values-content': 'Na YWJ e maroroya na veivakasalataki, kei na iRairai', 
            'purpose-title': 'iVakamacala',
            'purpose-content': 'The purpose of this site is to educate and support women and girls in Fiji regarding their rights and provide resources to combat gender-based violence.',
            'you-can-help-(get-involved)-title': 'Ko Ni Cakava',
            'you-can-help-(get-involved)-content': 'Spread awareness, volunteer, donate, and stay informed to help us fight for women’s rights in Fiji.',
        },
        hi: {
            'header-title': 'यूथ फॉर वुमेन्स जस्टिस (YWJ)',
            'header-subtitle': 'आवाजों को सशक्त बनाना, अधिकारों की रक्षा करना',
            'nav-home': 'होम',
            'nav-about': 'हमारे बारे में',
            'nav-resources': 'संसाधन',
            'nav-inspirations': 'प्रेरणाएँ',
            'nav-contact': 'संपर्क करें',
            'nav-help': 'मदद प्राप्त करें',
            'about-title': 'YWJ के बारे में',
            'about-content': 'Youth for Women’s Justice (YWJ) एक उच्च विद्यालय-प्रेरित पहल है जिसका उद्देश्य महिलाओं के अधिकारों के बारे में जागरूकता बढ़ाना और महिलाओं और लड़कियों के खिलाफ हिंसा और भेदभाव के खिलाफ आवाज उठाना है।',
            'why-fiji-title': 'फिजी पर ध्यान क्यों?',
            'why-fiji-content': 'YWJ इस तथ्य को पहचानता है कि कुछ क्षेत्रों में विशेष सामाजिक और सांस्कृतिक चुनौतियाँ हैं जो लैंगिक समानता में बाधा डालती हैं।',
            'core-values-title': 'मूल्य',
            'core-values-content': 'YWJ सशक्तिकरण, जागरूकता, वकालत, समावेशन और सामुदायिक समर्थन में विश्वास करता है।',
            'purpose-title': 'उद्देश्य',
            'purpose-content': 'इस साइट का उद्देश्य फिजी में महिलाओं और लड़कियों को उनके अधिकारों के बारे में शिक्षा देना और लिंग आधारित हिंसा से निपटने के लिए संसाधन प्रदान करना है।',
            'you-can-help-(get-involved)-title': 'आप मदद कर सकते हैं (भाग लें)',
            'you-can-help-(get-involved)-content': 'जागरूकता फैलाएं, स्वयंसेवा करें, दान करें और हमें फिजी में महिलाओं के अधिकारों के लिए लड़ने में मदद करने के लिए सूचित रहें।',
        }
    };

    // Select the translations for the selected language
    const selectedLanguage = translations[language];

    // Clear content before setting new values
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        // Ensure that we don't append or duplicate, just replace
        if (selectedLanguage[key]) {
            element.innerText = selectedLanguage[key];
        } else {
            element.innerText = ''; // Clear content if no translation exists
        }
    });
}

// Collapsible content toggle
function toggleContent(element) {
    const content = element.nextElementSibling;
    const section = element.closest('.collapsible-section');
    
    // Toggle the 'open' class on the section
    section.classList.toggle('open');
    
    // Check if the content is already open, and adjust the arrow direction
    const arrow = element.querySelector('.arrow');
    if (section.classList.contains('open')) {
        arrow.textContent = '▲'; // Arrow pointing up when open
    } else {
        arrow.textContent = '▼'; // Arrow pointing down when closed
    }
}
