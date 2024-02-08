function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');
    console.log('Haha');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "./assets/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        icon.src = "./assets/close_white_36dp.svg";
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function (event) {
    var scrollpos = localStorage.getItem("scrollpos");
    if (scrollpos) window.scrollTo(0, scrollpos);
  });