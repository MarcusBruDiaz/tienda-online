const menuEmail = document.querySelector('.navbar-right-email');
const desktopMenu = document.querySelector('.desktop-menu');


const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carroCompras = document.querySelector('.navbar-right-shopping');
const menuCompras = document.querySelector('.product-detail');


const detailProductOpen= document.querySelector('.shopping');

const closeDetailproduct = document.querySelector('.product-detail-close');


const cardsContainer = document.querySelector('.main-container-cards');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carroCompras.addEventListener('click', toggleCarritoMenu);
closeDetailproduct.addEventListener('click',closeDetail)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    menuCompras.classList.add('inactive')
    detailProductOpen.classList.add('inactive');
  
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    menuCompras.classList.add('inactive')
    detailProductOpen.classList.add('inactive');
}


function toggleCarritoMenu(){
    menuCompras.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    detailProductOpen.classList.add('inactive');
}


function openDetailProduct(){
    detailProductOpen.classList.remove('inactive');
    menuCompras.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeDetail(){
    detailProductOpen.classList.add('inactive');
}




const productList =[];

productList.push({
    name:'Bike',
    precio:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name:'Pantalla',
    precio:220,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name:'Computador',
    precio:620,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});




/*<!-- <div class="main-container-cards-product">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">

<div class="main-container-cards-product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    
    <figure>
        <img src="./images/icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div>-->*/


function renderProducts(arr){
    for(product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('main-container-cards-product');
    
        // product = {name,precio,imagen}--> product.imagen
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click',openDetailProduct);

    
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('main-container-cards-product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.precio;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrecio);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure= document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src','./images/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(imgFigure);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }

}

renderProducts(productList);
