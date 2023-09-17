// Toggle Menu
const header = document.querySelector('header');
const nav = document.querySelector('nav');

function toggleMenu() {
    nav.classList.toggle('show');
}

header.addEventListener('click', toggleMenu);

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
// Scroll to Top Smoothly
scrollToTopButton.addEventListener('click', () => {
    // Smooth scroll to top with slower animation (500ms)
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 500 // Aumente esse valor para tornar a animação mais lenta
    });
});

