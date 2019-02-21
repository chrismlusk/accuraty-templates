import Flickity from 'flickity';

// Most common Flickity settings used in our projects.
const DEFAULT_OPTIONS = {
  autoPlay: false,
  cellAlign: 'left',
  cellSelector: '.carousel-cell',
  wrapAround: true,
};

function buildFlickity(element = '.carousel', providedOptions) {
  if (typeof element !== 'string') {
    throw new Error('Flickity element must be a string');
  }

  // Create a new options object. Default properties must be first so
  // any provided option properties will override them, if necessary.
  const options = {
    ...DEFAULT_OPTIONS,
    ...providedOptions,
  };

  // Initialize a carousel. Pass in the target element and the options.
  const flkty = new Flickity(element, options);

  // Prevent drag and scroll happening at the same time on touch screens.
  flkty.on('dragStart', () => {
    document.ontouchmove = e => e.preventDefault();
  });

  // Restore default scroll behavior on touch screens.
  flkty.on('dragEnd', () => {
    document.ontouchmove = () => true;
  });

  // Return a new Flickity carousel ready to go.
  return flkty;
}

export default buildFlickity;
