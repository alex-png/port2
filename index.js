const burger = document.getElementById("burger"); //menu icon on navbar
const sideNavBar = document.getElementById("sideNavBar");
const roleText = document.getElementById("dynamic-role"); //changing role following "i am a..."
let sideNavBarOpen = false;
let clickedSection = "";
let modal = document.getElementById("myModal");
const roles = ["developer", "freelancer", "problem solver"];


animatedText(roleText, roles);

burger.addEventListener("click", function () {
  sideNavBarOpen = !sideNavBarOpen; //
  extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
});

sideNavBar.addEventListener("click", function () {
  let target = event.target;
  if (target.className === "sideNavBar-section") {
    if (clickedSection) {
      console.log('cant be first')
      clickedSection.style.background = "";
      clickedSection = target;
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
      switchOnModal(modal);
    } else {
      clickedSection = target;
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
      switchOnModal(modal);
    }

    if(target.id === "home"){
      switchOffModal(modal);
    }else if(target.id === 'about'){
      let about = document.getElementById('about-page');
      about.style.display = "block";
      about.style.minHeight = '100vh';
      about.style.minWidth = '100vw';
      about.style.opacity = '100%';
    }else if(target.id === 'portfolio'){
      
    }else if(target.id === 'contact'){
    }

  }
});
