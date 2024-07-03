'use client'

let lastScrollTop = 0;
window.addEventListener('load', () => {
    const targetElement = document.getElementById('header');
    const top_header = document.getElementById('top_header');
    console.log('before')

    if (!targetElement || !top_header) {
        console.error('Target elements not found');
        return;
    }

    console.log('after')
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            targetElement.classList.remove('xl:translate-y-0');
            targetElement.classList.add('xl:translate-y-[-60px]');
            top_header.classList.add('xl:py-4');
        } else {
            // Scrolling up
            targetElement.classList.remove('xl:translate-y-[-60px]');
            targetElement.classList.add('xl:translate-y-0');
            top_header.classList.remove('xl:py-4');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});