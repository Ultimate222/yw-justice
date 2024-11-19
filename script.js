/// Language switching logic
function changeLanguage(language) {
    // Define the translations object
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
            'core-values-content': 
                '<b>Empowerment:</b> We believe that every woman and girl deserves to know her worth and rights. Through YWJ, we aim to empower women by educating them about their rights and the options available to them.<br>' +
                '<b>Awareness:</b> Education and awareness are crucial for social change. We are committed to providing accessible information that helps individuals and communities recognize the issues affecting Fijian women and understand their role in creating a safer environment for all.<br>' +
                '<b>Advocacy:</b> Standing up for women’s rights requires collective action. YWJ is dedicated to advocating for policy changes, societal shifts, and support systems that protect and uplift women.<br>' +
                '<b>Inclusivity:</b> YWJ is for all women and girls, regardless of age, background, or location. We believe in an inclusive approach that ensures all voices are heard and supported.<br>' +
                '<b>Community Support:</b> Together, we are stronger. We aim to build a supportive community of advocates, allies, and those affected by these issues to help each other and drive positive change.',
            'purpose-title': 'Purpose',
            'purpose-content': 'The purpose of this site is to educate and support women and girls in Fiji regarding their rights and provide resources to combat gender-based violence.',
            'you-can-help-(get-involved)-title': 'You Can Help (Get Involved)',
            'you-can-help-(get-involved)-content': 
                '<b>Spread Awareness:</b> Share our resources with friends, family, and colleagues to help more women understand their rights.<br>' +
                '<b>Volunteer:</b> Connect with us to see how you can support our campaigns, assist with content creation, or help run local events.<br>' +
                '<b>Donate or Fundraise:</b> Although YWJ is a student-led initiative, we are open to ideas on how to raise funds or donations that will support our efforts in Fiji.<br>' +
                '<b>Stay Informed:</b> Regularly check our website and follow us on social media to stay updated on women’s rights issues in Fiji and learn about upcoming events or new resources.',
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
            'core-values-content': 
                '<b>Empowerment:</b> We believe that every woman and girl deserves to know her worth and rights. Through YWJ, we aim to empower women by educating them about their rights and the options available to them.<br>' +
                '<b>Awareness:</b> Education and awareness are crucial for social change. We are committed to providing accessible information that helps individuals and communities recognize the issues affecting Fijian women and understand their role in creating a safer environment for all.<br>' +
                '<b>Advocacy:</b> Standing up for women’s rights requires collective action. YWJ is dedicated to advocating for policy changes, societal shifts, and support systems that protect and uplift women.<br>' +
                '<b>Inclusivity:</b> YWJ is for all women and girls, regardless of age, background, or location. We believe in an inclusive approach that ensures all voices are heard and supported.<br>' +
                '<b>Community Support:</b> Together, we are stronger. We aim to build a supportive community of advocates, allies, and those affected by these issues to help each other and drive positive change.',
            'purpose-title': 'iVakamacala',
            'purpose-content': 'The purpose of this site is to educate and support women and girls in Fiji regarding their rights and provide resources to combat gender-based violence.',
            'you-can-help-(get-involved)-title': 'Ko Ni Cakava',
            'you-can-help-(get-involved)-content': 
                '<b>Veivakatorocaketaki ni lavo:</b> Veivakatorocaketaka na iTukutuku ena veika ni iVakamacala me baleta na yalo ni vulagi kei na itukutuku ni iVakamacala.<br>' +
                '<b>Vakatauca:</b> Keirau e na cava e vakayacora ni na veivakatorocaketaki o ni, vakaitavi ena nodra vulica, ka veitaratara.<br>' +
                '<b>Itukutuku:</b> Vei ni yaca ni ivakatorocak to ni.'
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
            'core-values-content': 
                '<b>Empowerment:</b> We believe that every woman and girl deserves to know her worth and rights. Through YWJ, we aim to empower women by educating them about their rights and the options available to them.<br>' +
                '<b>Awareness:</b> Education and awareness are crucial for social change. We are committed to providing accessible information that helps individuals and communities recognize the issues affecting Fijian women and understand their role in creating a safer environment for all.<br>' +
                '<b>Advocacy:</b> Standing up for women’s rights requires collective action. YWJ is dedicated to advocating for policy changes, societal shifts, and support systems that protect and uplift women.<br>' +
                '<b>Inclusivity:</b> YWJ is for all women and girls, regardless of age, background, or location. We believe in an inclusive approach that ensures all voices are heard and supported.<br>' +
                '<b>Community Support:</b> Together, we are stronger. We aim to build a supportive community of advocates, allies, and those affected by these issues to help each other and drive positive change.',
            'purpose-title': 'उद्देश्य',
            'purpose-content': 'इस साइट का उद्देश्य फिजी में महिलाओं और लड़कियों को उनके अधिकारों के बारे में शिक्षा देना और लिंग आधारित हिंसा से निपटने के लिए संसाधन प्रदान करना है।',
            'you-can-help-(get-involved)-title': 'आप मदद कर सकते हैं (शामिल हों)',
            'you-can-help-(get-involved)-content': 
                '<b>जागरूकता फैलाएं:</b> हमारे संसाधनों को दोस्तों, परिवार और सहकर्मियों के साथ साझा करें ताकि अधिक महिलाएं अपने अधिकारों को समझ सकें।<br>' +
                '<b>स्वयंसेवक बनें:</b> हमारे अभियानों में समर्थन देने के लिए हमारे साथ जुड़ें, सामग्री निर्माण में मदद करें, या स्थानीय कार्यक्रमों में सहायता करें।<br>' +
                '<b>दान या धन जुटाएं:</b> यद्यपि YWJ एक छात्र-प्रेरित पहल है, हम ऐसे विचारों के लिए खुले हैं कि हम फिजी में हमारे प्रयासों को समर्थन देने के लिए धन जुटा सकते हैं या दान कर सकते हैं।<br>' +
                '<b>सूचित रहें:</b> नियमित रूप से हमारे वेबसाइट पर जाएं और हमारे सोशल मीडिया पर हमें फॉलो करें ताकि आप फिजी में महिलाओं के अधिकारों से संबंधित मुद्दों पर नवीनतम जानकारी प्राप्त कर सकें।',
        }
    };

    // Set the translations for the current language
    document.getElementById('header-title').innerHTML = translations[language]['header-title'];
    document.getElementById('header-subtitle').innerHTML = translations[language]['header-subtitle'];
    document.getElementById('nav-home').innerHTML = translations[language]['nav-home'];
    document.getElementById('nav-about').innerHTML = translations[language]['nav-about'];
    document.getElementById('nav-resources').innerHTML = translations[language]['nav-resources'];
    document.getElementById('nav-inspirations').innerHTML = translations[language]['nav-inspirations'];
    document.getElementById('nav-contact').innerHTML = translations[language]['nav-contact'];
    document.getElementById('nav-help').innerHTML = translations[language]['nav-help'];
    document.getElementById('about-title').innerHTML = translations[language]['about-title'];
    document.getElementById('about-content').innerHTML = translations[language]['about-content'];
    document.getElementById('why-fiji-title').innerHTML = translations[language]['why-fiji-title'];
    document.getElementById('why-fiji-content').innerHTML = translations[language]['why-fiji-content'];
    document.getElementById('core-values-title').innerHTML = translations[language]['core-values-title'];
    document.getElementById('core-values-content').innerHTML = translations[language]['core-values-content'];
    document.getElementById('purpose-title').innerHTML = translations[language]['purpose-title'];
    document.getElementById('purpose-content').innerHTML = translations[language]['purpose-content'];
    document.getElementById('you-can-help-(get-involved)-title').innerHTML = translations[language]['you-can-help-(get-involved)-title'];
    document.getElementById('you-can-help-(get-involved)-content').innerHTML = translations[language]['you-can-help-(get-involved)-content'];
}
