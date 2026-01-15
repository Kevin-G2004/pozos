window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-corporativo');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});