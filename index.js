const menuOpenBtn = document.querySelector('[aria-label="open menu"]');
const menuCloseBtn = document.querySelector('[aria-label="close menu"]');
const menuMobile = document.getElementById("nav-mobile");
const overlay = document.getElementsByClassName("overlay")[0];

menuOpenBtn.addEventListener("click", () => {
  menuMobile.style.transform = "translateX(0%)";
  overlay.removeAttribute("hidden");
});

menuCloseBtn.addEventListener("click", () => {
  menuMobile.removeAttribute("style");
  overlay.setAttribute("hidden", true);
});
