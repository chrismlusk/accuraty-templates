//
// Enable Bootstrap dropdowns on hover
// ===================================
//
// ...
// ------------------------------------------------------------------------

function enableDropdownOnHover() {
  const dropdowns = [...document.querySelectorAll('.dropdown')];

  function showDropdownMenu(event) {
    const navItem = event.target;
    const navLink = navItem.firstElementChild;
    const dropdownMenu = navLink.nextElementSibling;

    navItem.classList.add('show');
    dropdownMenu.classList.add('show');
    navLink.setAttribute('aria-expanded', true);
  }

  function hideDropdownMenu(event) {
    const navItem = event.target;
    const navLink = navItem.firstElementChild;
    const dropdownMenu = navLink.nextElementSibling;

    navItem.classList.remove('show');
    dropdownMenu.classList.remove('show');
    navLink.setAttribute('aria-expanded', false);
  }

  function navigateToUrl(event) {
    window.location.assign(event.target.href);
  }

  dropdowns.forEach(d => {
    d.addEventListener('mouseenter', showDropdownMenu);
    d.addEventListener('mouseleave', hideDropdownMenu);
    d.addEventListener('click', navigateToUrl, false);
  });
}

export default enableDropdownOnHover;
