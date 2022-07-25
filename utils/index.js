export const interpolate = (string) => {
  return eval('`' + string + '`');
};

export const rem = (...px) => {
  return px.map(p => `${parseInt(p) / 16}rem`).join(' ');
};