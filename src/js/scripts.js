//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Navbar scroll class for glass effect
    if (mainNav) {
        const onScroll = () => {
            if (window.scrollY > 10) {
                mainNav.classList.add('navbar-scrolled');
            } else {
                mainNav.classList.remove('navbar-scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // run once on load
    }

    // Collapse responsive navbar when a nav link is clicked
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Open feedback modal from URL hash
    var url = window.location.href;
    if (url.includes('#feedback') || url.endsWith('/feedback') || url.endsWith('/feedback/')) {
        var feedbackModalEl = document.getElementById('feedbackModal');
        if (feedbackModalEl) {
            var modal = new bootstrap.Modal(feedbackModalEl);
            modal.show();
        }
    }

});

// Screenshots slider — drag to scroll
(function () {
    const slider = document.querySelector('.screenshots-slider');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    // Prevent drag on images
    document.querySelectorAll('.screenshots-slider img').forEach(img => {
        img.addEventListener('dragstart', e => e.preventDefault());
    });

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
})();
