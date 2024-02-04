const navLinks = document.querySelectorAll("ul li");
const workLink = document.getElementById("work");
const activeTab = document.querySelector(".active-tab");

activeTab.style.left = `${workLink.offsetLeft}px`;
activeTab.style.width = `${workLink.offsetWidth}px`;

let preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
    hidePreloader();
});
function hidePreloader() {
  preloader.style.display = "none";
}

window.addEventListener("scroll", checkScrollPosition);
checkScrollPosition();

function checkScrollPosition() {
  const fixedNavbar = document.getElementById("fix-navbar");
  const scrollThreshold = 40;
  if (window.scrollY > scrollThreshold) {
    fixedNavbar.classList.add("nav-scrolled");
  } else {
    fixedNavbar.classList.remove("nav-scrolled");
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active-tab"));
    this.classList.add("active");
    activeTab.style.left = this.offsetLeft + "px";
    activeTab.style.width = this.offsetWidth + "px";
  });
});
