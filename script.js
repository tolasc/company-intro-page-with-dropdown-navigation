var openMenu = document.getElementsByClassName('header-menu');
var sideBar = document.getElementsByClassName('nav-content')[0];
for(var i = 0; i < openMenu.length; i++) {
    openMenu[i].addEventListener("click", function() {
        sideBar.classList.toggle('open');
    });
}
