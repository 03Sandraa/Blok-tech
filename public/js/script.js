/* ------ Animatie - Gekopieerd van eigen voorgaande project ------ */

const buttonHamburgermenu = document.querySelector("header nav button");
const navMenu = document.querySelector("header nav ul");

buttonHamburgermenu.addEventListener("click", openGebruikersmenu);

HamburgermenuStatus = 0;

function openGebruikersmenu() {
    if (HamburgermenuStatus == 0) {
        buttonHamburgermenu.classList.add("open");
        HamburgermenuStatus = 1;
        navMenu.classList.remove("hidden")
    } else if (HamburgermenuStatus == 1) {
        buttonHamburgermenu.classList.remove("open");
        buttonHamburgermenu.classList.add("closed");
        HamburgermenuStatus = 2;
        navMenu.classList.add("hidden")
    } else {
        buttonHamburgermenu.classList.add("open");
        buttonHamburgermenu.classList.remove("closed");
        HamburgermenuStatus = 1;
        navMenu.classList.remove("hiddan");
    }
};

/* ------ End animatie - Gekopieerd van eigen voorgaande project ------ */

const formFotoInput = document.querySelector("profielfotoDiv input");

