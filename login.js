
// Előre megadott felhasználónév és jelszó
const validUsername = "janos"; // Itt add meg az előre megadott felhasználónevet
const validPassword = "jel123"; // Itt add meg az előre megadott jelszót
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Ellenőrzés
    if (username === validUsername && password === validPassword) {
        // Ha a felhasználónév és jelszó helyes, irányítsuk át a főoldalra
        window.location.href = "Filmwikifo.html"; // Itt cseréld le a kívánt URL-re
        return false; // Megakadályozza az űrlap alapértelmezett elküldését
    } else {
        alert("Hibás felhasználónév vagy jelszó!");
        return false; // Megakadályozza az űrlap alapértelmezett elküldését
    }
}