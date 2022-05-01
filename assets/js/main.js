let slideInMenu = document.getElementById('slide-in-menu');

function showMenu() {
    console.log("show");
    slideInMenu.style.left = 0;
    slideInMenu.style.right = 0;
}

function closeMenu() {
    console.log("close")
    slideInMenu.style.left = '100%';
    slideInMenu.style.right = '-100%';
}