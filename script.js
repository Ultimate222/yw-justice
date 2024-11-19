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
