function extendOrCollapseWidth(isToggled, sideNavBar){
    if(isToggled){
        sideNavBar.style.width = '6vh';
        sideNavBar.style.padding = '1%';
    }else{
        sideNavBar.style.width = '0';
        sideNavBar.style.padding = '0';
    }
}

function dynamicElementText(domElement, arr){
    let innerText = '';
    for(let i = 0; i < arr.length; i++){
        for(let n = 0; n < arr[i].length; n++){
            //wait 1 second, then execute something
            
        }
    }
  domElement.innerText = innerText;
}