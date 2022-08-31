// Load Details & Game
window.onload = function() {
    
    displayDetails()
}

// Get Parameters
const parameters = new URLSearchParams(window.location.search)

// Game List
function displayDetails() {
    
    // ░░░██╗░██╗░
    // ██████████╗
    // ╚═██╔═██╔═╝
    // ██████████╗
    // ╚██╔═██╔══╝
    // ░╚═╝░╚═╝░░░

    // 2048
    if (parameters.get('game') == "2048") {
        document.getElementById("gameName").innerHTML = "2048";
        document.getElementById("tabName").innerHTML = "2048";
        document.getElementById("gameAuthor").innerHTML = "By Gabrielle Cirulli";
        document.getElementById("gameFrame").src = "https://funhtml5games.com?embed=2048bit";
    }
    
    // ░█████╗░
    // ██╔══██╗
    // ███████║
    // ██╔══██║
    // ██║░░██║
    // ╚═╝░░╚═╝

    // ██████╗░
    // ██╔══██╗
    // ██████╦╝
    // ██╔══██╗
    // ██████╦╝
    // ╚═════╝░

    // Bloons
    if (parameters.get('game') == "bloons") {
        document.getElementById("gameName").innerHTML = "Bloons";
        document.getElementById("tabName").innerHTML = "Bloons";
        document.getElementById("gameAuthor").innerHTML = "By Ninja Kiwi";
        document.getElementById("gameFrame").src = "https://www.addictinggames.com/embed/html5-games/17154";
    }

    // Bloons TD 1
    if (parameters.get('game') == "bloons_td_1") {
        document.getElementById("gameName").innerHTML = "Bloons Tower Defense";
        document.getElementById("tabName").innerHTML = "Bloons Tower Defense";
        document.getElementById("gameAuthor").innerHTML = "By Ninja Kiwi";
        document.getElementById("gameFrame").src = "https://www.crazygames.com/embed/bloons-tower-defense";
    }
    // Bloons TD 4
    if (parameters.get('game') == "bloons_td_4") {
        document.getElementById("gameName").innerHTML = "Bloons Tower Defense 4";
        document.getElementById("tabName").innerHTML = "Bloons Tower Defense 4";
        document.getElementById("gameAuthor").innerHTML = "By Ninja Kiwi";
        document.getElementById("gameFrame").src = "https://www.addictinggames.com/embed/html5-games/20543";
    }
    // Browser Quest
    if (parameters.get('game') == "browser_quest") {
        document.getElementById("gameName").innerHTML = "BrowserQuest";
        document.getElementById("tabName").innerHTML = "BrowserQuest";
        document.getElementById("gameAuthor").innerHTML = "By Mozilla";
        document.getElementById("gameFrame").src = "https://browserquest.io/";
    }

    // ░█████╗░
    // ██╔══██╗
    // ██║░░╚═╝
    // ██║░░██╗
    // ╚█████╔╝
    // ░╚════╝░

    // Chess
    if (parameters.get('game') == "chess") {
        document.getElementById("gameName").innerHTML = "Chess";
        document.getElementById("tabName").innerHTML = "Chess";
        document.getElementById("gameAuthor").innerHTML = "By Unknown";
        document.getElementById("gameFrame").src = "https://fritz.chessbase.com";
    }

    // ██████╗░
    // ██╔══██╗
    // ██║░░██║
    // ██║░░██║
    // ██████╔╝
    // ╚═════╝░

    // ███████╗
    // ██╔════╝
    // █████╗░░
    // ██╔══╝░░
    // ███████╗
    // ╚══════╝

    // EV.io
    if (parameters.get('game') == "ev_io") {
        document.getElementById("gameName").innerHTML = "EV.io";
        document.getElementById("tabName").innerHTML = "EV.io";
        document.getElementById("gameAuthor").innerHTML = "By Addicting Games";
        document.getElementById("gameFrame").src = "https://ev.io/";
    }
    
    // ███████╗
    // ██╔════╝
    // █████╗░░
    // ██╔══╝░░
    // ██║░░░░░
    // ╚═╝░░░░░

    // ░██████╗░
    // ██╔════╝░
    // ██║░░██╗░
    // ██║░░╚██╗
    // ╚██████╔╝
    // ░╚═════╝░

    // ██╗░░██╗
    // ██║░░██║
    // ███████║
    // ██╔══██║
    // ██║░░██║
    // ╚═╝░░╚═╝

    // Hexar.io
    if (parameters.get('game') == "hexar_io") {
        document.getElementById("gameName").innerHTML = "Hexar.io";
        document.getElementById("tabName").innerHTML = "Hexar.io";
        document.getElementById("gameAuthor").innerHTML = "By MochiBits";
        document.getElementById("gameFrame").src = "http://hexar.io/full/index.html";
    }

    // ██╗
    // ██║
    // ██║
    // ██║
    // ██║
    // ╚═╝

    // Infinite Mario
    if (parameters.get('game') == "infinite_mario") {
        document.getElementById("gameName").innerHTML = "Infinite Mario";
        document.getElementById("tabName").innerHTML = "Infinite Mario";
        document.getElementById("gameAuthor").innerHTML = "By Notch";
        document.getElementById("gameFrame").src = "https://openhtml5games.github.io/games-mirror/dist/mariohtml5/main.html";
    }

    // ░░░░░██╗
    // ░░░░░██║
    // ░░░░░██║
    // ██╗░░██║
    // ╚█████╔╝
    // ░╚════╝░

    // Just A Platformer
    if (parameters.get('game') == "just_a_platformer") {
        document.getElementById("gameName").innerHTML = "Just A Platformer";
        document.getElementById("tabName").innerHTML = "Just A Platformer";
        document.getElementById("gameAuthor").innerHTML = "By TheTastyPi";
        document.getElementById("gameFrame").src = "https://thetastypi.github.io/just-a-platformer/";
    }
    // Jelly Mario
    if (parameters.get('game') == "jelly_mario") {
        document.getElementById("gameName").innerHTML = "Jelly Mario";
        document.getElementById("tabName").innerHTML = "Jelly Mario";
        document.getElementById("gameAuthor").innerHTML = "By Schteppe";
        document.getElementById("gameFrame").src = "https://jellymar.io";
    }

    // ██╗░░██╗
    // ██║░██╔╝
    // █████═╝░
    // ██╔═██╗░
    // ██║░╚██╗
    // ╚═╝░░╚═╝

    // Krunker.io
    if (parameters.get('game') == "krunker_io") {
        document.getElementById("gameName").innerHTML = "Krunker.io";
        document.getElementById("tabName").innerHTML = "Krunker.io";
        document.getElementById("gameAuthor").innerHTML = "By Yendis Entertainment";
        document.getElementById("gameFrame").src = "https://krunker.io";
    }
    
    // ██╗░░░░░
    // ██║░░░░░
    // ██║░░░░░
    // ██║░░░░░
    // ███████╗
    // ╚══════╝

    // Little Alchemy
    if (parameters.get('game') == "little_alchemy_1") {
        document.getElementById("gameName").innerHTML = "Little Alchemy";
        document.getElementById("tabName").innerHTML = "Little Alchemy";
        document.getElementById("gameAuthor").innerHTML = "By Jakub Koziol";
        document.getElementById("gameFrame").src = "https://littlealchemy.com/";
    }
    // Little Alchemy 2
    if (parameters.get('game') == "little_alchemy_2") {
        document.getElementById("gameName").innerHTML = "Little Alchemy 2";
        document.getElementById("tabName").innerHTML = "Little Alchemy 2";
        document.getElementById("gameAuthor").innerHTML = "By Jakub Koziol";
        document.getElementById("gameFrame").src = "https://littlealchemy2.com/";
    }

    // ███╗░░░███╗
    // ████╗░████║
    // ██╔████╔██║
    // ██║╚██╔╝██║
    // ██║░╚═╝░██║
    // ╚═╝░░░░░╚═╝

    // Mahjong
    if (parameters.get('game') == "mahjong") {
        document.getElementById("gameName").innerHTML = "Mahjong";
        document.getElementById("tabName").innerHTML = "Mahjong";
        document.getElementById("gameAuthor").innerHTML = "By Unknown";
        document.getElementById("gameFrame").src = "https://www.free-play-mahjong.com/";
    }
    // Merc Zone
    if (parameters.get('game') == "merc_zone") {
        document.getElementById("gameName").innerHTML = "Merc Zone";
        document.getElementById("tabName").innerHTML = "Merc Zone";
        document.getElementById("gameAuthor").innerHTML = "By Blue Wizard Digital";
        document.getElementById("gameFrame").src = "https://merc.zone/";
    }

    // ███╗░░██╗
    // ████╗░██║
    // ██╔██╗██║
    // ██║╚████║
    // ██║░╚███║
    // ╚═╝░░╚══╝

    // ░█████╗░
    // ██╔══██╗
    // ██║░░██║
    // ██║░░██║
    // ╚█████╔╝
    // ░╚════╝░

    // ██████╗░
    // ██╔══██╗
    // ██████╔╝
    // ██╔═══╝░
    // ██║░░░░░
    // ╚═╝░░░░░

    // Pokemon Showdown
    if (parameters.get('game') == "pokemon_showdown") {
        document.getElementById("gameName").innerHTML = "Pokemon Showdown";
        document.getElementById("tabName").innerHTML = "Pokemon Showdown";
        document.getElementById("gameAuthor").innerHTML = "By Zarel";
        document.getElementById("gameFrame").src = "https://play.pokemonshowdown.com/";
    }
    // Pokemon Showdown
    if (parameters.get('game') == "powerline_io") {
        document.getElementById("gameName").innerHTML = "Powerline.io";
        document.getElementById("tabName").innerHTML = "Powerline.io";
        document.getElementById("gameAuthor").innerHTML = "By Andre Almeida";
        document.getElementById("gameFrame").src = "http://powerline.io/";
    }

    // ░██████╗░
    // ██╔═══██╗
    // ██║██╗██║
    // ╚██████╔╝
    // ░╚═██╔═╝░
    // ░░░╚═╝░░░

    // ██████╗░
    // ██╔══██╗
    // ██████╔╝
    // ██╔══██╗
    // ██║░░██║
    // ╚═╝░░╚═╝

    // ░██████╗
    // ██╔════╝
    // ╚█████╗░
    // ░╚═══██╗
    // ██████╔╝
    // ╚═════╝░

    // Shell Shockers
    if (parameters.get('game') == "shell_shockers") {
        document.getElementById("gameName").innerHTML = "Shell Shockers";
        document.getElementById("tabName").innerHTML = "Shell Shockers";
        document.getElementById("gameAuthor").innerHTML = "By Blue Wizard Digital";
        document.getElementById("gameFrame").src = "https://shellshock.io/";
    }
    // Slope
    if (parameters.get('game') == "slope") {
        document.getElementById("gameName").innerHTML = "Slope";
        document.getElementById("tabName").innerHTML = "Slope";
        document.getElementById("gameAuthor").innerHTML = "By Rob Kay";
        document.getElementById("gameFrame").src = "https://y8.com/embed/slope";
    }

    // ████████╗
    // ╚══██╔══╝
    // ░░░██║░░░
    // ░░░██║░░░
    // ░░░██║░░░
    // ░░░╚═╝░░░

    // Tank Mayhem
    if (parameters.get('game') == "tank_mayhem") {
        document.getElementById("gameName").innerHTML = "Tank Mayhem (2P)";
        document.getElementById("tabName").innerHTML = "Tank Mayhem";
        document.getElementById("gameAuthor").innerHTML = "By Gerald Duncan";
        document.getElementById("gameFrame").src = "https://www.twoplayergames.org/embed/tank-mayhem";
    }

    // ██╗░░░██╗
    // ██║░░░██║
    // ██║░░░██║
    // ██║░░░██║
    // ╚██████╔╝
    // ░╚═════╝░

    // ██╗░░░██╗
    // ██║░░░██║
    // ╚██╗░██╔╝
    // ░╚████╔╝░
    // ░░╚██╔╝░░
    // ░░░╚═╝░░░


    // ░██╗░░░░░░░██╗
    // ░██║░░██╗░░██║
    // ░╚██╗████╗██╔╝
    // ░░████╔═████║░
    // ░░╚██╔╝░╚██╔╝░
    // ░░░╚═╝░░░╚═╝░░

    // ██╗░░██╗
    // ╚██╗██╔╝
    // ░╚███╔╝░
    // ░██╔██╗░
    // ██╔╝╚██╗
    // ╚═╝░░╚═╝

    // ██╗░░░██╗
    // ╚██╗░██╔╝
    // ░╚████╔╝░
    // ░░╚██╔╝░░
    // ░░░██║░░░
    // ░░░╚═╝░░░

    // ███████╗
    // ╚════██║
    // ░░███╔═╝
    // ██╔══╝░░
    // ███████╗
    // ╚══════╝
}