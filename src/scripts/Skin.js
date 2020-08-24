import 'bootstrap';

import skipToContent from './lib/skip-to-content';
import smoothScroll from './lib/smooth-scroll';

import { Global as App } from './app';

document.documentElement.classList.remove('no-js');

skipToContent();
smoothScroll();

const app = new App();
app.init();

//! This is just here to confirm things are working.
//! You will want to delete this.
import Demo from './components/Demo';
new Demo(document.documentElement); // eslint-disable-line
