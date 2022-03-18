/* ------ Animatie - Gekopieerd van eigen voorgaande project ------ */

const buttonHamburgermenu = document.querySelector("header nav button");
const navMenu = document.querySelector("header nav ul");

buttonHamburgermenu.addEventListener("click", openGebruikersmenu);

let HamburgermenuStatus = 0;

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
}

/* ------ End animatie - Gekopieerd van eigen voorgaande project ------ */

// ------ Drop zone voor avatar ------

const formFotoInput = document.querySelector(".testinput")

window.onload=function dragOverInputField() {
    const dropZone = document.querySelector(".profielfotoDiv");
    const stockFotoInDropZone = document.querySelector(".stockFoto");
    const HuidigeAvatar = document.querySelector(".eigenProfielfotoGr");
    const uploadFotoOverlay = document.querySelector(".uploadFotoOverlay");

    dropZone.addEventListener("dragover", e => {
        e.preventDefault();
        stockFotoInDropZone.classList.add("hidden");
        HuidigeAvatar.classList.add("transparent");
        uploadFotoOverlay.classList.add("showUploadFotoOverlay")
        uploadFotoOverlay.classList.remove("hidden")
    })

    dropZone.addEventListener("dragleave", e => {
        stockFotoInDropZone.classList.remove("hidden");
        HuidigeAvatar.classList.remove("transparent");
        uploadFotoOverlay.classList.remove("showUploadFotoOverlay")
        uploadFotoOverlay.classList.add("hidden")
    })

    dropZone.addEventListener("dragend", e => {
        stockFotoInDropZone.classList.remove("hidden");
        HuidigeAvatar.classList.remove("transparent");
        uploadFotoOverlay.classList.remove("showUploadFotoOverlay")
        uploadFotoOverlay.classList.add("hidden")
    })
    // dropZone.addEventListener("drop", e => {
    //     e.preventDefault();

    //     if(e.dataTransfer.length) {
    //         inputElement.file=e.dataTransfer.files;
    //         thumbnail(dropZone, e.dataTransfer.files[0])
    //     }
        
    //     stockFotoInDropZone.classList.remove("hidden");
    //     HuidigeAvatar.classList.remove("transparent");
    //     uploadFotoOverlay.classList.remove("showUploadFotoOverlay");
    //     uploadFotoOverlay.classList.add("hidden");
    // })
};

// function thumbnail (dropZone, file){
//     let thumbnailElement = dropZone.querySelector(".thumbnail");

//     if(!thumbnailElement) {
//         thumbnailElement = document.createElement("div");
//         thumbnailElement.classList.add("dropzoneThumbnail")
//         dropZone.appenChild(thumbnailElement)
//     }
// }

// ------ End Drop zone voor avatar ------