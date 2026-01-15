window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-corporativo');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const navPrincipal = document.getElementById('navPrincipal');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navPrincipal.classList.toggle('active');
    document.body.style.overflow = navPrincipal.classList.contains('active') ? 'hidden' : 'auto';
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navPrincipal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navPrincipal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
////////////////////ABRIR MODAL 
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
