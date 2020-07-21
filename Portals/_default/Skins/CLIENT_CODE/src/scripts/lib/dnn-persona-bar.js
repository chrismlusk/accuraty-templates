//
// DNN Persona Bar
// ===============
//
// Before version 9.3, DNN did not apply any classes to the `<body>` when the
// Persona Bar is active. If you're using an older version, use this function.
//
// 1. DNN adds the Persona Bar via an iframe, and `.personalBarContainer`
//    is the class applied to the iframe container. Notice that is
//    "personal" with an "L" and not "persona"? Hooray for consistency...
//
// 2. Add the `.personabar-visible` class to the `<body>` if the element
//    exists. Note: This is the class DNN adds in version 9.3 and up.
// ------------------------------------------------------------------------

export default function dnnPersonaBar() {
  const dnnPersona = document.querySelector('.personalBarContainer'); // 1
  if (dnnPersona) document.body.classList.add('personabar-visible'); // 2
}
