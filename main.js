let menu = document.getElementById("menu");
let navItems = document.getElementById("navItems");

menu.addEventListener("click", function () {
  if (
    navItems.style.display === "none" ||
    navItems.style.display === ""
  ) {
    navItems.style.display = "flex";
    menu.style.display = "none";
    Cross.style.display = "inline-block";
  }
});

Cross.addEventListener("click", function () {
  navItems.style.display = "none";
  Cross.style.display = "none";
  menu.style.display = "inline-block";
});

