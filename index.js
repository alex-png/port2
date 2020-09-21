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
  if (event.target.className === "sideNavBar-section") {
    if (clickedSection) {
      clickedSection.style.background = "";
      clickedSection = event.target;
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      modal.style.display = "block";
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
    } else {
      clickedSection = event.target;
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      modal.style.display = "block";
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
    }
  }
});
