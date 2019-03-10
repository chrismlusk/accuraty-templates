import onReady from './modules/on-ready';

function fixFormClasses() {
  const inputs = [
    ...document.querySelectorAll(
      '.dnnFormItem input:not([type=checkbox]):not([type=radio])'
    ),
  ];

  inputs.forEach(input => {
    input.className = 'form-control';
  });

  const primaryBtns = [...document.querySelectorAll('.dnnPrimaryAction')];
  primaryBtns.forEach(btn => {
    btn.className = 'btn btn-primary';
  });

  const secondaryBtns = [...document.querySelectorAll('.dnnSecondaryAction')];
  secondaryBtns.forEach(btn => {
    btn.className = 'btn btn-outline-primary';
  });
}

fixFormClasses();

onReady(() => {
  const wrapper = document.getElementById('authentication');
  setTimeout(() => {
    wrapper.classList.remove('is-loading');
  }, 250);
});
