function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
  document.getElementById("mySideNavBG").style.width = "100vw";
  document.getElementById("mySideNav").style.zIndex="3"
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function bkgDark() {
    document.getElementById("bd").style.background = "#8080808c";
}

function bkgDflt() {
    document.getElementById("bd").style.filter = "unset";
}

function divLaydDark() {
  document.getElementById("bd").style.width = "0";
}

function divLaydDarkOpen() {
  document.getElementById("bd").style.width = "118vw";
  document.getElementById("bd").style.display = "block";
  document.getElementById("bd").style.display = "block";
}

window.addEventListener("scroll", (e) => {
  const header = document.getElementById("header");
  const aboutMeColumn1 = document.getElementById("column1");
  const aboutMeColumn2 = document.getElementById("column2");

  if(aboutMeColumn1 && aboutMeColumn2) {
    aboutMeColumn1.style.marginTop = -(window.scrollY/6)+400 + "px";
    aboutMeColumn2.style.marginTop = window.scrollY/6 + "px";
  }

  if(window.scrollY != 0) {
    header.style.animation = "fadeIn 0.5s forwards";

    return;
  }

  header.style.animation = "fadeOut 0.5s forwards";
});