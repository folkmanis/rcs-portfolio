const VISIBILITY_START_POS = 300;
const HIDE_POS = 150;

let ticking = false;
let buttonVisible = false;
let button = null;

function scrollToTopClick() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function updateButtonVisibility(pos) {
    if (buttonVisible === false && pos > VISIBILITY_START_POS) {
        buttonVisible = true;
        button.classList.add('visible');
    } else if (buttonVisible === true && pos < HIDE_POS) {
        buttonVisible = false;
        button.classList.remove('visible');
    }
    ticking = false;
}


function registerScrollListener() {

    button = document.getElementById('scroll-to-top');

    if (!button) {
        return;
    }

    document.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            updateButtonVisibility(window.scrollY);
        }
    });
}

registerScrollListener();