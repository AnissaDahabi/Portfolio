
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

/* Expériences professionnelles */

function openWindowExpPro() {
    let o = document.getElementById("expProWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowExpPro() {
    let c = document.getElementById("expProWindow");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Mes Projets */

function openWindowProjets() {
    let o = document.getElementById("projetsWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowProjets() {
    let c = document.getElementById("projetsWindow");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Liens */

function openWindowLiens() {
    let o = document.getElementById("liensWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowLiens() {
    let c = document.getElementById("liensWindow");
    if (c.style.display === "block") {
        c.style.display = "none";
    } else {
        c.style.display = "block";
    }
}

/* Contact */

function openWindowContact() {
    let o = document.getElementById("contactWindow");
    if (o.style.display === "none") {
        o.style.display = "block";
    } else {
        o.style.display = "none";
    }
}

function closeWindowContact() {
    let c = document.getElementById("contactWindow");
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

