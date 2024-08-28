function scrollToElement(elementSelector, instance = 0) {
    // Select all the elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");

link1.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    scrollToElement('.header');
});

link2.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});
