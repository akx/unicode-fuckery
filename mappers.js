const mappers = [];
const mapper = (name, fn) => mappers.push({name, fn});

mapper('fullwidth', c => {
  const fwc = c - 48 + 65296;
  if (fwc >= 0xff01 && fwc <= 0xffe6) return fwc;
  return c;
});

mapper('emcircle', c => {
  if (c >= 49 && c <= 57) return c - 49 + 0x2460;
  if (c >= 65 && c <= 90) return c - 65 + 0x24b6;
  if (c >= 97 && c <= 122) return c - 97 + 0x24d0;
  return c;
});

export default mappers;