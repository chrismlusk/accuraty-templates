export default function enableMenuToggles(selector = '.menu__toggle') {
  if (typeof selector !== 'string') {
    throw new Error('Menu toggle selector must be a string');
  }

  const toggles = [...document.querySelectorAll(selector)];
  if (!toggles.length) return;

  function toggleMenuList(event) {
    const menuToggle = event.target;
    const menuItemHeader = menuToggle.parentElement;
    const menuList = menuItemHeader.nextElementSibling;
    const menuItem = menuItemHeader.parentElement;

    menuItemHeader.toggleAttribute('aria-expanded');
    menuItem.classList.toggle('show');
    menuList.classList.toggle('show');
  }

  toggles.forEach(t => {
    t.addEventListener('click', toggleMenuList);
  });
}
