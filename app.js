const tittle = document.querySelector("#Title");
const subTittle = document.querySelector("#subTittle");
const total = document.querySelectorAll("#total");
const followers = document.querySelectorAll("#followers");
const user = document.querySelectorAll("#user");
const darkMode = document.querySelector("#darkModeT");
const label = document.querySelector("#label");
const cards = document.querySelectorAll("#cards");
const cardToday = document.querySelectorAll("#cardToday");
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const bgpattern = document.querySelector("#bgpattern");
const interaction = document.querySelectorAll("#interaction");




toggle.addEventListener("change", () => {
    
    body.classList.toggle("bg-Very-Dark-Blue-BG");
    
    tittle.classList.toggle("text-Very-Dark-Blue-Text");
    tittle.classList.toggle("text-White-BG");

    subTittle.classList.toggle("text-Dark-Grayish-Blue-Text");
    subTittle.classList.toggle("text-Dark-Grayish-Blue-Text");
    
    darkMode.classList.toggle("text-Dark-Grayish-Blue-Text");
    darkMode.classList.toggle("text-Dark-Grayish-Blue-Text");

    label.classList.toggle("bg-Toggle");
    // label.classList.toggle("bg-linear-to-r");
    label.classList.toggle("bg-ToggleDarkFrom");
    // label.classList.toggle("to-ToggleDarkTo");

    bgpattern.classList.toggle("bg-Very-Pale-Blue-Top-BG-Pattern");
    bgpattern.classList.toggle("bg-Very-Dark-Blue-Top-BG-Pattern");


    user.forEach(user => {
        user.classList.toggle("text-Very-Dark-Blue-Text");
        user.classList.toggle("text-Dark-Grayish-Blue-Text");
    });
    followers.forEach(followers => {
        followers.classList.toggle("text-Very-Dark-Blue-Text");
        followers.classList.toggle("text-Dark-Grayish-Blue-Text");
    });
    total.forEach(total => {
        total.classList.toggle("text-Very-Dark-Blue-Text");
        total.classList.toggle("text-White-BG");
    })
    cards.forEach(card => {
        card.classList.toggle("bg-Light-Grayish-Blue-Card-BG");
        card.classList.toggle("bg-Dark-Desaturated-Blue-Card-BG");
        
        
    });
    cardToday.forEach(card => {
        card.classList.toggle("bg-Light-Grayish-Blue-Card-BG");
        card.classList.toggle("bg-Dark-Desaturated-Blue-Card-BG");
    });
    interaction.forEach(interaction => {
        interaction.classList.toggle("text-Dark-Grayish-Blue-Text");
        interaction.classList.toggle("text-Dark-Grayish-Blue-Text");

    });
    
})
