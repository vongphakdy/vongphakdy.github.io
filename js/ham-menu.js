var navLink = document.querySelectorAll('.nav--id-links');
var toggled = document.querySelector('.toggler');

function buttonClick (e) {
    toggled.checked = false;
}

for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", buttonClick);
}