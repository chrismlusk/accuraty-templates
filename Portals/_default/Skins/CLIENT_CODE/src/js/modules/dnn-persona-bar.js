//
// Is DNN Persona Bar active?
// ==========================
//
// As of now, DNN 9 does not apply any classes to the `<body>` when the
// Persona Bar is active (it did previously with the Control Bar). The
// `.dnnEditState` class is added when you enter Edit mode, but that's it.
//
// 1. DNN adds the Persona Bar via an iframe, and `.personalBarContainer`
//    is the class applied to the iframe container. Notice that is
//    "personal" with an "L" and not "persona"? Hooray for consistency...
//
// 2. Add custom `.hasDnnPersonaBar` class to the `<body>` if the element
//    exists. Note: Use camel case to match other DNN-injected classes.
// ------------------------------------------------------------------------

function dnnPersonaBar() {
  const body = document.querySelector('#Body');
  const dnnPersona = document.querySelector('.personalBarContainer'); // 1
  if (dnnPersona) body.classList.add('hasDnnPersonaBar'); // 2
}

export default dnnPersonaBar;
