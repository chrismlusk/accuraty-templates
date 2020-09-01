import 'bootstrap';

import skipToContent from './lib/skip-to-content';
import smoothScroll from './lib/smooth-scroll';

import App from './App';

import Demo from './components/Demo';
import Header from './components/Header';
import NavMenu from './components/NavMenu';

skipToContent();
smoothScroll();

// Components that should be globally available in this theme.
const ComponentManifest = {
  Demo,
  Header,
  NavMenu,
};

// Instatiate the app.
new App(ComponentManifest);
