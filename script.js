// Shrinking Header on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.classList.add("shrunk");
        header.classList.remove("large");
    } else {
        header.classList.add("large");
        header.classList.remove("shrunk");
    }
});

// Collapsible Section Functionality
function toggleContent(element) {
    const section = element.parentElement;
    section.classList.toggle("open");

    const content = section.querySelector(".collapsible-content");
    if (section.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
    } else {
        content.style.maxHeight = "0";
        content.style.opacity = 0;
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
       
