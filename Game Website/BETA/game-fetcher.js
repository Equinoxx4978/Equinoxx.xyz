// Load Details & Game
window.onload = function() {
    displayDetails()
}

// Get Parameters
const parameters = new URLSearchParams(window.location.search)

// See Details
function displayDetails() {
    // 2048
    if (parameters.get('game') == "2048") {
        document.getElementById("gameName").innerHTML = "2048";
        document.getElementById("gameAuthor").innerHTML = "By Gabrielle Cirulli";
        document.getElementById("gameFrame").src = "https://funhtml5games.com?embed=2048bit";
    }
    // Bloons TD 1
    if (parameters.get('game') == "bloons_td_1") {
        document.getElementById("gameName").innerHTML = "Bloons Tower Defense";
        document.getElementById("gameAuthor").innerHTML = "By Ninja Kiwi";
        document.getElementById("gameFrame").src = "https://www.crazygames.com/embed/bloons-tower-defense";
    }
    // Bloons TD 4
    if (parameters.get('game') == "bloons_td_4") {
        document.getElementById("gameName").innerHTML = "Bloons Tower Defense 4";
        document.getElementById("gameAuthor").innerHTML = "By Ninja Kiwi";
        document.getElementById("gameFrame").src = "https://www.addictinggames.com/embed/html5-games/20543";
    }
}