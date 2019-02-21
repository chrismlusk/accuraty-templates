//
// Enable Bootstrap dropdowns on hover
// ===================================
//
// Bootstrap's dropdowns are only activated via click. This is an intentional
// design decision — and it is a good one. However, some clients want hover
// menus, so this function adds event listeners to each `.dropdown` to trigger
// dropdown menus the same way Bootstrap does on a click event.
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

export default enableDropdownOnHover;
