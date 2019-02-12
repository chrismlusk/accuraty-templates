import Flickity from 'flickity';

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

  const options = {
    ...DEFAULT_OPTIONS,
    ...providedOptions,
  };

  const flkty = new Flickity(element, options);

  flkty.on('dragStart', () => {
    document.ontouchmove = e => e.preventDefault();
  });

  flkty.on('dragEnd', () => {
    document.ontouchmove = () => true;
  });

  return flkty;
}

export default buildFlickity;
