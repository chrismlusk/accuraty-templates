const pkg = require('../../package.json');
// NPM rules require the `package.json` name to be lowercase.
// By convention, Accuraty's client codes are uppercase.
const projectName = pkg.name.toUpperCase();

module.exports = {
  name: projectName,

  // Be sure to update this when you're ready for production!
  production: false,

  // Configuration options. Are you using these items?
  vendors: {
    // Set as `true` if you want to get compiled asset from `node_modules`.
    bootstrap: true,
    flickity: false,
    fontAwesome: false,
  },
  fonts: true,
  images: true,
  icons: true,
  styles: {
    skinLayouts: true,
    containers: true,
    edn: true,
    accuratyContainers: true, // ASL-specific containers
  },
  scripts: true,

  // Webpack settings
  webpack: {
    // Each entry will be turned into its own bundle via Webpack.
    // Add a new property for every new bundle you want to generate.
    entries: {
      main: './src/js/main.js',
      home: './src/js/home.js',
      LazyYouTube: './src/js/LazyYouTube.js',
    },
  },
};
