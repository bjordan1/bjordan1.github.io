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
        iAm: "I am Benjamin Jordan", // Add this line
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
        iAm: "Jeg er Benjamin Jordan", // Add this line
        // Add more translations here
    }
};

// Function to change language
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

// Set default language on page load
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage("en");
});