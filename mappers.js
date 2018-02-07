const mappers = [];
const mapper = (name, fn) => mappers.push({name, fn});

const alphabeticalMap = (capitalA, smallA, zero, fallback) => (c) => {
  if(zero && c >= 49 && c <= 57) {
    return c - 49 + zero;
  }
  if(capitalA && c >= 65 && c <= 90) {
    return c - 65 + capitalA;
  }
  if(smallA && c >= 97 && c <= 122) {
    return c - 97 + smallA;
  }
  if(fallback) {
    return fallback(c);
  }
  return c;
}

mapper('fullwidth', c => {
  const fwc = c - 48 + 65296;
  if (fwc >= 0xff01 && fwc <= 0xffe6) return fwc;
  return c;
});

mapper('emcircle', alphabeticalMap(0x24b6, 0x24d0, 0x2460));
mapper('negcircle', alphabeticalMap(0x1f150, 0x1f150, null));
mapper('fraktur', alphabeticalMap(0x1D504, 0x1D51E, null));
mapper('bold-fraktur', alphabeticalMap(0x1D56C, 0x1D586, null));
mapper('hex', c => c.toString(16) + ' ');


export default mappers;