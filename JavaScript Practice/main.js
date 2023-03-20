const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamIconMenu = document.querySelector('.menu');
const shoppCarMenu = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardContianer = document.querySelector('.cards-container')

function toggleDesktopMenu() {
    /*(desktopMenu.classList.contains('inactive'))
    ?desktopMenu.classList.remove('inactive')
    :desktopMenu.classList.add('inactive');*/
    if (!productDetail.classList.contains('inactive')) {
        toggleShoppingCart();
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    if (!productDetail.classList.contains('inactive')) {
        toggleShoppingCart();
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    if (!mobileMenu.classList.contains('inactive')) {
        toggleMobileMenu();
    }
    if (!desktopMenu.classList.contains('inactive')) {
        toggleDesktopMenu();
    }
    productDetail.classList.toggle('inactive');
}

shoppCarMenu.addEventListener('click', toggleShoppingCart);
hamIconMenu.addEventListener('click', toggleMobileMenu);
navMenu.addEventListener('click', toggleDesktopMenu);

const productsArr = [];

productsArr.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
)

function renderProducts(arr){
    for (let product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div'); 
        productInfo.classList.add('product-info'); 
    
        const productInfoDiv = document.createElement('div'); 
    
        const productPrice = document.createElement('p'); 
        productPrice.innerText = '$' + product.price; 
    
        const productName = document.createElement('p'); 
        productName.innerText = product.name; 
    
        productInfoDiv.appendChild(productPrice); 
        productInfoDiv.appendChild(productName); 
    
        const productInfoFigure = document.createElement('figure'); 
    
        const productImgCart = document.createElement('img'); 
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart); 
        productInfo.appendChild(productInfoDiv); 
        productInfo.appendChild(productInfoFigure); 
        productCard.appendChild(productImg); 
        productCard.appendChild(productInfo); 
        cardContianer.appendChild(productCard);
    }
}
renderProducts(productsArr);
