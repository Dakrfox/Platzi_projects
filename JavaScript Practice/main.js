const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamIconMenu =  document.querySelector('.menu');

function toggleDesktopMenu(){
    /*(desktopMenu.classList.contains('inactive'))
    ?desktopMenu.classList.remove('inactive')
    :desktopMenu.classList.add('inactive');*/
    desktopMenu.classList.toggle('inactive');
    
}
function toggleMobileMenu(){
    /*(desktopMenu.classList.contains('inactive'))
    ?desktopMenu.classList.remove('inactive')
    :desktopMenu.classList.add('inactive');*/
    mobileMenu.classList.toggle('inactive');
    
}

hamIconMenu.addEventListener('click', toggleMobileMenu)
navMenu.addEventListener('click', toggleDesktopMenu)