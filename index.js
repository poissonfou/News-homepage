const menuOpenBtn = document.querySelector('[aria-label="open menu"]');
const menuCloseBtn = document.querySelector('[aria-label="close menu"]');
const menuMobile = document.getElementById("nav-mobile");

menuOpenBtn.addEventListener("click", () => {
  menuMobile.style.transform = "translateX(0%)";
});

menuCloseBtn.addEventListener("click", () => {
  menuMobile.removeAttribute("style");
});
