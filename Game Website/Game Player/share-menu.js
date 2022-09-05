// Get the modal
var shareMenu = document.getElementById("shareMenu");

// Get the button that opens the modal
var shareMenuButton = document.getElementById("shareMenuButton");

// Get the <span> element that closes the modal
var closeShareMenuButton = document.getElementsByClassName("closeShareMenuButton")[0];

// When the user clicks on the button, open the modal
shareMenuButton.onclick = function() {
  shareMenu.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeShareMenuButton.onclick = function() {
  shareMenu.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == shareMenu) {
    shareMenu.style.display = "none";
  }
}