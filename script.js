// Demon Field Reports
// Version 0.3

window.onload = function () {

const nightButton = document.getElementById("nightButton");
const nightMenu = document.getElementById("nightMenu");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

// Spend the Night

nightButton.onclick = function () {

    if (nightMenu.style.display === "block") {
        nightMenu.style.display = "none";
    } else {
        nightMenu.style.display = "block";
    }

};

// Popup

function openPopup(title, text) {

    popupTitle.textContent = title;
    popupText.textContent = text;

    popup.showModal();

}

closePopup.onclick = function () {

    popup.close();

};

// Shared buttons

document.querySelectorAll(".shared").forEach(button => {

    button.onclick = function(){

        if(this.id === "nightButton") return;

        openPopup(
            this.innerText,
            "Request ready to send."
        );

    };

});

// Cortney

document.querySelectorAll(".cortney").forEach(button => {

    button.onclick = function(){

        openPopup(
            this.innerText,
            "Cortney requested this."
        );

    };

});

// Brett

document.querySelectorAll(".brett").forEach(button => {

    button.onclick = function(){

        openPopup(
            this.innerText,
            "Brett requested this."
        );

    };

});

};