// Language change function
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Scroll animation function
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight / 1.1;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

function toggleContent(element) {
    const section = element.parentElement; // Get the parent section element
    section.classList.toggle("open"); // Toggle the "open" class
}

// Add this JavaScript to script.js
window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) { // Adjust scroll distance to trigger the shrink
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.querySelectorAll('.collapsible').forEach(item => {
    item.querySelector('.arrow').addEventListener('click', () => {
        const content = item.querySelector('.collapsible-content');
        content.classList.toggle('open');

        // Adjust height only if the content is open
        if (content.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0";
        }
    });
});

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
        "why-fiji-content": "Why Fiji? While women's rights are a global issue, certain regions face unique social and cultural challenges that hinder gender equality. In Fiji, many women and girls experience violence, harassment, and societal pressures that keep them from recognizing their value and rights. Traditional norms often prevent open discussions about abuse, making it difficult for those affected to seek help or realize that their situation is not acceptable. YWJ recognizes the importance of focusing on these specific cultural contexts and aims to provide resources tailored to the Fijian community’s unique needs, challenges, and language. Additionally, the remoteness of certain Fijian communities can limit access to support networks, legal protections, and crisis services. YWJ wants to bridge this gap by creating a digital platform where women and girls across Fiji can access information, find helplines, and connect with a supportive network that understands their background and struggles.",
        "core-values-title": "Core Values",
        "core-values-content": "Empowerment: We believe that every woman and girl deserves to know her worth and rights. Through YWJ, we aim to empower women by educating them about their rights and the options available to them. Awareness: Education and awareness are crucial for social change. We are committed to providing accessible information that helps individuals and communities recognize the issues affecting Fijian women and understand their role in creating a safer environment for all. Advocacy: Standing up for women’s rights requires collective action. YWJ is dedicated to advocating for policy changes, societal shifts, and support systems that protect and uplift women. Inclusivity: YWJ is for all women and girls, regardless of age, background, or location. We believe in an inclusive approach that ensures all voices are heard and supported. Community Support: Together, we are stronger. We aim to build a supportive community of advocates, allies, and those affected by these issues to help each other and drive positive change.",
        "purpose-title": "Purpose",
        "purpose-content": "The purpose of this site is to educate and support women and girls in Fiji regarding their rights and provide resources to combat gender-based violence. Through education, advocacy, and support networks, YWJ strives to spark meaningful change and build a safer, more equitable future for women in Fiji.",
        "you-can-help-(get-involved)-title": "You Can Help (Get Involved)",
        "you-can-help-(get-involved)-content": "At YWJ, we believe everyone has a role in supporting and advancing women’s rights. Here are some ways you can get involved: Spread Awareness: Share our resources with friends, family, and colleagues to help more
        "you-can-help-(get-involved)-content": "At YWJ, we believe everyone has a role in supporting and advancing women’s rights. Here are some ways you can get involved: Spread Awareness: Share our resources with friends, family, and colleagues to help more people understand the importance of women’s rights and the issues we face. Volunteer: Join us in community outreach programs, workshops, and campaigns. Your time and energy can make a huge difference! Fundraise: Help us raise funds to support our initiatives, awareness campaigns, and educational resources. Every bit helps. Advocate: Stand up for women's rights in your community. Use your voice to advocate for change and ensure that women are protected and heard. Donations: Your financial contributions will go toward helping women in need, providing critical support services, and driving advocacy efforts. Together, we can make a difference!"
    },
    fj: {
        "header-title": "Youth For Women's Justice (YWJ)",
        "header-subtitle": "Veivuke ni iVakamacala, Veivukei ni iTavi",
        "nav-home": "Vale",
        "nav-about": "Me baleta YWJ",
        "nav-resources": "iVoli",
        "nav-inspirations": "Veivakurabuitaki",
        "nav-contact": "Viberi Mai",
        "nav-help": "Kerekere Vuli",
        "about-title": "Me baleta YWJ",
        "about-content": "Youth for Women’s Justice (YWJ) e dua na iyatukana ni veivuke ni gonevuli e vakayagataki ena veiqaravi ni veivakavoui kei na veivukei ni iTavi ni marama kei na gonevuli e Fiji. E vakavinakataki tiko ena veivakasalataki kei na veivukei ni marama, e vukei ira na marama kei na gonevuli ena veiqaravi ni veivakavoui kei na kena vakayagataki na yaga ni nodra iTavi.",
        "why-fiji-title": "Me baleta na Fiji?",
        "why-fiji-content": "Na Fiji e dau sotavi tiko na leqa ni iTavi ni marama kei na gonevuli, sa raica na YWJ ni duatani na leqa e sega ni tuvanaki.",
        "core-values-title": "iVakadinadina ni YWJ",
        "core-values-content": "iVakadinadina: E vinaka me kila na marama kei na gonevuli na nodra iTavi, veivuke: Na veivakasalataki kei na veivukei e rawa ni vukei ira.",
        "purpose-title": "iVakatulewa",
        "purpose-content": "Na iVakatulewa ni YWJ e me vukei ira na marama kei na gonevuli e Fiji ena veivakavaletaki kei na veiqaravi ni veivakabauti.",
        "you-can-help-(get-involved)-title": "Ona rawa ni vukei (Vakekeli)",
        "you-can-help-(get-involved)-content": "Na vukei ena vuli e sega ni o tu ena vakavinakataki. Tovolea na vakavoui kei na veivakurabuitaki!"
    },
    hi: {
        "header-title": "युथ फॉर विमेंस जस्टिस (YWJ)",
        "header-subtitle": "आवाज़ों को सशक्त बनाना, अधिकारों की रक्षा करना",
        "nav-home": "होम",
        "nav-about": "हमारे बारे में",
        "nav-resources": "संसाधन",
        "nav-inspirations": "प्रेरणाएँ",
        "nav-contact": "संपर्क करें",
        "nav-help": "मदद प्राप्त करें",
        "about-title": "YWJ के बारे में",
        "about-content": "युथ फॉर विमेंस जस्टिस (YWJ) एक हाई स्कूल-चालित पहल है जिसका उद्देश्य महिला अधिकारों के बारे में जागरूकता बढ़ाना और फिजी में महिलाओं और लड़कियों के खिलाफ हिंसा और भेदभाव के खिलाफ अभियान चलाना है...",
        "why-fiji-title": "फिजी पर ध्यान क्यों?",
        "why-fiji-content": "फिजी में महिलाओं के अधिकारों के मुद्दे को हल करना महत्वपूर्ण है क्योंकि यहां सामाजिक और सांस्कृतिक चुनौतियाँ मौजूद हैं...",
        "core-values-title": "मुख्य मूल्य",
        "core-values-content": "सशक्तिकरण: हमें विश्वास है कि हर महिला और लड़की को उसके अधिकारों और मूल्य के बारे में जानने का अधिकार है...",
        "purpose-title": "उद्देश्य",
        "purpose-content": "इस साइट का उद्देश्य फिजी में महिलाओं और लड़कियों को उनके अधिकारों के बारे में शिक्षा देना और हिंसा और भेदभाव के खिलाफ संसाधन प्रदान करना है...",
        "you-can-help-(get-involved)-title": "आप मदद कर सकते हैं (शामिल हों)",
        "you-can-help-(get-involved)-content": "YWJ में, हम मानते हैं कि हर किसी का महिला अधिकारों को बढ़ावा देने में एक भूमिका है...",
    }
};

// Set default language to English
changeLanguage('en');
