// ======================================================
// Demon Field Reports
// Version 2.0
// ======================================================
import { db, collection, addDoc, serverTimestamp } from "./firebase.js";

window.onload = function () {

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const popupInput = document.getElementById("popupInput");

const sendButton = document.getElementById("sendButton");
const closePopup = document.getElementById("closePopup");

const nightButton = document.getElementById("nightButton");
const nightMenu = document.getElementById("nightMenu");

function openComposer(title,message){

    popupTitle.textContent = title;

    popupText.textContent = message;

    popupInput.value = "";

    popup.showModal();

}

function openInfo(title,message){

    popupTitle.textContent = title;

    popupText.textContent = message;

    popupInput.value = "";

    popup.showModal();

}
// ======================================================
// Together
// ======================================================

nightButton.onclick = function () {

    if (nightMenu.style.display === "block") {

        nightMenu.style.display = "none";

    } else {

        nightMenu.style.display = "block";

    }

};

document.getElementById("messageButton").onclick = function () {

    popupTitle.textContent = "💌 Leave Me A Note";

    popupText.innerHTML = `
        <textarea id="noteInput"
            placeholder="Write me a note..."
            style="width:100%;height:120px;padding:10px;border-radius:10px;"></textarea>
        <br><br>
        <button id="saveNote">Send ❤️</button>
    `;

    popup.showModal();

    document.getElementById("saveNote").onclick = async function () {

        const note = document.getElementById("noteInput").value.trim();

        if (note === "") return;

        await addDoc(collection(db, "notes"), {
            message: note,
            created: serverTimestamp()
        });

        popup.close();

        alert("❤️ Note sent!");
    };

}; {

    openComposer(
        "💌 Leave Me A Note",
        "Write anything that's on your heart."
    );

};

document.getElementById("missYouButton").onclick = function () {

    openInfo(
        "❤️ Miss You",
        "❤️ Your 'Miss You' will be sent."
    );

};

document.getElementById("planDateButton").onclick = function () {

    openComposer(
        "📅 Plan A Date",
        "Tell them what you're thinking."
    );

};

document.getElementById("surpriseButton").onclick = function () {

    openComposer(
        "🎲 Surprise Me",
        "Type your surprise idea."
    );

};
// ======================================================
// Cortney Buttons
// ======================================================

document.getElementById("cSong").onclick = function () {

    openComposer(
        "🎵 Send Me A Song",
        "Paste a Spotify, Apple Music, or YouTube link."
    );

};

document.getElementById("cArt").onclick = function () {

    openComposer(
        "🎨 Show Me Your Art",
        "Tell me about it or paste a link. (Photos coming soon.)"
    );

};

document.getElementById("cField").onclick = function () {

    openComposer(
        "📓 Field Report",
        "What's today's field report?"
    );

};

document.getElementById("cWork").onclick = function () {

    openComposer(
        "😂 Work Shenanigans",
        "What happened at work today?"
    );

};

document.getElementById("cLook").onclick = function () {

    openComposer(
        "📸 Show Me What You're Looking At",
        "Describe it for now. Photo uploads are coming."
    );

};

document.getElementById("cThought").onclick = function () {

    openComposer(
        "💭 Random Thoughts",
        "What's on your mind?"
    );

};

// ======================================================
// Brett Buttons
// ======================================================

document.getElementById("bSong").onclick = function () {

    openComposer(
        "🎵 Send Me A Song",
        "Paste a Spotify, Apple Music, or YouTube link."
    );

};

document.getElementById("bArt").onclick = function () {

    openComposer(
        "🎨 Show Me Your Art",
        "Tell me about it or paste a link. (Photos coming soon.)"
    );

};

document.getElementById("bField").onclick = function () {

    openComposer(
        "📓 Field Report",
        "What's today's field report?"
    );

};

document.getElementById("bWork").onclick = function () {

    openComposer(
        "😂 Work Shenanigans",
        "What happened at work today?"
    );

};

document.getElementById("bLook").onclick = function () {

    openComposer(
        "📸 Show Me What You're Looking At",
        "Describe it for now. Photo uploads are coming."
    );

};

document.getElementById("bThought").onclick = function () {

    openComposer(
        "💭 Random Thoughts",
        "What's on your mind?"
    );

};
// ======================================================
// Popup Buttons
// ======================================================

sendButton.onclick = function () {

    const message = popupInput.value.trim();

    if (message === "") {

        alert("Please write something first.");

        return;

    }

    alert(
        "This is where Firebase will send your message.\n\n" +
        message
    );

    popup.close();

};

closePopup.onclick = function () {

    popup.close();

};

// ======================================================
// Night Menu Options
// ======================================================

document.querySelectorAll(".nightOption").forEach(button => {

    button.onclick = function () {

        openInfo(
            "🌙 Spend the Night",
            this.innerText + " request ready to send."
        );

    };

});

// ======================================================
// End
// ======================================================

};