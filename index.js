const burger = document.getElementById('burger'); //menu icon on navbar
const sideNavBar = document.getElementById('sideNavBar'); 
const roleText = document.getElementById('dynamic-role'); //changing role following "i am a..."
let sideNavBarOpen = false;
const roles = ['developer', 'freelancer', 'problem solver'];

animatedText(roleText, roles);

burger.addEventListener('click', function(){
    sideNavBarOpen = !sideNavBarOpen; //
    extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
});

sideNavBar.addEventListener('click', function(){
    let clickedSection = event.target;
    
    if(clickedSection.id === "home"){
        
    }else if(clickedSection.id === "about"){

    }else if(clickedSection.id === "portfolio"){
        
    }else if(clickedSection.id === "contact"){

    }
});
//////am i being committed?