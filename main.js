const menuEmail = document.querySelector('.navbar-right-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
