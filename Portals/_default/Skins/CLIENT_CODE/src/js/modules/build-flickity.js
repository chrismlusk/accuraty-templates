import Flickity from 'flickity';

const DEFAULT_OPTIONS = {
  autoPlay: false,
  cellAlign: 'left',
  cellSelector: '.carousel-cell',
  wrapAround: true
};

function buildFlickity(element = '.carousel', options = DEFAULT_OPTIONS) {
  if (typeof element !== 'string') {
    throw new Error('Flickity element must be a string');
  }

  return new Flickity(element, options);
}

export default buildFlickity;
