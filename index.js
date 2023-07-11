const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
};

const targetElements = [
    {
        element: '.header-container',
        animation: {
            delay: 300,
            distance: "0px",
            origin: "bottom",
        }
    },
    {
        element: '.row-container .text',
        animation: {
            delay: 500,
            origin: window.innerWidth > 560 ? "left" : "bottom",
        }
    },
    {
        element: '.row-container .image',
        animation: {
            delay: 1000,
            origin: window.innerWidth > 560 ? "right" : "bottom",
        }
    }
];

ScrollReveal({ reset: false });

if (targetElements.length > 0) {
    targetElements.forEach(({ element, animation }) => {
        const options = Object.assign({}, defaultProps, animation);
        console.log(element, options);
        ScrollReveal().reveal(element, options);
    });
}
