module.exports = {
  // Be sure to update this when you're ready for production!
  production: false,

  // Configuration options. Are you using these items?
  vendors: {
    bootstrap: true,
    flickity: true,
    fontAwesome: false
  },
  fonts: true,
  images: true,
  styles: {
    skinLayouts: true,
    containers: true,
    edn: true
  },
  scripts: true,

  // Webpack settings
  webpack: {
    // Each entry will be turned into its own bundle via Webpack
    entries: {
      main: './src/js/main.js',
      home: './src/js/home.js'
    }
  }
};
