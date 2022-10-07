function makeFullScreen() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
    document.getElementsByTagName("body")[0].className = "fullScreen";
}

function makeUnfullScreen() {
    document.getElementsByTagName("iframe")[0].className = "unfullScreen";
    document.getElementsByTagName("body")[0].className = "unfullScreen";
}

document.getElementById("hideable").style.display ="none";

function showHideable() {
    document.getElementById("hideable").style.display = "block";
}
function hideHideable() {
    document.getElementById("hideable").style.display ="none";
}