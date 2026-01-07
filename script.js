const translations = {
    en: {
        title: "Something Delicious is Cooking!",
        subtitle: "We are currently working on our new website. Detailed menu and online ordering coming soon.",
        status: "Under Development",
        contactTitle: "Contact Us",
        addressTitle: "Visit Us",
        addressText: "Kalagobasandhiram, Opposite to Anjaneya Temple,<br>Near Bus Stand, Near Lakshmi Sweets and Bakery,<br>Tamil Nadu, Pin Code: 635107"
    },
    ta: {
        title: "சுவையான உணவு தயாராகிறது!",
        subtitle: "எங்கள் புதிய இணையதளம் உருவாக்கப்பட்டு வருகிறது. விரிவான உணவு பட்டியல் மற்றும் ஆன்லைன் ஆர்டர் வசதி விரைவில் வரும்.",
        status: "உருவாக்கத்தில் உள்ளது",
        contactTitle: "தொடர்புக்கு",
        addressTitle: "முகவரி",
        addressText: "கலகோபசந்திரம், ஆஞ்சநேயர் கோவில் எதிரில்,<br>பேருந்து நிலையம் அருகில், லட்சுமி ஸ்வீட்ஸ் அருகில்,<br>தமிழ்நாடு, அஞ்சல் குறியீடு: 635107"
    },
    te: {
        title: "రుచికరమైన వంట సిద్ధమవుతోంది!",
        subtitle: "మా కొత్త వెబ్‌సైట్ పనులు జరుగుతున్నాయి. పూర్తి మెనూ మరియు ఆన్‌లైన్ ఆర్డరింగ్ త్వరలో రాబోతున్నాయి.",
        status: "అభివృద్ధిలో ఉంది",
        contactTitle: "సంప్రదించండి",
        addressTitle: "చిరునామా",
        addressText: "కలగోబసంధిరం, ఆంజనేయ స్వామి ఆలయం ఎదురుగా,<br>బస్ స్టాండ్ దగ్గర, లక్ష్మి స్వీట్స్ దగ్గర,<br>తమిళనాడు, పిన్ కోడ్: 635107"
    },
    kn: {
        title: "ರುಚಿಕರವಾದ ಅಡುಗೆ ತಯಾರಾಗುತ್ತಿದೆ!",
        subtitle: "ನಮ್ಮ ಹೊಸ ವೆಬ್‌ಸೈಟ್ ಸಿದ್ಧಗೊಳ್ಳುತ್ತಿದೆ. ವಿವರವಾದ ಮೆನು ಮತ್ತು ಆನ್‌ಲೈನ್ ಆರ್ಡರ್ ಸೇವೆ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ.",
        status: "ಅಭಿವೃದ್ಧಿಯಲ್ಲಿದೆ",
        contactTitle: "ಸಂಪರ್ಕಿಸಿ",
        addressTitle: "ವಿಳಾಸ",
        addressText: "ಕಲಗೋಬಸಂಧಿರಮ್, ಆಂಜನೇಯ ದೇವಸ್ಥಾನದ ಎದುರು,<br>ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಲಕ್ಷ್ಮಿ ಸ್ವೀಟ್ಸ್ ಹತ್ತಿರ,<br>ತಮಿಳುನಾಡು, ಪಿನ್ ಕೋಡ್: 635107"
    }
};

function changeLanguage(lang) {
    document.getElementById('main-title').innerText = translations[lang].title;
    document.getElementById('sub-title').innerText = translations[lang].subtitle;
    document.getElementById('status-text').innerText = translations[lang].status;
    document.getElementById('contact-title').innerText = translations[lang].contactTitle;

    // Check if address elements exist before setting (in case they are added later or structure changes)
    const addressTitle = document.getElementById('address-title');
    const addressText = document.getElementById('address-text');

    if (addressTitle) addressTitle.innerText = translations[lang].addressTitle;
    if (addressText) addressText.innerHTML = translations[lang].addressText;

    // Update active button state and animate slider
    const buttons = document.querySelectorAll('.lang-btn');
    const slider = document.querySelector('.slider-bg');

    buttons.forEach((btn, index) => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
            // Move slider
            /* Assuming fixed width buttons of 40px + some potential gap/padding logic if needed.
               Here we can use the index to translate.
               Each button is ~40px width.
            */
            if (slider) {
                slider.style.transform = `translateX(${index * 100}%)`;
            }
        }
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            changeLanguage(e.target.dataset.lang);
        });
    });
});
