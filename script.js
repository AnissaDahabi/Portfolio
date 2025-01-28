
/* A propos */

function openWindowAPropos() {
    let o = document.getElementById("aProposWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowAPropos() {
    let c = document.getElementById("aProposWindow");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Epreuve 4 */

function openWindowEpreuve4() {
    let o = document.getElementById("epreuve4Window");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowEpreuve4() {
    let c = document.getElementById("epreuve4Window");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Epreuve 5 */

function openWindowEpreuve5() {
    let o = document.getElementById("epreuve5Window");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowEpreuve5() {
    let c = document.getElementById("epreuve5Window");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Mes Projets */

function openWindowBts() {
    let o = document.getElementById("btsWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowBts() {
    let c = document.getElementById("btsWindow");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Liens */

function openWindowEntreprise() {
    let o = document.getElementById("entrepriseWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowEntreprise() {
    let c = document.getElementById("entrepriseWindow");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Contact */

function openWindowVeille() {
    let o = document.getElementById("veilleWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowVeille() {
    let c = document.getElementById("veilleWindow");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Bouger les fenêtres */

const draggableWindows = document.querySelectorAll('.draggableWindow');


let offsetX = 0;
let offsetY = 0;
let mouseX = 0;
let mouseY = 0;
let isMouseDown = false;
let currentWindow = null;

draggableWindows.forEach((draggableWindow) => {
    draggableWindow.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        currentWindow = draggableWindow;

        offsetX = currentWindow.offsetLeft - e.clientX;
        offsetY = currentWindow.offsetTop - e.clientY;
    });
});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown || !currentWindow) return;
    e.preventDefault();

    mouseX = e.clientX + offsetX;
    mouseY = e.clientY + offsetY;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const windowWidth = currentWindow.offsetWidth;
    const windowHeight = currentWindow.offsetHeight;

    if (mouseX < 0) {
        mouseX = 0;
    }
    if (mouseX + windowWidth > screenWidth) {
        mouseX = screenWidth - windowWidth;
    }

    if (mouseY < 0) {
        mouseY = 0;
    }
    if (mouseY + windowHeight > screenHeight) {
        mouseY = screenHeight - windowHeight;
    }

    currentWindow.style.left = mouseX + 'px';
    currentWindow.style.top = mouseY + 'px';
});

document.addEventListener('mouseup', (e) => {
    isMouseDown = false;
    currentWindow = null;
});

//Boutons audio

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/2882");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});