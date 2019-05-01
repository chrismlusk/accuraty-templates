//
// Enable mega menu dropdowns
// ==========================
//
// ...
// ------------------------------------------------------------------------

function enableMegaMenu() {
  const dropdowns = [...document.querySelectorAll('.mega-menu__item')];

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
    const link = event.target.href;
    if (link && link !== '#') {
      window.location.assign(link);
    }
  }

  dropdowns.forEach(d => {
    d.addEventListener('mouseenter', showDropdownMenu);
    d.addEventListener('mouseleave', hideDropdownMenu);

    d.addEventListener(
      'click',
      event => {
        // Don't execute the function if the user is opening the link
        // in a new tab by pressing Control or Command while clicking.
        if (event.metaKey || event.ctrlKey) return;
        navigateToUrl(event);
      },
      false
    );
  });
}

export default enableMegaMenu;
