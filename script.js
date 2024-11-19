// Change language function
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

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
        "you-can-help-(get-involved)-content": "At YWJ, we believe everyone has a role in supporting and advancing women’s rights. Here are some ways you can get involved: Spread Awareness: Share our resources with friends, family, and colleagues to help more women understand their rights. Volunteer Connect with us to see how you can support our campaigns, assist with content creation, or help run local events. Donate or Fundraise: Although YWJ is a student-led initiative, we are open to ideas on how to raise funds or donations that will support our efforts in Fiji. Stay Informed: Regularly check our website and follow us on social media to stay updated on women’s rights issues in Fiji and learn about upcoming events or new resources.",
    },
    fj: 
       {
    "header-title": "Youth For Women's Justice (YWJ)",
    "header-subtitle": "Vakarau Dodonu, Taqomaka na Dodonu",
    "nav-home": "Vale",
    "nav-about": "Matai Me Baleta",
    "nav-resources": "iVakarau",
    "nav-inspirations": "iNaki Vakaukauwa",
    "nav-contact": "Veitaratara Mai",
    "nav-help": "Kerea na Veivuke",
    "about-title": "Matai Me Baleta na YWJ",
    "about-content": "Youth for Women’s Justice (YWJ) e dua na cakacaka vakakoronivuli me vakadoudouya na yalewa kei na goneyalewa e Viti. YWJ e vinakata me vakadodonutaki na nodra kila kei na nodra taqomaki mai na veivakalolomataki. Keitou vakabauta ni o ira na marama e dodonu me ratou kila na nodra yaga, nodra dodonu kei na sala me ratou vakasaqara kina na veitokoni.",
    "why-fiji-title": "Na Vuna e Vakarau Kina E Viti?",
    "why-fiji-content": "Na Viti e vakila e levu na draki ni bula e dau vakaloloma kina na marama kei na goneyalewa. E vakatautauvata na veivakalolomataki ena ivakarau ni bula makawa ka sa vakavuna me dredre na kena solia na veivuke. Na YWJ e via tarova na iwalewale makawa ka vakatorocaketaka e dua na vanua sautu kei na kila dodonu vei ira na marama e Viti.",
    "core-values-title": "Na Yavu ni Loma",
    "core-values-content": "Vakadoudouya: Keitou vakabauta ni o ira na marama yadua e dodonu me ratou kila na nodratou yaga kei na nodratou dodonu. Kila: Na kila kei na vuli e yaga vakalevu me tarova na veika vakaloloma. Veivakaturi: Keitou tu ena nodra tokoni na marama me vakatura na veisau e vakatokai ena vanua. Veidabui: Na YWJ e vakarautaki me baleta na marama kece e sega ni vakatauvatani na yabaki se vanua. Veitokoni: Keitou raica ni dodonu me sautu ruarua o ira na marama kei ira na lewenivanua.",
    "purpose-title": "Na iNaki",
    "purpose-content": "Na iNaki ni mataveilawa oqo me vukei ira na marama kei na goneyalewa e Viti ena nodra kila na nodra dodonu, ka vakarautaka na veitokoni me tarova na itovo vakaloloma.",
    "you-can-help-(get-involved)-title": "Tiko na Nomu iTavi",
    "you-can-help-(get-involved)-content": "Keitou vakabauta ni tiko na nodra itavi na lewenivanua ena kena vakatorocaketaki na dodonu ni marama. Wasea na kila vei ira na wekamu, veitokoni ena ivakarau ni kena vakayacori na cakacaka ka solia na nomu veitokoni ena kena vakasakiti."
    },
    hi: {
        "header-title": "युवा महिलाओं के लिए न्याय", 
    "header-subtitle": "आवाज़ को सशक्त करना, अधिकारों की रक्षा करना",
    "nav-home": "मुख्य पृष्ठ",
    "nav-about": "हमारे बारे में",
    "nav-resources": "संसाधन",
    "nav-inspirations": "प्रेरणाएँ",
    "nav-contact": "संपर्क करें",
    "nav-help": "मदद प्राप्त करें",
    "about-title": "YWJ के बारे में",
    "about-content": "युवा महिलाओं के न्याय (YWJ) एक स्कूल-संचालित पहल है जो महिलाओं के अधिकारों के प्रति जागरूकता बढ़ाने और हिंसा तथा भेदभाव के खिलाफ खड़ा होने के लिए समर्पित है। YWJ सामाजिक न्याय के प्रति उत्साही युवाओं द्वारा स्थापित किया गया है। इसका उद्देश्य महिलाओं को सशक्त करना, उन्हें उनके अधिकारों के बारे में शिक्षित करना और उनके लिए सहायता प्राप्त करना है।",
    "why-fiji-title": "फिजी पर ध्यान क्यों दें?",
    "why-fiji-content": "फिजी में सामाजिक और सांस्कृतिक समस्याएं महिलाओं के अधिकारों को बाधित करती हैं। यहां की परंपराएं और सामाजिक दबाव महिलाओं को उनके मूल्य और अधिकारों को पहचानने से रोकते हैं। YWJ इन मुद्दों पर ध्यान केंद्रित करता है और संसाधन उपलब्ध कराता है।",
    "core-values-title": "मूल्य",
    "core-values-content": "सशक्तिकरण: प्रत्येक महिला और लड़की को अपने मूल्य और अधिकारों को जानने का अधिकार है। जागरूकता: शिक्षा और जागरूकता सामाजिक परिवर्तन के लिए आवश्यक हैं। समर्थन: महिलाओं के अधिकारों के लिए सामूहिक समर्थन। समावेशिता: YWJ सभी महिलाओं और लड़कियों के लिए है। सामुदायिक समर्थन: हम एक सहायक समुदाय बनाना चाहते हैं।",
    "purpose-title": "उद्देश्य",
    "purpose-content": "इस साइट का उद्देश्य फिजी में महिलाओं और लड़कियों को उनके अधिकारों के प्रति शिक्षित करना और लिंग आधारित हिंसा का मुकाबला करने के लिए संसाधन प्रदान करना है।",
    "you-can-help-(get-involved)-title": "आप सहायता कर सकते हैं",
    "you-can-help-(get-involved)-content": "YWJ मानता है कि हर व्यक्ति महिलाओं के अधिकारों को समर्थन देने में भूमिका निभा सकता है। जागरूकता फैलाएं, स्वयंसेवा करें, दान करें और संसाधन साझा करें।"
    }
};

// Collapsible toggle
function toggleContent(element) {
    const section = element.parentElement;
    section.classList.toggle("open");
}

// Header shrink on scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

// Scroll reveal animation
function revealOnScroll() {
    const sections = document.querySelectorAll("section");
    const triggerHeight = window.innerHeight * 0.85;

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
