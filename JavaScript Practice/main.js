const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
function toggleDesktopMenu(){
    /*(desktopMenu.classList.contains('inactive'))
    ?desktopMenu.classList.remove('inactive')
    :desktopMenu.classList.add('inactive');*/
    desktopMenu.classList.toggle('inactive');
    
}

navMenu.addEventListener('click', toggleDesktopMenu)