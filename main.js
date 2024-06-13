document.addEventListener('DOMContentLoaded', (event) => {
  let menu = document.getElementById("menu");
  let navItems = document.getElementById("navItems");
  let cross = document.getElementById("Cross");
  let slider = document.getElementById("slider");

  const allMicrosoftDropdown = document.getElementById('allMicrosoftDropdown');
  const dropdownItems = document.getElementById('dropdownItems');

  menu.addEventListener("click", function () {
    navItems.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    slider.classList.toggle("hidden");

  });

  cross.addEventListener("click", function () {
    navItems.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    slider.classList.toggle("hidden");
  });

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
      allMicrosoftDropdown.classList.remove('bg-gray-100', 'border', 'border-dashed', 'border-spacing-4');
    }
  });
});

