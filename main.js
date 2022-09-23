const menuEmail = document.querySelector('.navbar-right-email');
const desktopMenu = document.querySelector('.desktop-menu');


const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carroCompras = document.querySelector('.navbar-right-shopping');
const menuCompras = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carroCompras.addEventListener('click', toggleCarritoMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    menuCompras.classList.add('inactive')

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    menuCompras.classList.add('inactive')
}


function toggleCarritoMenu(){
    menuCompras.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}



const productList =[];

productList
