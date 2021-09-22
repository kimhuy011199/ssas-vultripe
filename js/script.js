const handlerMenu = function () {
  const menuButton = document.querySelector(".nav__menu-container");
  menuButton.addEventListener("click", function (e) {
    // Change navbar color
    const navContainer = document.querySelector(".nav");
    navContainer.classList.toggle("nav__color");

    // Show the navbar list
    const navList = document.querySelector(".nav__list");
    navList.classList.toggle("nav__toggle-list");

    // Add animation to the menu button
    const menu = document.querySelector(".nav__menu");
    menu.classList.toggle("nav__menu-animation");
    const menuTop = document.querySelector(".nav__menu--top");
    menuTop.classList.toggle("nav__menu--top-animation");
    const menuBottom = document.querySelector(".nav__menu--bottom");
    menuBottom.classList.toggle("nav__menu--bottom-animation");
  });
};

const removeHoverEffect = function () {
  function hasTouch() {
    return (
      "ontouchstart" in document.documentElement ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  if (hasTouch()) {
    try {
      for (let si in document.styleSheets) {
        let styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;
        for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;
          if (styleSheet.rules[ri].selectorText.match(":hover")) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) {}
  }
};

const init = function () {
  handlerMenu();
  removeHoverEffect();
};

init();
