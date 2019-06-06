function fixMapPath(path, prefix = '.') {
  const nm = 'node_modules';
  const regex = /(\.\.\/)/g;

  if (path.includes(nm)) {
    return `${prefix}/${path.slice(path.indexOf(nm), -1)}`;
  }

  return `${prefix}/src/scss/${path.replace(regex, '')}`;
}

module.exports = fixMapPath;
