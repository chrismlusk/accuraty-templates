function skipToContent() {
  const body = document.querySelector('body');
  const main = document.querySelector('main');
  const link = document.createElement('a');
  const target = main.id ? main.id : 'content';

  link.setAttribute('id', 'skip-to-content');
  link.setAttribute('class', 'btn btn-light');
  link.setAttribute('href', `#${target}`);
  link.innerText = 'Skip to content';

  link.addEventListener('click', event => {
    event.preventDefault();
    main.setAttribute('tabindex', '-1');
    main.focus();
  });

  body.insertAdjacentElement('afterbegin', link);
}

export default skipToContent;
