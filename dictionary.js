//! Component Definitions
const bgButton = document.querySelector(".bulgarianbtn")
const enButton = document.querySelector(".englishbtn");
const titleSite = document.querySelector(".titlemus");
const textThing = document.querySelector(".texting");

//! Config Works
let currentLanguage;

bgButton.addEventListener("click", function(){
    currentLanguage = "Bulgarian"
    bgButton.innerHTML = "Български"
    enButton.innerHTML = "Англиски"
    titleSite.innerHTML = Dictionary.Title.bulgarian
    textThing.innerHTML = Dictionary.DescriptionAboutBulgaria.bulgarian
    
});
enButton.addEventListener("click", function(){
    currentLanguage = "English"
    bgButton.innerHTML = "Bulgarian"
    enButton.innerHTML = "English"
    titleSite.innerHTML = Dictionary.Title.english
    textThing.innerHTML = Dictionary.DescriptionAboutBulgaria.english
});



//! Dictionary

const Dictionary = {
    Title : {
        bulgarian : "Глава",
        english : "Title"
    },
    DescriptionAboutBulgaria : {
        bulgarian : "България има свобода през 1878 г",
        english : "Bulgaria Had Freedom in 1878"
    }
}

