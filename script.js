// Translation Data
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
        "why-fiji-content": "While women’s rights are a global issue, certain regions face unique social and cultural challenges that hinder gender equality. In Fiji, many women and girls experience violence, harassment, and societal pressures that keep them from recognizing their value and rights. Traditional norms often prevent open discussions about abuse, making it difficult for those affected to seek help or realize that their situation is not acceptable. YWJ recognizes the importance of focusing on these specific cultural contexts and aims to provide resources tailored to the Fijian community’s unique needs, challenges, and language. Additionally, the remoteness of certain Fijian communities can limit access to support networks, legal protections, and crisis services. YWJ wants to bridge this gap by creating a digital platform where women and girls across Fiji can access information, find helplines, and connect with a supportive network that understands their background and struggles."
    },
    fj: {
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
        "why-fiji-content": "Na Viti e vakila e levu na draki ni bula e dau vakaloloma kina na marama kei na goneyalewa. E vakatautauvata na veivakalolomataki ena ivakarau ni bula makawa ka sa vakavuna me dredre na kena solia na veivuke. Na YWJ e via tarova na iwalewale makawa ka vakatorocaketaka e dua na vanua sautu kei na kila dodonu vei ira na marama e Viti."
    },
    hi: {
        "header-title": "महिलाओं के न्याय के लिए युवाओं (YWJ)",
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
        "why-fiji-content": "फिजी में सामाजिक और सांस्कृतिक समस्याएं महिलाओं के अधिकारों को बाधित करती हैं। यहां की परंपराएं और सामाजिक दबाव महिलाओं को उनके मूल्य और अधिकारों को पहचानने से रोकते हैं। YWJ इन मुद्दों पर ध्यान केंद्रित करता है और संसाधन उपलब्ध कराता है।"
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

// Collapsible Sections
function toggleContent(element) {
    const section = element.parentElement;
    const content = section.querySelector(".collapsible-content");
    if (section.classList.contains("active")) {
        section.classList.remove("active");
        content.style.maxHeight = null;
    } else {
        section.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// Initialize Gallery (if required)
function initGallery() {
    const gallery = document.querySelector(".gallery");
    if (gallery) {
        gallery.innerHTML = `
            <div class="gallery-item">Image 1</div>
            <div class="gallery-item">Image 2</div>
            <div class="gallery-item">Image 3</div>
        `;
    }
}

// On Page Load
window.onload = () => {
    initGallery(); // Initialize the gallery if present
};
