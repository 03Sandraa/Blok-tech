/* ------ Animatie - Gekopieerd van eigen voorgaande project ------ */

const buttonHamburgermenu = document.querySelector("header nav button");

buttonHamburgermenu.addEventListener("click",openGebruikersmenu);

HamburgermenuStatus = 0;

function openGebruikersmenu(){
    if (HamburgermenuStatus == 0){
        buttonHamburgermenu.classList.add("open");
        HamburgermenuStatus = 1;
    } else if (HamburgermenuStatus == 1){
        buttonHamburgermenu.classList.remove("open");
        buttonHamburgermenu.classList.add("closed");
        HamburgermenuStatus = 2;
    } else {
        buttonHamburgermenu.classList.add("open");
        buttonHamburgermenu.classList.remove("closed");
        HamburgermenuStatus = 1;
    }
};

/* ------ End animatie - Gekopieerd van eigen voorgaande project ------ */