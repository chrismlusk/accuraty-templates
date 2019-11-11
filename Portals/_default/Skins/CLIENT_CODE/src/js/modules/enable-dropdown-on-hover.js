import isTouchDevice from '../utils/is-touch-device';

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
  if (!dropdowns.length) return;

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
    if (!link || link === '#') return;

    if (event.metaKey || event.ctrlKey) {
      // Open in a new tab if the user is pressing
      // Control or Command while clicking the link.
      window.open(link, '_blank');
    } else {
      window.location.assign(link);
    }
  }

  if (!isTouchDevice()) {
    dropdowns.forEach(d => {
      d.addEventListener('mouseenter', showDropdownMenu);
      d.addEventListener('mouseleave', hideDropdownMenu);
      d.addEventListener('click', navigateToUrl, false);
    });
  }
}

export default enableDropdownOnHover;
