const burger = document.getElementById('burger');
const sideNavBar = document.getElementById('sideNavBar')
let sideNavBarOpen = false;

burger.addEventListener('click', function(sideNavBarOpen, sideNavBar){
    sideNavBarOpen = !sideNavBarOpen;
    extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
});
