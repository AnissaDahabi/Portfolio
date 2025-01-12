
function openWindowAPropos() {
    let a = document.getElementById("aProposWindow");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
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

