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

  return new Flickity(element, options);
}

export default buildFlickity;
