# Modules

...

## What's included

- `build-flickity.js`
- `dnn-persona-bar.js`
- `enable-dropdowns-on-hover.js`
- `lazy-youtube.js`
- `on-ready.js`
- `transform-header.js`

### Build Flickity

Initializes a new Flickity carousel. Has default options and target ready for basic use, but can be customized easily by passing in new parameters when you invoke the function (in whichever individual script file you need it in).

Resource: [Flickity docs](https://flickity.metafizzy.co)

### DNN Persona Bar

Before version 9.3, DNN did not apply any classes to the `<body>` when the Persona Bar is active. It _does_ give the `<body>` margin, but having a class is useful for tweaking other styles when the Persona Bar is active.

This function adds the class `.personabar-visible` if it is active.

### Enable dropdowns on hover

Bootstrap's dropdowns are only activated via click. This is an intentional design decision — and it is a good one. However, some clients want hover menus, so this function adds event listeners to each `.dropdown` trigger dropdown menus the same way Bootstrap does on a click event.

### Lazy YouTube

Custom script to lazy load YouTube videos. This function searches for elements with the class `.lazy-yt` and a `data-id` attribute that contains the YouTube video ID, and then it builds a play button and a thumbnail from the video. Once a user clicks, it will replace the thumbnail with an iframe.

### On ready

Vanilla JavaScript `onReady` function.

### Transform header

This function modifies the `.header` based on scroll position. By default, it hides the header after scrolling 300px from the top. However, it can be modified for other transformations such as changing size, color, etc.
