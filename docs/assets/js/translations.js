// assets/js/translations.js

// Translation data
const translations = {
    en: {
        title: "Benjamin Jordan",
        downloadResume: "Download Resume",
        aboutMe: "About Me",
        education: "Education",
        skills: "Technical Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
        phone: "Phone",
        email: "Email",
        masterOfBusinessAnalytics: "Master of Business Analytics",
        hultSchool: "Hult International Business School",
        noteworthyCourses: "Noteworthy Courses",
        tradingInternship: "Trading and Shipping Operations Associate",
        businessChallenge: "Business Challenge, Lyme Bay Winery",
        pwcChallenge: "PwC Consulting Challenge, Digital Credit & Payments",
        sentimentAnalysis: "Sentiment analysis of Reddit posts for stock market prediction",
        // Add more translations here
    },
    no: {
        title: "Benjamin Jordan",
        downloadResume: "Last ned CV",
        aboutMe: "Om meg",
        education: "Utdanning",
        skills: "Tekniske ferdigheter",
        experience: "Erfaring",
        projects: "Prosjekter",
        contact: "Kontakt",
        phone: "Telefon",
        email: "E-post",
        masterOfBusinessAnalytics: "Master i forretningsanalyse",
        hultSchool: "Hult International Business School",
        noteworthyCourses: "Merkverdige kurs",
        tradingInternship: "Handels- og fraktoperasjonsassistent",
        businessChallenge: "Business Challenge, Lyme Bay Winery",
        pwcChallenge: "PwC Consulting Challenge, Digital Credit & Payments",
        sentimentAnalysis: "Sentimentanalyse av Reddit-innlegg for aksjemarkedsprediksjon",
        // Add more translations here
    }
};

// Function to change language
function changeLanguage(language) {
    document.title = translations[language].title;

    // Header Text
    document.querySelector('.header-text h2').innerHTML = translations[language].welcome;
    document.querySelector('a[href="assets/download/Benjamin Jordan.pdf"]').textContent = translations[language].downloadResume;
    
    // Navigation
    document.querySelector('a[href="#about"]').textContent = translations[language].aboutMe;
    document.querySelector('a[href="#education"]').textContent = translations[language].education;
    document.querySelector('a[href="#skills"]').textContent = translations[language].skills;
    document.querySelector('a[href="#experience"]').textContent = translations[language].experience;
    document.querySelector('a[href="#portfolio"]').textContent = translations[language].projects;
    document.querySelector('a[href="#contact"]').textContent = translations[language].contact;
    
    // About Section
    document.querySelector('#about .section-heading h2').textContent = translations[language].aboutMe;
    document.querySelector('#about .single-about-add-info h3:nth-of-type(1)').textContent = translations[language].phone;
    document.querySelector('#about .single-about-add-info p:nth-of-type(1)').textContent = "(+1) 617 - 302 - 15 - 62";
    document.querySelector('#about .single-about-add-info h3:nth-of-type(2)').textContent = translations[language].email;
    document.querySelector('#about .single-about-add-info p:nth-of-type(2)').textContent = "benjamin.jordan07@outlook.com";
    
    // Education Section
    document.querySelector('#education .section-heading h2').textContent = translations[language].education;
    document.querySelectorAll('.experience-time h3')[0].textContent = translations[language].masterOfBusinessAnalytics;
    document.querySelectorAll('.experience-time h4')[0].textContent = translations[language].hultSchool;
    document.querySelectorAll('.description')[0].innerHTML = `${translations[language].noteworthyCourses}: <br> Algorithmic trading in Python <br> Business Intelligence <br> Supply Chain Analytics`;
    
    // Skills Section
    document.querySelector('#skills .section-heading h2').textContent = translations[language].skills;
    document.querySelectorAll('.progressText')[0].textContent = "Python";
    document.querySelectorAll('.progress-bar')[0].style.width = "80%";
    document.querySelectorAll('.progressText')[1].textContent = "SQL";
    document.querySelectorAll('.progress-bar')[1].style.width = "55%";
    document.querySelectorAll('.progressText')[2].textContent = "HTML";
    document.querySelectorAll('.progress-bar')[2].style.width = "60%";
    document.querySelectorAll('.progressText')[3].textContent = "C#";
    document.querySelectorAll('.progress-bar')[3].style.width = "45%";
    
    // Experience Section
    document.querySelector('#experience .section-heading h2').textContent = translations[language].experience;
    document.querySelectorAll('.experience-time h3')[0].textContent = translations[language].tradingInternship;
    document.querySelectorAll('.description')[1].innerHTML = `Orchestrated loading, unloading, and voyage operations...`;
    document.querySelectorAll('.experience-time h3')[1].textContent = translations[language].businessChallenge;
    document.querySelectorAll('.description')[2].innerHTML = `Developed and executed a strategic 3-year business development plan...`;
    
    // Projects Section
    document.querySelector('#portfolio .section-heading h2').textContent = translations[language].projects;
    document.querySelectorAll('.isotope-overlay a')[0].textContent = translations[language].sentimentAnalysis;
    document.querySelectorAll('.isotope-overlay a')[1].textContent = translations[language].businessChallenge;
    document.querySelectorAll('.isotope-overlay a')[2].textContent = translations[language].pwcChallenge;
}

// Set default language on load
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en'); // Set default language here
});
