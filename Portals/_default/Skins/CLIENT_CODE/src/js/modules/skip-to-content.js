function skipToContent() {
  const main = document.querySelector('main');
  const link = document.createElement('a');

  main.setAttribute('tabindex', '-1');

  link.setAttribute('class', 'skip-link btn btn-light');
  link.setAttribute('href', `#${main.id ? main.id : 'content'}`);
  link.innerText = 'Skip to content';

  link.addEventListener('click', event => {
    event.preventDefault();
    main.focus();
  });

  document.querySelector('body').insertAdjacentElement('afterbegin', link);
}

export default skipToContent;
