document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainmenu = document.getElementById('mainmenu');

    hamburger.addEventListener('click', () => {
        mainmenu.classList.toggle('show');
        hamburger.classList.toggle('open');
    });
});
