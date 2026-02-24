document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    // Menú móvil
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Scroll suave + cerrar menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });

            navMenu.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Cierra menú si pasa a desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    });
});
