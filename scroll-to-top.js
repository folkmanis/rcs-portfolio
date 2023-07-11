
const visibilityStartPos = 200;
const hidePos = 150;

function scrollToTopClick() {
    console.log('To top');
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

let lastScrollPos = 0;
let ticking = false;
let buttonVisible = false;
const button = document.getElementById('scroll-to-top');

function checkButtonVisibility() {
    if (buttonVisible === false && lastScrollPos > visibilityStartPos) {
        console.log(lastScrollPos);
        buttonVisible = true;
        button.style.visibility = 'visible';
        // TODO show button
    } else if (buttonVisible === true && lastScrollPos < hidePos) {
        console.log(lastScrollPos);
        buttonVisible = false;
        button.style.visibility = 'hidden';
        // TODO hide button
    }
    ticking = false;
}


document.addEventListener('scroll', (event) => {
    lastScrollPos = window.scrollY;
    if (!ticking) {
        ticking = true;
        checkButtonVisibility();
    }
});