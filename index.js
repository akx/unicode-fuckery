import m from 'mithril';
import './style.css';
import mappers from './mappers';

const charmap = (fn, text) => {
  const codepoints = [];
  for (var i = 0; ; i++) {
    const codepoint = text.codePointAt(i);
    if (typeof codepoint === 'undefined') break;
    codepoints.push(codepoint);
  }
  const mappedCodepoints = codepoints.map(fn);
  const mappedChars = mappedCodepoints.map(c => typeof c === 'number' ? String.fromCodePoint(c) : c);
  return mappedChars.join('').trim();
};

let message = 'HELLO world 0123456789';

const view = () => [
  m('input', {
    value: message,
    oninput: m.withAttr('value', value => {
      message = value;
    })
  }),
  m(
    'table',
    {
      border: 1
    },
    mappers.map(({ name, fn }) => m('tr', [m('th', name), m('td', charmap(fn, message))]))
  )
];

m.mount(document.body, { view });
