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
