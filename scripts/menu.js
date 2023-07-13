const BACKDROP_CLASS = 'backdrop';
const backdropAnimation = [{ opacity: 0.7 }, { opacity: 0 }];

let isOpen = false;

function onMenuToggle() {
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {

    closeMenu();
    const nav = document.getElementsByTagName('nav')[0];
    if (nav) {
        createBackdrop();
        nav.style.display = 'block';
        const links = nav.getElementsByTagName('a');

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', closeMenu);
        }
        isOpen = true;

    }
}

function closeMenu() {
    removeBackdrop();
    const nav = document.getElementsByTagName('nav')[0];
    if (nav) {
        nav.style.display = 'none';
        const links = nav.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].removeEventListener('click', closeMenu);
        }
    }
    isOpen = false;
}

function createBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.classList.add(BACKDROP_CLASS, 'backdrop-visible');
    backdrop.addEventListener('click', closeMenu);
    document.body.appendChild(backdrop);
}

function removeBackdrop() {
    const backdrop = document.getElementsByClassName(BACKDROP_CLASS)[0];
    console.log(backdrop);
    if (backdrop) {
        backdrop.addEventListener('animationstart', (event) =>
            console.log(event)
        );
        backdrop.addEventListener('animationend', () =>
            backdrop.remove()
        );
        backdrop.animate(backdropAnimation, 2000);
        // backdrop.classList.remove('backdrop-visible');
    }
}