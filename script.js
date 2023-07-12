var openMenus = document.getElementsByClassName('header-menu');
var accordionMenus = document.getElementsByClassName('header-accordion');
console.log(accordionMenus)
var sideBar = document.getElementsByClassName('nav-content')[0];
for(var i = 0; i < openMenus.length; i++) {
    openMenus[i].addEventListener("click", function() {
        sideBar.classList.toggle('open');
    });
}
for(var i = 0; i < accordionMenus.length; i++) {
    accordionMenus[i].addEventListener("click", function() {
        this.classList.toggle('open');
    });
}
