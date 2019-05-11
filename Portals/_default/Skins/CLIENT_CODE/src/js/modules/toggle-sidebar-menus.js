//
//
// ----------------------------------------------------------------------------

function toggleSidebarMenus() {
  const toggles = [...document.querySelectorAll('.menu__toggle')];

  function toggleMenuList(event) {
    const menuToggle = event.target;
    const menuItemHeader = menuToggle.parentElement;
    const menuList = menuItemHeader.nextElementSibling;
    const menuItem = menuItemHeader.parentElement;

    menuItemHeader.toggleAttribute('aria-expanded');
    menuItem.classList.toggle('show');
    menuList.classList.toggle('show');
  }

  if (toggles.length) {
    toggles.forEach(t => {
      t.addEventListener('click', toggleMenuList);
    });
  }
}

export default toggleSidebarMenus;
