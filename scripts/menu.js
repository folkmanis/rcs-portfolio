const BACKDROP_CLASS = 'backdrop';
const BACKDROP_HIDDEN_CLASS = 'backdrop-hidden';
const MENU_VISIBLE_CLASS = 'visible';


function onMenuToggle() {

    const menu = document.querySelector('nav');

    if (menu && menu.classList.contains(MENU_VISIBLE_CLASS)) {
        closeMenu();
    } else {
        openMenu();
    }

}

function openMenu() {

    const menu = document.querySelector('nav');

    if (menu) {

        createBackdrop();
        menu.classList.add(MENU_VISIBLE_CLASS);

        const links = menu.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', closeMenu);
        }

    }
}

function closeMenu() {

    const menu = document.querySelector('nav');

    if (menu) {

        removeBackdrop();
        menu.classList.remove('visible');

        const links = menu.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].removeEventListener('click', closeMenu);
        }
    }

}

function createBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.classList.add(BACKDROP_CLASS);
    backdrop.addEventListener('click', closeMenu);
    document.body.appendChild(backdrop);

}

function removeBackdrop() {
    const backdrop = document.getElementsByClassName(BACKDROP_CLASS)[0];
    if (backdrop) {
        backdrop.addEventListener('transitionend', () => {
            backdrop.remove();
        });
        backdrop.classList.add(BACKDROP_HIDDEN_CLASS);
    }
}

/* If window is resized with menu opened (i.e. user rotates screen), we must
do cleanup even if @media size hides side-menu  */

window.addEventListener('resize', closeMenu);