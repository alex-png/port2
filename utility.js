function extendOrCollapseWidth(isToggled, sideNavBar){
    console.log('hello?')
    console.log(isToggled);
    if(isToggled){
        sideNavBar.style.width = '250px'
    }else{
        sideNavBar.style.width = '0px'
    }
}