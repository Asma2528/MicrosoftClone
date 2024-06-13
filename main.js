document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.getElementById("navItems");

  // Function to toggle submenu visibility and rotate arrow icon
  function toggleSubMenu(menuId, subItemClass, arrowIconId) {
    const menu = document.getElementById(menuId);
    const subItems = document.getElementsByClassName(subItemClass);
    const arrowIcon = document.getElementById(arrowIconId);

    for (let i = 0; i < subItems.length; i++) {
      subItems[i].classList.toggle('hidden');
    }

    menu.classList.toggle('border');
    menu.classList.toggle('border-black');
    menu.classList.toggle('border-1');
    menu.classList.toggle('border-dashed');
    
    arrowIcon.classList.toggle('rotate-180');
  }

  // Event listener using event delegation for all menu items
  navItems.addEventListener('click', (event) => {
    const targetId = event.target.id;

    switch (targetId) {
      case 'ni1':
        toggleSubMenu('ni1', 'nav-subitems1', 'arrowIcon1');
        break;
      case 'ni2':
        toggleSubMenu('ni2', 'nav-subitems2', 'arrowIcon2');
        break;
      case 'ni3':
        toggleSubMenu('ni3', 'nav-subitems3', 'arrowIcon3');
        break;
      case 'ni4':
        toggleSubMenu('ni4', 'nav-subitems4', 'arrowIcon4');
        break;
      case 'ni5':
        toggleSubMenu('ni5', 'nav-subitems5', 'arrowIcon5');
        break;
      case 'ni6':
        toggleSubMenu('ni6', 'nav-subitems6', 'arrowIcon6');
        break;
      default:
        // Do nothing if clicked outside these elements
        return;
    }
  });

  // Toggle menu visibility
  const menu = document.getElementById("menu");
  const cross = document.getElementById("Cross");
  const slider = document.getElementById("slider");
  const allMicrosoftDropdown = document.getElementById('allMicrosoftDropdown');
  const dropdownItems = document.getElementById('dropdownItems');

  menu.addEventListener("click", toggleMenu);
  cross.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navItems.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    slider.classList.toggle("hidden");
  }

  allMicrosoftDropdown.addEventListener('click', () => {
    dropdownItems.classList.toggle('hidden');
    allMicrosoftDropdown.classList.toggle('bg-gray-100');
    allMicrosoftDropdown.classList.toggle('border');
    allMicrosoftDropdown.classList.toggle('border-black');
    allMicrosoftDropdown.classList.toggle('border-dashed');
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!allMicrosoftDropdown.contains(e.target) && !dropdownItems.contains(e.target)) {
      dropdownItems.classList.add('hidden');
      allMicrosoftDropdown.classList.remove('bg-gray-100', 'border', 'border-dashed');
    }
  });
});

document.addEventListener('click', (e) => {
  if (!navItems.contains(e.target) && !menu.contains(e.target) && !Cross.contains(e.target)) {
    navItems.classList.add('hidden');
    menu.classList.remove('hidden');
    Cross.classList.add('hidden');
    slider.classList.remove('hidden');
  }
});