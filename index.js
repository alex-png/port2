const burger = document.getElementById("burger"); //menu icon on navbar
const sideNavBar = document.getElementById("sideNavBar");
const roleText = document.getElementById("dynamic-role"); //changing role following "i am a..."
let sideNavBarOpen = false;
let clickedSection = "";
let modal = document.getElementById("myModal");
let portfolio = document.getElementById("portfolio-page")
const roles = ["developer", "freelancer", "problem solver"];


animatedText(roleText, roles);

burger.addEventListener("click", function () {
  sideNavBarOpen = !sideNavBarOpen; //
  extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
});

sideNavBar.addEventListener("click", function () {
  let target = event.target;
  if(target.className === 'nav-img'){
    target = target.parentElement;
  }
  if (target.className === "sideNavBar-section") {
    if (clickedSection) {
      clickedSection.style.background = "";
      clickedSection = target;
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
      
    } else {
      clickedSection = target;
      console.log(clickedSection)
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
      
    }
  }
});

portfolio.addEventListener("click", function(){
  let target = event.target;
  if(target.id === "findmybeer"){
    window.open("https://www.youtube.com/watch?v=W17TblhF8UI&ab_channel=IcelandSymphonyOrchestra", '_blank')
  }else if(target.id === "mobflix"){
    window.open("https://www.youtube.com/watch?v=W17TblhF8UI&ab_channel=IcelandSymphonyOrchestra", "_blank")
  }else if(target.id === "nilclassdestroyer"){
    window.open("https://www.youtube.com/watch?v=W17TblhF8UI&ab_channel=IcelandSymphonyOrchestra", "_blank")
  }



})