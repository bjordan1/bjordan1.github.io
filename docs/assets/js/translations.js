// Define translations
const translations = {
    en: {
        title: "Benjamin Jordan",
        downloadResume: "Download Resume",
        aboutMe: "about me",
        education: "education",
        skills: "skills",
        experience: "experience",
        projects: "Projects",
        contact: "contact",
        // Add more translations for all texts
    },
    no: {
        title: "Benjamin Jordan",
        downloadResume: "Last ned CV",
        aboutMe: "om meg",
        education: "utdanning",
        skills: "ferdigheter",
        experience: "erfaring",
        projects: "Prosjekter",
        contact: "kontakt",
        // Add more translations for all texts
    }
};

// Function to change language
function changeLanguage(lang) {
    document.querySelector('.navbar-brand').textContent = translations[lang].title;
    document.querySelector('a[href="assets/download/Benjamin Jordan.pdf"]').textContent = translations[lang].downloadResume;
    document.querySelector('#about .section-heading h2').textContent = translations[lang].aboutMe;
    document.querySelector('#education .section-heading h2').textContent = translations[lang].education;
    document.querySelector('#skills .section-heading h2').textContent = translations[lang].skills;
    document.querySelector('#experience .section-heading h2').textContent = translations[lang].experience;
    document.querySelector('#portfolio .section-heading h2').textContent = translations[lang].projects;
    document.querySelector('li.smooth-menu a[href="#contact"]').textContent = translations[lang].contact;
    
    // Update other text elements as needed
}


document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('en'); // Default language is English
});
