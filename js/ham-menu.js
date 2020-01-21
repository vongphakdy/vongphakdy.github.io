var navLink = document.querySelectorAll('.nav--id-links');
var toggled = document.querySelector('.toggler');
var navBar = document.querySelector('.navBar--mob');

for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', (e) => {
        toggled.checked = false;
    });
}

toggled.addEventListener('click', (e) => {
    if (toggled.checked == true) {
        navBar.style.position = 'fixed';
    } else {
        navBar.style.position = 'absolute';
    }

    for (i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', (e) => {
            toggled.checked = false;
            navBar.style.position = 'absolute';
        });
    }
})
